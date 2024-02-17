import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import Overivew from '../components/overview/Overivew';
import Chart from '../components/chart/Chart';
import Featured from '../components/featured/Featured';
import ListTable from '../components/table/Table';
import { Helmet } from "react-helmet";
export default function HomePage() {
  return (
    <DashboardLayout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <Overivew />
      <div className="charts p-4 flex gap-10 flex-col md:flex-row">
        <Featured
          title="Total Savings"
          longTitle="Total Savings made This Month"
          desc="Total Savings for Period of 6 MOnths"
          amount="₦300M"
        />
        <Chart aspect={2 / 1} title="Total Revenue for last 6 months" />
      </div>
      <div className="listContainer bg-white rounded-md">
        <div className="listTitle">Latest Transaction</div>
        <ListTable />
      </div>
    </DashboardLayout>
  );
}
