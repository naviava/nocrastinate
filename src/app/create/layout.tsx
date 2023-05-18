import Navbar from "../dashboard/components/Navbar";

interface CreateLayoutProps {
  children: React.ReactNode;
}

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="px-6 pt-[6rem] md:px-24 md:pt-[12rem]">{children}</div>
    </>
  );
}
