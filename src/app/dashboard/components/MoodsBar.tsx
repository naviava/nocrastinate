"use client";

// React and Next.
import Link from "next/link";

// External packages.
import clsx from "clsx";

// Custom hooks.
import useMoods from "@/hooks/useMoods";

interface MoodsBarProps {
  children: React.ReactNode;
}

export default function MoodsBar({ children }: { children: React.ReactNode }) {
  const moods = useMoods();

  return (
    <div className="px-6 pt-[6rem] md:px-24 md:pt-[12rem]">
      <div className="flex w-full min-w-[20rem] gap-x-3 overflow-x-auto rounded-tl-2xl rounded-tr-2xl border-x-2 border-t-2 bg-gray-200/10">
        {moods.map((mood, idx) => (
          <Link
            key={mood.label}
            href={mood.href}
            className="flex flex-1 cursor-pointer items-center justify-center"
          >
            <div
              className={clsx(
                "whitespace-nowrap px-6 py-4 text-center text-lg transition duration-500",
                mood.isActive && "bg-gray-600/80"
              )}
            >
              {mood.label}
            </div>
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
}
