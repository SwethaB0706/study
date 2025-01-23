import React, { useState } from "react";

const UserInterface = () => {

    const [text, setText] = useState("");
    const [options, setOptions] = useState([]); // To store the added options

    const handleChange = (e, index) => {
        const newOptions = [...options];
        newOptions[index] = e.target.value; // Update the specific text box value
        setOptions(newOptions);
    };

    const addOption = () => {
        setOptions([...options, ""]); // Add a new empty option
    };

    // Remove option
    const removeOption = (index) => {
        const newOptions = options.filter((_, i) => i !== index); // Filter out the clicked option
        setOptions(newOptions);
    };


    return (
        <div>
            <input type="radio" value="face" checked />
            <label> Flat </label>
            <input type="radio" value="group" />
            <label> Group </label><br />
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Option1" />
            <input type="text" value={text} placeholder="value" readonly />
            {options.map((option, index) => (
                <div key={index}>
                    <input
                        type="text"
                        value={option}
                        onChange={(e) => handleChange(e, index)}
                        placeholder={`Option ${index + 2}`}
                    />
                    <input type="text" value={option} readOnly placeholder="value" />
                    {/* Cross symbol to remove option */}
                    <button
                        onClick={() => removeOption(index)}
                        style={{
                            marginLeft: "10px",
                            background: "none",
                            border: "none",
                            color: "red",
                            cursor: "pointer",
                            fontSize: "20px",
                        }}
                    >
                        &times;
                    </button>
                </div>
            ))}


            {/* Button to add a new option */}
            <button onClick={addOption}>Add Option</button>

        </div>
    );
}

export default UserInterface;