// Components.
import AuthContext from "@/context/AuthContext";
import ToasterContext from "@/context/ToasterContext";
import RqProvider from "./QueryClientProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthContext>
      <RqProvider>
        <ToasterContext />
        {children}
      </RqProvider>
    </AuthContext>
  );
}
