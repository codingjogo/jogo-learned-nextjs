import { fetchCardData, fetchCustomers, fetchFilteredCustomers, fetchFilteredInvoices, fetchInvoiceById, fetchInvoicesPages, fetchLatestInvoices, fetchRevenue } from '@/app/lib/data'
import React from 'react'

const DashboardPage = async () => {
  const filteredCustomers = await fetchFilteredCustomers("beta");

  console.log("filteredCustomers", filteredCustomers);

  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage