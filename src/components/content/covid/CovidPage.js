import React from "react";
import CovidDaily from "./CovidDaily";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export default function CovidPage() {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <CovidDaily />
      </QueryClientProvider>
    </div>
  );
}
