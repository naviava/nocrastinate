// Components.
import MoodsBar from "./components/MoodsBar";
import Navbar from "./components/Navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <MoodsBar>
        <div className="px-6 pt-[6rem] md:px-24 md:pt-[12rem]">{children}</div>
      </MoodsBar>
    </>
  );
}
