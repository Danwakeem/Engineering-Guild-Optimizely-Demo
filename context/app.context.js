import React, { useState, useEffect } from 'react';

export const AppContext = React.createContext({});

export const AppProvider = ({
  children,
}) => {
  const [experimentId] = useState(process.env.NEXT_PUBLIC_EXPERIMENT_ID);
  const [versionAId] = useState(process.env.NEXT_PUBLIC_VARIATION_A);
  const [versionBId] = useState(process.env.NEXT_PUBLIC_VARIATION_B);
  const [currentVersion, setCurrentVersion] = useState();

  useEffect(() => {
    if (process.browser) {
      const map = window.optimizely.get('state').getVariationMap();
      setCurrentVersion(map[experimentId]?.id);
    }
  }, [process.browser]);

  return (
    <AppContext.Provider
      value={{
        versionAId,
        versionBId,
        currentVersion,
        setCurrentVersion
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
