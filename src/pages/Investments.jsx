import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import DataTable from "../components/datatable/DataTable";
import Featured from "../components/featured/Featured";
import Chart from "../components/chart/Chart";
import { Helmet } from "react-helmet";

export default function Investments() {
  return (
    <DashboardLayout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Investment</title>
      </Helmet>
      <div className="charts p-4 flex gap-10 flex-col md:flex-row">
        <Featured
          title="Total Investment"
          longTitle="Total Investment made Today"
          desc="Total Investment for Period of 6MOnths"
          amount="₦500M"
        />
        <Chart aspect={2 / 1} title="Total Investment for last 6 months" />
      </div>
      <DataTable title="Our Investors" />
    </DashboardLayout>
  );
}
