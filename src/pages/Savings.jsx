import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import Featured from '../components/featured/Featured';
import Chart from '../components/chart/Chart';
import DataTable from '../components/datatable/DataTable';
import { Helmet } from 'react-helmet';

export default function Savings() {
  return (
    <DashboardLayout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Savings</title>
      </Helmet>
      <div className="charts p-4 flex gap-10 flex-col md:flex-row">
        <Featured
          title="Total Savings"
          longTitle="Total Savings made Today"
          desc="Total Savings for Period of 6MOnths"
          amount="₦500M"
        />
        <Chart aspect={2 / 1} title="Total Savings for last 6 months" />
      </div>
      <DataTable title="Savings" />
    </DashboardLayout>
  );
}
