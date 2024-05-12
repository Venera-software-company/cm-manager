"use client"

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

type RootLayout = {
    children: ReactNode;
}

export default function ReactQueryClient ({ children } : RootLayout) {
    const queryClient = new QueryClient();
  
    return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    )
}