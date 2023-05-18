"use client";

// React and Next.
import Link from "next/link";

// External packages.
import { signOut } from "next-auth/react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className="fixed flex w-full items-center justify-between border-b border-white p-5 md:p-8">
      <div>Logo</div>
      <div className="flex flex-row gap-x-6">
        <Link href="/create">Create</Link>
        <button className="cursor-pointer" onClick={() => signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
