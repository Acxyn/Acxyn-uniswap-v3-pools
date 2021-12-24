import React from "react";
import { Token } from "@uniswap/sdk-core";

import TokenLogo from "./TokenLogo";
import TokenLabel from "./TokenLabel";

interface Props {
  baseToken: Token;
  quoteToken: Token;
  fee?: number;
  onClick: () => void;
  tabIndex?: number;
  showNetwork?: boolean;
}

function getChainNameAndColor(chainId: number) {
  const chains: { [id: number]: string[] } = {
    1: ["Mainnet", "bg-gray-200"],
    10: ["Optimism", "bg-red-200"],
    42161: ["Arbitrum", "bg-blue-200"],
    137: ["Polygon", "bg-indigo-300"],
  };

  return chains[chainId] || chains[1];
}

function PoolButton({
  baseToken,
  quoteToken,
  fee,
  onClick,
  tabIndex,
  showNetwork,
}: Props) {
  const [chainName, chainColor] = getChainNameAndColor(baseToken.chainId);
  return (
    <button
      className="focus:outline-none flex items-start p-1"
      tabIndex={tabIndex || 0}
      onClick={onClick}
    >
      <div className="flex mr-4">
        <TokenLogo name={quoteToken.name} address={quoteToken.address} />
        <TokenLogo name={baseToken.name} address={baseToken.address} />
      </div>
      <div className="flex flex-col mx-2">
        <div>
          <TokenLabel name={quoteToken.name} symbol={quoteToken.symbol} />
          <span className="px-1">/</span>
          <TokenLabel name={baseToken.name} symbol={baseToken.symbol} />
        </div>
        {showNetwork && (
          <div
            className={`rounded-md text-sm text-gray-800 mt-2 px-1 ${chainColor}`}
          >
            {chainName}
          </div>
        )}
      </div>
      {fee && (
        <span className="rounded-md text-gray-800 bg-gray-200 ml-1 px-1">
          {fee}%
        </span>
      )}
    </button>
  );
}

export default PoolButton;
