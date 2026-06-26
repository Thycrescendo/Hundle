"use client";

import "@rainbow-me/rainbowkit/styles.css";

import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { celo, celoAlfajores } from "wagmi/chains";
import { useState } from "react";

const config = getDefaultConfig({
  appName: "Hundle",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "hundle-demo",
  chains: [celo, celoAlfajores],
  ssr: true,
});

export default function Web3Provider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}