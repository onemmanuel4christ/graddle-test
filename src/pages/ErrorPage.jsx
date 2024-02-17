import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not Found</title>
      </Helmet>
      <div className="w-full h-[100vh] flex justify-center items-center flex-col">
              <h1 className="text-red-600 font-[900] text-[4rem]">Page Not Found</h1>
              <Link to="/" className="text-blue-700 underline">Go Home</Link>
      </div>
    </div>
  );
}
