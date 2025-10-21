import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface SpacedRepetitionContextType {
  numRepetitions: number;
  dayGaps: number[];
  setNumRepetitions: (num: number) => void;
  setDayGaps: (gaps: number[]) => void;
}

const SpacedRepetitionContext = createContext<SpacedRepetitionContextType | undefined>(undefined);

export function SpacedRepetitionProvider({ children }: { children: ReactNode }) {
  const [numRepetitions, setNumRepetitions] = useState(5);
  const [dayGaps, setDayGaps] = useState([1, 3, 7, 14, 30]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("spacedRepetitionSettings");
    if (saved) {
      const { numRepetitions: savedNum, dayGaps: savedGaps } = JSON.parse(saved);
      setNumRepetitions(savedNum);
      setDayGaps(savedGaps);
    }
  }, []);

  // Save to localStorage whenever settings change
  useEffect(() => {
    localStorage.setItem("spacedRepetitionSettings", JSON.stringify({ numRepetitions, dayGaps }));
  }, [numRepetitions, dayGaps]);

  return (
    <SpacedRepetitionContext.Provider value={{ numRepetitions, dayGaps, setNumRepetitions, setDayGaps }}>
      {children}
    </SpacedRepetitionContext.Provider>
  );
}

export function useSpacedRepetition() {
  const context = useContext(SpacedRepetitionContext);
  if (context === undefined) {
    throw new Error("useSpacedRepetition must be used within a SpacedRepetitionProvider");
  }
  return context;
}
