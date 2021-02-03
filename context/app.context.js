import React, { useState, useEffect } from 'react';

export const AppContext = React.createContext({});

export const AppProvider = ({
  children,
  query
}) => {
  const [experimentId] = useState(process.env.NEXT_PUBLIC_EXPERIMENT_ID);
  const [versionAId] = useState(process.env.NEXT_PUBLIC_VARIATION_A);
  const [versionBId] = useState(process.env.NEXT_PUBLIC_VARIATION_B);
  const [currentVersion, setCurrentVersion] = useState();
  let queryVersion;
  if (query.version) {
    if (query.version === 'a') {
      queryVersion = versionAId;
    } else if (query.version === 'b') {
      queryVersion = versionBId;
    }
  }

  useEffect(() => {
    if (process.browser && !queryVersion) {
      const map = (window?.optimizely?.get('state').getVariationMap() || {});
      setCurrentVersion(map[experimentId]?.id);
    } else if (queryVersion) {
      setCurrentVersion(queryVersion);
    }
  }, [process.browser, queryVersion]);

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
