import "./globals.css";
import { Maven_Pro } from "next/font/google";

// Context providers.
import Providers from "@/context/Providers";

import { images } from "@/utils/utils";

const font = Maven_Pro({ subsets: ["latin"] });

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
      <body className={`font.className bg-slate-800 text-gray-200`}>
        {/* <div className="min-h-screen bg-gradient-to-br from-[#172c4f] to-[#253d63] text-gray-200"> */}
        <Providers>{children}</Providers>
        {/* </div> */}
      </body>
    </html>
  );
}
