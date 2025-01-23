import React from "react";
import Count from "./Count";
// import PaginatedTable from "./Pagination";
const App = () => {
    return (
        <div classname="App">
            {/* <PaginatedTable/> */}
            <Count/>
        </div>
    )
}
export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Task from "./Task";
// import Summary from "./Summary";


// const App = () => {
//     return (
      
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Task />} />
//                 <Route path="/summary" element={<Summary />} />
//             </Routes>
//         </Router>
       
//     );
// };

// export default App;

// import React from 'react';
// import UserInterface from './UserInterface';
// import Task from './Task';


// function App(){
//     return(
//         <div className="App">
//           <Task/>
//        </div>

//     );
// }
// export default App;



// import React from 'react';
// import RollDice from './RollDice'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import Login from './Login';
// import {
//     BrowserRouter as Router,
//     Route,
//     Routes,
//     Navigate,
//   } from "react-router-dom";
// import Dashboard from './Dashboard';
// library.add(fas)

// function App() {
//     return (
//         <Router>
//             <Routes>
//                <Route path = "/login" element = {<Login/>}/>
//                <Route path = "/dash" element = {<Dashboard/>}/>
//             </Routes>
            
//         </Router>
//     );
// };

// export default App;

// import Markdown from 'react-markdown';
// import './App.css';
// import RollDice from './RollDice';
// import { Markdownsample } from './markdown';

// function App() {
//   return (
//     <div className="App">
//       <RollDice/>
//     </div>
//   );
// }

// export default App;
