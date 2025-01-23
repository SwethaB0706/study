import React from "react";
const SidePanel = ({ onClose, children }) => {
    return (
        <div className ="side-panel" style={{
            position: 'fixed', 
            right: 0, 
            top: 0, 
            width: '100%', // Set width to 100% for mobile
            maxWidth: '500px', // Maximum width for larger screens
            height: '100%', 
            backgroundColor: '#f1f1f1', 
            borderLeft: '2px solid #ccc',
            padding: '20px',
            boxSizing: 'border-box',
            overflowY: 'auto',
            transition: 'transform 0.3s ease', // Add transition for smooth opening/closing
            transform: 'translateX(0)', // Show the panel by default
        }}>
            <button onClick={onClose} style={{ float: 'right',color : "red" }}>X</button>
            {children}
        </div>
    );
};

const styles = {
    '@media (max-width: 600px)': {
        transform: 'translateX(100%)', // Hide the panel off-screen initially
    },
    '@media (min-width: 601px)': {
        transform: 'translateX(0)', // Show the panel normally
    },
};


export default SidePanel;

// import React from "react";

// const SidePanel = ({ onClose, children }) => {
//     return (
//         <div style={{
//             position: 'fixed', 
//             right: 0, 
//             top: 0, 
//             width: '500px', 
//             height: '100%', 
//             backgroundColor: '#f1f1f1', 
//             borderLeft: '2px solid #ccc',
//             padding: '20px',
//             boxSizing: 'border-box',
//             overflowY: 'auto'
//         }}>
//             <button onClick={onClose} style={{ float: 'right' }}>Close</button>
//             {children}
//         </div>
//     );
// };

// export default SidePanel;





