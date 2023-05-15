import "./globals.css";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nocrastinate",
  description: "Say NO to procrastination!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-slate-900 text-gray-200`}>
        {children}
      </body>
    </html>
  );
}
