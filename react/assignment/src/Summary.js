import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SidePanel from "./SidePanel"; // Import the SidePanel
import Task from "./Task"; // Import the Task component
import "./Summary.css"

const Summary = () => {
    const navigate = useNavigate();
    const [currentData, setCurrentData] = useState([]); // Store multiple entries
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null); // Track which entry is being edited
    const [initialTaskData, setInitialTaskData] = useState(null); // Store data to pass to Task for editing

    // Function to handle saving new entry
    const handleAddNew = (newData) => {
        const newEntry = {
            displayName: newData.displayName,
            logicalName: newData.logicalName,
            options: newData.options,
        };
        setCurrentData((prevData) => [...prevData, newEntry]); // Add new entry
        setIsSidePanelOpen(false); // Close side panel
    };

    // Function to handle updating an existing entry
    const handleUpdate = (updatedData) => {
        const updatedEntries = currentData.map((entry, index) => 
            index === editIndex ? updatedData : entry
        );
        setCurrentData(updatedEntries); // Update the current data with the new data
        setIsEditing(false); // Close the side panel
        setEditIndex(null); // Reset edit index
        setIsSidePanelOpen(false); // Close side panel
    };

    // Function to open the side panel for adding a new entry
    const handleAddClick = () => {
        setIsEditing(false); // Not editing
        setInitialTaskData(null); // No initial data for Task
        setIsSidePanelOpen(true); // Open side panel
    };

    // Function to open the side panel for editing an existing entry
    const handleEditClick = (index) => {
        setEditIndex(index); // Set the index of the row being edited
        setIsEditing(true); // Editing mode
        setInitialTaskData(currentData[index]); // Pass the current row data to Task
        setIsSidePanelOpen(true); // Open side panel
    };

    return (
        <div className="container">
            {/* <h1>Summary</h1> */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
            <button className="add-button" onClick={handleAddClick} style={{ marginLeft: 'auto' }}>+ Add Option</button>
       </div> 
            <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th>Display Name</th>
                        <th>Logical Name</th>
                       {/* <!-- <th>Options</th>--> */}
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.displayName}</td>
                            <td>{entry.logicalName}</td>
                            {/* <td>
                                {entry.options.map((option, optIndex) => (
                                    <div key={optIndex}>
                                        {option.text} (
                                        {option.subOptions && Array.isArray(option.subOptions) && option.subOptions.length > 0
                                            ? option.subOptions.join(", ")
                                            : "No Sub Options"}
                                        )
                                    </div>
                                ))}
                            </td> */}
                            <td>
                                <button className="edit-button" onClick={() => handleEditClick(index)}>
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isSidePanelOpen && (
                <SidePanel onClose={() => setIsSidePanelOpen(false)}>
                    <Task
                        initialData={isEditing ? initialTaskData : null} // Pass data if editing
                        onSave={isEditing ? handleUpdate : handleAddNew} // Different behavior for add or edit
                        mode={isEditing ? "edit" : "add"}
                    />
                </SidePanel>
            )}
        </div>
    );
};

export default Summary;

// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
// import SidePanel from "./SidePanel"; // Import the SidePanel

// const Summary = () => {
//     const location = useLocation();
//     const navigate = useNavigate(); // Initialize useNavigate
//     const { data } = location.state;
//     const [currentData, setCurrentData] = useState([data]); // Store multiple entries
//     const [isEditing, setIsEditing] = useState(false);
//     const [editIndex, setEditIndex] = useState(null); // Track which entry is being edited

//     const handleUpdate = (updatedData) => {
//         const updatedEntries = currentData.map((entry, index) => 
//             index === editIndex ? updatedData : entry
//         );
//         setCurrentData(updatedEntries); // Update the current data with the new data
//         setIsEditing(false); // Close the side panel
//         setEditIndex(null); // Reset edit index
//     };

//     const handleAddNew = (newData) => {
//         const newEntry = {
//             displayName: newData.displayName,
//             logicalName: newData.logicalName,
//             options: newData.options,
//         };
//         setCurrentData((prevData) => [...prevData, newEntry]); // Add new entry
//     };

//     return (
//         <div>
//             <h1>Summary</h1>
//             <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
//                 <thead>
//                     <tr>
//                         <th>Display Name</th>
//                         <th>Logical Name</th>
//                         <th>Options</th>
//                         <th>Edit</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {currentData.map((entry, index) => (
//                         <tr key={index}>
//                             <td>{entry.displayName}</td>
//                             <td>{entry.logicalName}</td>
//                             <td>
//                                 {entry.options.map((option, optIndex) => (
//                                     <div key={optIndex}>
//                                         {option.text} (
//                                         {option.subOptions && Array.isArray(option.subOptions) && option.subOptions.length > 0
//                                             ? option.subOptions.join(", ")
//                                             : "No Sub Options"}
//                                         )
//                                     </div>
//                                 ))}
//                             </td>
//                             <td>
//                                 <button onClick={() => { 
//                                     setEditIndex(index);
//                                     setIsEditing(true); 
//                                 }}>
//                                     Edit
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             <button onClick={() => navigate("/")}>Add Option</button> {/* Navigate to Task */}

//             {isEditing && (
//                 <SidePanel data={currentData[editIndex]} onUpdate={handleUpdate} onClose={() => setIsEditing(false)} />
//             )}
//         </div>
//     );
// };

// export default Summary;






