import { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { ROUTES } from '../../constants';
import { useTokens } from '../../CombinedTokensProvider';
import { getChainNameAndColor } from '../../utils/chains';
import { useCurrencyConversions } from '../../CurrencyConversionsProvider';

import TokenLogo from '../../ui/TokenLogo';

function TokenList() {
  const location = useLocation();
  const { convertToGlobalFormatted } = useCurrencyConversions();
  const { loading: loadingTokens, tokens } = useTokens();

  const topTokens = useMemo(() => {
    if (!tokens || !tokens.length) {
      return [];
    }

    return tokens.slice(0, 10);
  }, [tokens]);

  if (loadingTokens) {
    return (
      <div className="w-full">
        <div className="w-32 h-6 py-2 flex-shrink-0 bg-surface-10 mt-12 rounded-md"></div>
        <div className="w-full h-24 mt-4 flex overflow-hidden">
          <div className="w-52 bg-surface-10 h-full rounded-md flex-shrink-0"></div>
          <div className="w-52 bg-surface-10 h-full rounded-md flex-shrink-0 ml-6"></div>
          <div className="w-52 bg-surface-10 h-full rounded-md flex-shrink-0 ml-6"></div>
          <div className="w-52 bg-surface-10 h-full rounded-md flex-shrink-0 ml-6"></div>
          <div className="w-52 bg-surface-10 h-full rounded-md flex-shrink-0 ml-6"></div>
          <div className="w-52 bg-surface-10 h-full rounded-md flex-shrink-0 ml-6"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mt-12">
      <div className="flex justify-between w-full border-b border-element-10 py-4">
        <h2 className="leading-tight font-bold text-1.25 text-high">Tokens</h2>
        {tokens.length > 0 && (
          <Link to={`${ROUTES.TOKENS}/${location.search}`} className="text-low text-0.875">
            View all
          </Link>
        )}
      </div>
      {tokens && !tokens.length && (
        <div className="text-center text-1 md:text-1 text-low mt-4 flex justify-center items-center h-20">
          This address has no tokens.
        </div>
      )}
      <div className="w-full mt-8 flex gap-20 overflow-x-auto pb-12">
        {topTokens.map((token) => (
          <div className="h-full rounded-md flex-shrink-0 flex-col flex" key={token.name}>
            <div className="flex items-start text-low">
              <TokenLogo
                name={token.name}
                address={token.address}
                src={token.logo}
                size="md"
                className="mr-2"
              />
              <div className="flex flex-col text-high">
                <div className="text-1.25 font-bold leading-tight flex items-center">
                  {token.name}{' '}
                </div>
                <div className="flex items-center mt-1">
                  <div className="text-0.875">{convertToGlobalFormatted(token.price)}</div>
                  <div
                    className={`text-0.75 px-1 py-0.5 rounded-md ml-1 font-medium text-black ${
                      getChainNameAndColor(token.chainId)[1]
                    }`}
                  >
                    {getChainNameAndColor(token.chainId)[0]}
                  </div>
                </div>
                <div className="text-0.875 -ml-2 mt-2 rounded-md px-2">
                  Balance: {token.balance}
                </div>
                <div className="text-0.875 bg-green-100 dark:bg-green-600 -ml-2 mt-2 rounded-md px-2">
                  Value: {convertToGlobalFormatted(token.value)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TokenList;
