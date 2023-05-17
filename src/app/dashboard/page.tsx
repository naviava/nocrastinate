"use client";

import { signOut } from "next-auth/react";

interface DashboardPageProps {}

const DashboardPage: React.FC<DashboardPageProps> = ({}) => {
  return (
    <div className="cursor-pointer" onClick={signOut}>
      Logout
    </div>
  );
};

export default DashboardPage;
