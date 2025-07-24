"use client";
import SideNav from "@/components/SideNav";
import HeaderDashboard from "@/components/headerDashboard";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/authContext";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pageTitle, setPageTitle] = useState("");
  const { user, isLoading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    setPageTitle(document.title);
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <div className="absolute inset-0 flex items-center justify-center z-10 bg-white/70">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <>
      <div className="flex w-screen w-full flex-wrap">
        <SideNav />
        <main className="bg-dash bg-no-repeat bg-cover w-[84%] ">
          <div className="flex flex-col justify-between m-2 p-2 bg-gray-200  w-full flex-col flex-wrap rounded rounded-l ">
            <HeaderDashboard
              userName={user?.nom}
              path={pageTitle}
              logout={logout}
            />
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
