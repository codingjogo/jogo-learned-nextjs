import bcrypt from 'bcrypt';
import prisma from '../../lib/db';
import {
  users,
  customers,
  invoices,
  revenue,
} from '../../lib/placeholder-data';

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ message: 'Only POST requests are allowed.' }),
      { status: 405 }
    );
  }

  try {
    // Seed users
    for (const user of users) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      await prisma.user.upsert({
        where: { id: user.id },
        update: {},
        create: { ...user, password: hashedPassword },
      });
    }

    // Seed customers
    for (const customer of customers) {
      await prisma.customer.upsert({
        where: { id: customer.id },
        update: {},
        create: { ...customer },
      });
    }

    // Seed invoices
    for (const invoice of invoices) {
      await prisma.invoice.create({
        data: {
          amount: invoice.amount,
          status: invoice.status,
          date: new Date(invoice.date),
          customer: {
            connect: { id: invoice.customer_id },
          },
        },
      });
    }

    // Seed revenue
    for (const rev of revenue) {
      const existingRevenue = await prisma.revenue.findFirst({
        where: { month: rev.month },
      });

      if (!existingRevenue) {
        await prisma.revenue.create({ data: rev });
      }
    }

    return new Response(
      JSON.stringify({ message: 'Database seeded successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error seeding database:', error);
    return new Response(
      JSON.stringify({ message: 'Error seeding database.', error }),
      { status: 500 }
    );
  }
}
