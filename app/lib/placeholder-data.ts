const users = [
  {
    id: 'e9e8f7b2-4b67-4c87-bb33-1bfb4320b95c',
    name: 'Alice Doe',
    email: 'alice@nextmail.com',
    password: 'password123',
  },
  {
    id: 'dc1e5bc4-9147-423f-b0cf-11723d9fa241',
    name: 'Bob Smith',
    email: 'bob@nextmail.com',
    password: 'securepassword',
  },
];

const customers = [
  {
    id: 'a1b2c3d4-5678-9101-1121-314151617181',
    name: 'Company Alpha',
    email: 'alpha@company.com',
    image_url: '/customers/company-alpha.png',
  },
  {
    id: 'b2c3d4e5-6789-1011-2122-324252627282',
    name: 'Beta Solutions',
    email: 'beta@solutions.com',
    image_url: '/customers/beta-solutions.png',
  },
  {
    id: 'c3d4e5f6-7890-1121-2232-435363738484',
    name: 'Gamma Corp',
    email: 'gamma@corp.com',
    image_url: '/customers/gamma-corp.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15000,
    status: 'pending',
    date: '2024-01-15',
  },
  {
    customer_id: customers[1].id,
    amount: 7800,
    status: 'paid',
    date: '2024-02-10',
  },
  {
    customer_id: customers[2].id,
    amount: 12000,
    status: 'paid',
    date: '2024-03-20',
  },
];

const revenue = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 5000 },
  { month: 'Mar', revenue: 6000 },
];

export { users, customers, invoices, revenue };
