"use client";

import { createContext, useRef, ReactNode, useState } from "react";

export const ScrollContext = createContext({});

type ScrollContextProviderProps = {
  children: ReactNode;
};

const ScrollContextProvider = ({ children }: ScrollContextProviderProps) => {
  const scrollRef = useRef();

  const [scroll, setScroll] = useState(0);

  return (
    <ScrollContext.Provider
      value={{
        scrollRef,
        scroll,
        setScroll,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContextProvider;
