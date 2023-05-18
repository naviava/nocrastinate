// React and Next.
import { useMemo } from "react";
import { usePathname } from "next/navigation";

const useMoods = () => {
  const pathname = usePathname();

  const moods = useMemo(
    () => [
      {
        label: "All",
        href: "/dashboard",
        emoji: "🌈",
        isActive: pathname === "/dashboard",
      },
      {
        label: "Tired",
        href: "/dashboard/tired",
        emoji: "😴",
        isActive: pathname === "/dashboard/tired",
      },
      {
        label: "Sad",
        href: "/dashboard/sad",
        emoji: "😢",
        isActive: pathname === "/dashboard/sad",
      },
      {
        label: "Stressed",
        href: "/dashboard/stressed",
        emoji: "😖",
        isActive: pathname === "/dashboard/stressed",
      },
      {
        label: "Angry",
        href: "/dashboard/angry",
        emoji: "😡",
        isActive: pathname === "/dashboard/angry",
      },
      {
        label: "Burnt Out",
        href: "/dashboard/burnt-out",
        emoji: "🥵",
        isActive: pathname === "/dashboard/burnt-out",
      },
      {
        label: "Feeling Lost",
        href: "/dashboard/feeling-lost",
        emoji: "🥺",
        isActive: pathname === "/dashboard/feeling-lost",
      },
      {
        label: "Overthinking",
        href: "/dashboard/overthinking",
        emoji: "🤯",
        isActive: pathname === "/dashboard/overthinking",
      },
      {
        label: "Anxious",
        href: "/dashboard/anxious",
        emoji: "😰",
        isActive: pathname === "/dashboard/anxious",
      },
    ],
    [pathname]
  );

  return moods;
};
export default useMoods;
