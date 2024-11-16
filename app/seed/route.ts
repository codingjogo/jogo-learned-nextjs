import bcrypt from 'bcrypt';
import { invoices, customers, revenue, users } from '../lib/placeholder-data';
import prisma from '../lib/db';

async function main() {
  try {
    // Seed users
    const userPromises = users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return prisma.user.upsert({
        where: { id: user.id },
        update: {},
        create: { ...user, password: hashedPassword },
      });
    });

    // Seed customers
    const customerPromises = customers.map((customer) =>
      prisma.customer.upsert({
        where: { id: customer.id },
        update: {},
        create: { ...customer, imageUrl: customer.image_url },
      })
    );

    // Seed invoices
    const invoicePromises = invoices.map((invoice) =>
      prisma.invoice.create({
        data: {
          ...invoice,
          customerId: invoice.customer_id, // Use the correct key here
          date: new Date(invoice.date), // Ensure the date is a valid Date object
        },
      })
    );

    // Seed revenue
    const revenuePromises = revenue.map((rev) =>
      prisma.revenue.upsert({
        where: { month: rev.month },
        update: {},
        create: rev,
      })
    );

    // Execute all promises concurrently
    await Promise.all([
      ...userPromises,
      ...customerPromises,
      ...invoicePromises,
      ...revenuePromises,
    ]);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();