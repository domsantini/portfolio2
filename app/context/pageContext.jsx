'use client'

import React from 'react';

// Step 1: Create context
export const PageContext = React.createContext(undefined);

// Step 2: Create context provider
export function PageContextProvider({ children }) {
  const [currentPage, setCurrentPage] = React.useState('home')
  
  const value = {
    currentPage,
    setCurrentPage
  }
  
  return (
    <PageContextProvider.Provider value={value}>
      {children}
    </PageContextProvider.Provider>
  )
}

// Step 3: Create custom hook for context provider
export function usePageContext() {
  const pageContext = React.useContext(PageContext)
  
  if (!pageContext) {
    throw new Error('usePageContext must be used inside the PageContextProvider')
  }
  
  return pageContext;
}