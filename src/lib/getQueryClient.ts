// React and Next.
import { cache } from "react";

// External packages.
import { QueryClient } from "@tanstack/react-query";

const getQueryClient = cache(() => new QueryClient());
export default getQueryClient;
