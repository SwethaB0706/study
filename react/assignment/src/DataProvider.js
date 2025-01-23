import React, { createContext, useState, useContext } from 'react';

// Create a Context
const DataContext = createContext();

// Create a Provider Component
export const DataProvider = ({ children }) => {
    const [currentData, setCurrentData] = useState({
        options: [], // Initialize with your actual data structure
    });

    return (
        <DataContext.Provider value={{ currentData, setCurrentData }}>
            {children}
        </DataContext.Provider>
    );
};

// Create a hook to use the context
export const useDataContext = () => {
    return useContext(DataContext);
};
