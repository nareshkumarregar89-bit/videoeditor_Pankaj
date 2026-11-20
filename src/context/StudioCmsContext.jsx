import React, { createContext, useContext, useState } from 'react';

const StudioCmsContext = createContext();

export function StudioCmsProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCMS = () => setIsOpen(true);
  const closeCMS = () => setIsOpen(false);

  return (
    <StudioCmsContext.Provider value={{ isOpen, openCMS, closeCMS }}>
      {children}
    </StudioCmsContext.Provider>
  );
}

export function useStudioCms() {
  return useContext(StudioCmsContext);
}
