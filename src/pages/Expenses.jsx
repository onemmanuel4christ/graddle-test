import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import Featured from "../components/featured/Featured";
import DataTable from "../components/datatable/DataTable";
import Chart from "../components/chart/Chart";
import { Helmet } from "react-helmet";

export default function Expenses() {
  return (
    <DashboardLayout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Expenses</title>
      </Helmet>
      <div className="charts p-4 flex gap-10 flex-col md:flex-row">
        <Featured
          title="Total Expenses"
          longTitle="Total Expenses made This week"
          desc="Total Money spent for this week"
          amount="₦502K"
        />
        <Chart aspect={2 / 1} title="Total Savings for last 6 months" />
      </div>
      <DataTable title="Expenses" />
    </DashboardLayout>
  );
}
