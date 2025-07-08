"use client";

import { useEffect, useState } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex w-screen w-full flex-wrap">
        <main>{children}</main>
      </div>
    </>
  );
}
