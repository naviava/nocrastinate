// React and Next.
import Image from "next/image";

// Lib and utils.
import { images } from "@/utils/utils";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mx-2 flex w-full max-w-lg flex-col px-2 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto">Logo</div>
        <AuthForm />
      </div>
    </div>
  );
}
