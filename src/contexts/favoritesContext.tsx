import React, { createContext, ReactNode, useState } from 'react';

import { ArtWork } from 'types';

interface ArtWorksContextProps {
  artWorks: ArtWork[];
  setArtWorks: React.Dispatch<React.SetStateAction<ArtWork[]>>;
}

export const ArtWorksContext = createContext<ArtWorksContextProps | undefined>(undefined);

export const ArtWorksProvider = ({
  children,
  artWorksProp,
}: {
  children: ReactNode;
  artWorksProp: ArtWork[];
}) => {
  const [artWorks, setArtWorks] = useState<ArtWork[]>(artWorksProp || []);

  return (
    <ArtWorksContext.Provider value={{ artWorks, setArtWorks }}>
      {children}
    </ArtWorksContext.Provider>
  );
};
