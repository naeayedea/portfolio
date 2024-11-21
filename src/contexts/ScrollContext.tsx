import React, { createContext, useContext, useState } from 'react';

interface ScrollPositions {
    [key: string]: number;
}

interface ScrollContextType {
    scrollPositions: ScrollPositions;
    setScrollPosition: (path: string, position: number) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScrollContext = () => {
    const context = useContext(ScrollContext);
    if (context === undefined) {
        throw new Error('useScrollContext must be used within a ScrollProvider');
    }
    return context;
};

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [scrollPositions, setScrollPositions] = useState<ScrollPositions>({});

    const setScrollPosition = (path: string, position: number) => {
        setScrollPositions(prev => ({ ...prev, [path]: position }));
    };

    return (
        <ScrollContext.Provider value={{ scrollPositions, setScrollPosition }}>
            {children}
        </ScrollContext.Provider>
    );
};