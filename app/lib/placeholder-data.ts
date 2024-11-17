const users = [
  {
    id: crypto.randomUUID(),
    name: 'Alice Doe',
    email: 'alice@nextmail.com',
    password: 'password123',
  },
  {
    id: crypto.randomUUID(),
    name: 'Bob Smith',
    email: 'bob@nextmail.com',
    password: 'securepassword',
  },
];

const customers = [
  {
    id: crypto.randomUUID(),
    name: 'Company Alpha',
    email: 'alpha@company.com',
    image_url: '/customers/company-alpha.png',
  },
  {
    id: crypto.randomUUID(),
    name: 'Beta Solutions',
    email: 'beta@solutions.com',
    image_url: '/customers/beta-solutions.png',
  },
  {
    id: crypto.randomUUID(),
    name: 'Gamma Corp',
    email: 'gamma@corp.com',
    image_url: '/customers/gamma-corp.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id, // Connects to first customer
    amount: 15000,
    status: 'pending',
    date: '2024-01-15',
  },
  {
    customer_id: customers[1].id, // Connects to second customer
    amount: 7800,
    status: 'paid',
    date: '2024-02-10',
  },
  {
    customer_id: customers[2].id, // Connects to third customer
    amount: 12000,
    status: 'paid',
    date: '2024-03-20',
  },
];

const revenue = [
  { id: crypto.randomUUID(), month: 'Jan', revenue: 4000 },
  { id: crypto.randomUUID(), month: 'Feb', revenue: 5000 },
  { id: crypto.randomUUID(), month: 'Mar', revenue: 6000 },
];

export { users, customers, invoices, revenue };
