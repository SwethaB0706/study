import logo from './logo.svg';
import './App.css';
import Calc from './Calc';
import News from './News';
import { RouterProvider } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { createContext, useState } from 'react';
import SecurityContext from './SecurityContext';

function App() {
  // console.log(navigator.language);
  const loggedInDataInLocalStorage = localStorage.getItem("loggedIn");
  const loggedInValue = loggedInDataInLocalStorage && loggedInDataInLocalStorage === "1" ? true: false;
  const [loggedIn, setLoggedIn] = useState(loggedInValue);
  return (
    <SecurityContext.Provider value={{loggedIn, setLoggedIn}}>
        <RouterProvider router={AppRoutes}>
      </RouterProvider>
    </SecurityContext.Provider>
  );
}

export default App;