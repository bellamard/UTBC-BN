"use client";
import SideNav from "@/components/SideNav";

import HeaderDashboard from "@/components/headerDashboard";
import { useEffect, useState } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    setPageTitle(document.title);
  }, []);

  return (
    <>
      <div className="flex w-screen w-full flex-wrap">
        <SideNav />
        <main className="bg-dash bg-no-repeat bg-cover w-[84%] ">
          <div className="flex flex-col justify-between m-2 p-2 bg-gray-200  w-full flex-col flex-wrap rounded rounded-l ">
            <HeaderDashboard userName="bebe" path={pageTitle} />
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
