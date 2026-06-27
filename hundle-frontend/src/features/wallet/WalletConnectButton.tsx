"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRef } from "react";
import { useAccount } from "wagmi";

const buttonClass =
  "rounded-full bg-gradient-to-r from-[#f8d34a] to-[#f4a300] px-6 py-3 text-sm font-bold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/30";

function shortenAddress(address?: string) {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export default function WalletConnectButton() {
  const { address, isConnected } = useAccount();
  const openedOnce = useRef(false);

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain && isConnected;

        if (ready && !connected && !openedOnce.current) {
          openedOnce.current = true;

          setTimeout(() => {
            openConnectModal();
          }, 600);
        }

        if (!ready) {
          return (
            <button type="button" className={buttonClass}>
              Connect Wallet
            </button>
          );
        }

        if (!connected) {
          return (
            <button type="button" onClick={openConnectModal} className={buttonClass}>
              Connect Wallet
            </button>
          );
        }

        if (chain.unsupported) {
          return (
            <button type="button" onClick={openChainModal} className={buttonClass}>
              Wrong Network
            </button>
          );
        }

        return (
          <button
            type="button"
            onClick={openAccountModal}
            className={buttonClass}
            title={address}
          >
            {shortenAddress(address)}
          </button>
        );
      }}
    </ConnectButton.Custom>
  );
}