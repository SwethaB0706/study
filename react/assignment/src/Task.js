import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Radio, Form } from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const Task = ({ initialData = null, onSave = () => {}, mode }) => {
    const [viewMode, setViewMode] = useState("flat");
    const [flatDisplayName, setFlatDisplayName] = useState("");
    const [flatOptions, setFlatOptions] = useState([{ text: "" }]);
    const [groupDisplayName, setGroupDisplayName] = useState("");
    const [groupOptions, setGroupOptions] = useState([{ text: "", subOptions: [""] }]);
    const [logicalName, setLogicalName] = useState(""); 

    const navigate = useNavigate();

    useEffect(() => {
        if (initialData) {
            const options = Array.isArray(initialData.options) ? initialData.options : [{ text: "" }];
            setFlatDisplayName(initialData.displayName);
            setFlatOptions(options);

            const groupOpts = options.map(option => ({
                text: option.text || "",
                subOptions: Array.isArray(option.subOptions) ? option.subOptions : [""]
            }));
            setGroupDisplayName(initialData.displayName);
            setGroupOptions(groupOpts);

            setLogicalName(transformInputValue(initialData.displayName));
        }
    }, [initialData]);

    const transformInputValue = (input) => {
        return input
            .toLowerCase()
            .replace(/\s+/g, "_")
            .replace(/[^a-z0-9_]/g, "");
    };

    const handleOptionChange = (e, index) => {
        if (viewMode === "flat") {
            const newOptions = [...flatOptions];
            newOptions[index].text = e.target.value;
            setFlatOptions(newOptions);
        } else {
            const newOptions = [...groupOptions];
            newOptions[index].text = e.target.value;
            setGroupOptions(newOptions);
        }
    };

    const handleSubOptionChange = (e, optionIndex, subOptionIndex) => {
        const newOptions = [...groupOptions];
        newOptions[optionIndex].subOptions[subOptionIndex] = e.target.value;
        setGroupOptions(newOptions);
    };

    const addOption = () => {
        if (viewMode === "flat") {
            setFlatOptions([...flatOptions, { text: "" }]);
        } else {
            setGroupOptions([...groupOptions, { text: "", subOptions: [] }]);
        }
    };

    const addSubOption = (optionIndex) => {
        const newOptions = [...groupOptions];
        newOptions[optionIndex].subOptions.push("");
        setGroupOptions(newOptions);
    };

    const removeOption = (index) => {
        if (viewMode === "flat") {
            const newOptions = flatOptions.filter((_, i) => i !== index);
            setFlatOptions(newOptions);
        } else {
            const newOptions = groupOptions.filter((_, i) => i !== index);
            setGroupOptions(newOptions);
        }
    };

    const removeSubOption = (optionIndex, subOptionIndex) => {
        const newOptions = [...groupOptions];
        newOptions[optionIndex].subOptions = newOptions[optionIndex].subOptions.filter((_, i) => i !== subOptionIndex);
        setGroupOptions(newOptions);
    };

    const handleViewModeChange = (e) => {
        setViewMode(e.target.value);
    };

    const handleSave = () => {
        const newData = {
            displayName: viewMode === "flat" ? flatDisplayName : groupDisplayName,
            logicalName: transformInputValue(viewMode === "flat" ? flatDisplayName : groupDisplayName),
            options: viewMode === "flat" ? flatOptions : groupOptions,
        };

        onSave(newData);
        navigate("/summary", { state: { newData } });
    };

    const isFormComplete = () => {
        if (viewMode === "flat") {
            return flatOptions.every(option => option.text.trim() !== "");
        } else {
            return groupOptions.every(
                option => option.text.trim() !== "" && option.subOptions.every(subOption => subOption.trim() !== "")
            );
        }
    };

    const options = viewMode === "flat" ? flatOptions : groupOptions;

    return (
        <div>
            <Form>
                {/* Display Name Input */}
                <Form.Item>
                    <Input
                        placeholder="Display Name"
                        value={viewMode === "flat" ? flatDisplayName : groupDisplayName}
                        onChange={(e) => {
                            if (viewMode === "flat") {
                                setFlatDisplayName(e.target.value);
                            } else {
                                setGroupDisplayName(e.target.value);
                            }
                        }}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        value={viewMode === "flat" ? transformInputValue(flatDisplayName) : transformInputValue(groupDisplayName)}
                        disabled
                        placeholder="Logical Name"
                    />
                </Form.Item>

                {/* View Mode Selection */}
                <Form.Item>
                    <Radio.Group value={viewMode} onChange={handleViewModeChange}>
                        <Radio value="flat">Flat</Radio>
                        <Radio value="group">Group</Radio>
                    </Radio.Group>
                </Form.Item>

                {/* Options and Sub-options Rendering */}
                {options.map((option, optionIndex) => (
                    <Form.Item key={optionIndex}>
                        <Input
                            placeholder={`Option ${optionIndex + 1}`}
                            value={option.text}
                            onChange={(e) => handleOptionChange(e, optionIndex)}
                            addonAfter={(
                                optionIndex !== 0 && (
                                    <MinusCircleOutlined
                                        onClick={() => removeOption(optionIndex)}
                                        style={{ color: "red" }}
                                    />
                                )
                            )}
                        />

                        {viewMode === "group" && option.subOptions.map((subOption, subOptionIndex) => (
                            <div key={subOptionIndex} style={{ display: "flex", alignItems: "baseline" }}>
                                <Input
                                    placeholder={`Sub Option ${subOptionIndex + 1}`}
                                    value={subOption}
                                    onChange={(e) => handleSubOptionChange(e, optionIndex, subOptionIndex)}
                                    style={{ marginRight: "8px" }}
                                    addonAfter={(
                                        <MinusCircleOutlined
                                            onClick={() => removeSubOption(optionIndex, subOptionIndex)}
                                            style={{ color: "red" }}
                                        />
                                    )}
                                />
                            </div>
                        ))}

                        {viewMode === "group" && (
                            <Button onClick={() => addSubOption(optionIndex)} type="dashed" icon={<PlusOutlined />}>
                                Add Sub Option
                            </Button>
                        )}
                    </Form.Item>
                ))}

                <Form.Item>
                    <Button onClick={addOption} type="dashed" icon={<PlusOutlined />}>
                        Add Option
                    </Button>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        onClick={handleSave}
                        disabled={!isFormComplete()}
                    >
                        {mode === "edit" ? "Update" : "Save"}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Task;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Task = ({ initialData = null, onSave = () => {}, mode }) => {
//     // State for flat and group views
//     const [viewMode, setViewMode] = useState("flat");
//     const [flatDisplayName, setFlatDisplayName] = useState("");
//     const [flatOptions, setFlatOptions] = useState([{ text: "" }]);
//     const [groupDisplayName, setGroupDisplayName] = useState("");
//     const [groupOptions, setGroupOptions] = useState([{ text: "", subOptions: [""] }]);
//     const [logicalName, setLogicalName] = useState(""); // Common logical name for both modes

//     const navigate = useNavigate();

//     useEffect(() => {
//         if (initialData) {
//             // Ensure initialData.options is always an array
//             const options = Array.isArray(initialData.options) ? initialData.options : [{ text: "" }];
            
//             // Set for flat mode
//             setFlatDisplayName(initialData.displayName);
//             setFlatOptions(options);

//             // Set for group mode, ensuring subOptions are arrays
//             const groupOpts = options.map(option => ({
//                 text: option.text || "",
//                 subOptions: Array.isArray(option.subOptions) ? option.subOptions : [""]
//             }));
//             setGroupDisplayName(initialData.displayName);
//             setGroupOptions(groupOpts);

//             // Set logical name (common for both modes)
//             setLogicalName(transformInputValue(initialData.displayName));
//         }
//     }, [initialData]);

//     // Transform input to lowercase and replace spaces with "_"
//     const transformInputValue = (input) => {
//         return input
//             .toLowerCase()
//             .replace(/\s+/g, "_")
//             .replace(/[^a-z0-9_]/g, "");
//     };

//     // Handle change for option text (flat or group)
//     const handleOptionChange = (e, index) => {
//         if (viewMode === "flat") {
//             const newOptions = [...flatOptions];
//             newOptions[index].text = e.target.value;
//             setFlatOptions(newOptions);
//         } else {
//             const newOptions = [...groupOptions];
//             newOptions[index].text = e.target.value;
//             setGroupOptions(newOptions);
//         }
//     };

//     // Handle sub-option text change for group mode
//     const handleSubOptionChange = (e, optionIndex, subOptionIndex) => {
//         const newOptions = [...groupOptions];
//         newOptions[optionIndex].subOptions[subOptionIndex] = e.target.value;
//         setGroupOptions(newOptions);
//     };

//     // Add a new option (flat or group)
//     const addOption = () => {
//         if (viewMode === "flat") {
//             setFlatOptions([...flatOptions, { text: "" }]);
//         } else {
//             setGroupOptions([...groupOptions, { text: "", subOptions: [] }]);
//         }
//     };

//     // Add a sub-option in group mode
//     const addSubOption = (optionIndex) => {
//         const newOptions = [...groupOptions];
//         newOptions[optionIndex].subOptions.push("");
//         setGroupOptions(newOptions);
//     };

//     // Remove option (flat or group)
//     const removeOption = (index) => {
//         if (viewMode === "flat") {
//             const newOptions = flatOptions.filter((_, i) => i !== index);
//             setFlatOptions(newOptions);
//         } else {
//             const newOptions = groupOptions.filter((_, i) => i !== index);
//             setGroupOptions(newOptions);
//         }
//     };

//     // Remove sub-option in group mode
//     const removeSubOption = (optionIndex, subOptionIndex) => {
//         const newOptions = [...groupOptions];
//         newOptions[optionIndex].subOptions = newOptions[optionIndex].subOptions.filter((_, i) => i !== subOptionIndex);
//         setGroupOptions(newOptions);
//     };

//     // Handle view mode change (flat or group)
//     const handleViewModeChange = (e) => {
//         setViewMode(e.target.value);
//     };

//     // Handle save action
//     const handleSave = () => {
//         const newData = {
//             displayName: viewMode === "flat" ? flatDisplayName : groupDisplayName,
//             logicalName: transformInputValue(viewMode === "flat" ? flatDisplayName : groupDisplayName),
//             options: viewMode === "flat" ? flatOptions : groupOptions,
//         };

//         // Save and navigate back to summary
//         onSave(newData);
//         navigate("/summary", { state: { newData } });
//     };

//     // Determine if the form is complete (all options and sub-options are filled)
//     const isFormComplete = () => {
//         if (viewMode === "flat") {
//             return flatOptions.every(option => option.text.trim() !== "");
//         } else {
//             return groupOptions.every(
//                 option => option.text.trim() !== "" && option.subOptions.every(subOption => subOption.trim() !== "")
//             );
//         }
//     };

//     // Render options based on the selected view
//     const options = viewMode === "flat" ? flatOptions : groupOptions;

//     return (
//         <div>
//             {/* Display Name Input */}
//             <input
//                 type="text"
//                 placeholder="Display Name"
//                 value={viewMode === "flat" ? flatDisplayName : groupDisplayName}
//                 onChange={(e) => {
//                     if (viewMode === "flat") {
//                         setFlatDisplayName(e.target.value);
//                     } else {
//                         setGroupDisplayName(e.target.value);
//                     }
//                 }}
//             />
//             <input
//                 type="text"
//                 value={viewMode === "flat" ? transformInputValue(flatDisplayName) : transformInputValue(groupDisplayName)}
//                 disabled
//                 placeholder="Logical Name"
//             />
//             <br />

//             {/* View Mode Selection */}
//             <input
//                 type="radio"
//                 value="flat"
//                 checked={viewMode === "flat"}
//                 onChange={handleViewModeChange}
//             />
//             <label> Flat </label>
//             <input
//                 type="radio"
//                 value="group"
//                 checked={viewMode === "group"}
//                 onChange={handleViewModeChange}
//             />
//             <label> Group </label>
//             <br />

//             {/* Options and Sub-options Rendering */}
//             {options.map((option, optionIndex) => (
//                 <div
//                     key={optionIndex}
//                     style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}
//                 >
//                     {/* Main option input */}
//                     <input
//                         type="text"
//                         value={option.text}
//                         onChange={(e) => handleOptionChange(e, optionIndex)}
//                         placeholder={`Option ${optionIndex + 1}`}
//                     />
//                     <input type="text" value={transformInputValue(option.text)} disabled placeholder="value" />

//                     {/* Remove option button */}
//                     {optionIndex !== 0 && (
//                         <button
//                             onClick={() => removeOption(optionIndex)}
//                             style={{
//                                 marginLeft: "10px",
//                                 background: "none",
//                                 border: "none",
//                                 color: "red",
//                                 cursor: "pointer",
//                                 fontSize: "20px",
//                             }}
//                         >
//                             &times;
//                         </button>
//                     )}

//                     {/* Group sub-options rendering */}
//                     {viewMode === "group" && (
//                         <div style={{ marginLeft: "20px", marginTop: ".1px" }}>
//                             {option.subOptions.map((subOption, subOptionIndex) => (
//                                 <div
//                                     key={subOptionIndex}
//                                     style={{
//                                         display: "flex",
//                                         alignItems: "baseline",
//                                         marginBottom: "-9px",
//                                     }}
//                                 >
//                                     <div
//                                         style={{
//                                             width: "10px",
//                                             height: "27px",
//                                             borderLeft: "2px solid #000",
//                                             borderBottom: "2px solid #000",
//                                             marginRight: ".1px",
//                                             marginTop: "0.1px",
//                                         }}
//                                     ></div>
//                                     <input
//                                         type="text"
//                                         value={subOption}
//                                         onChange={(e) => handleSubOptionChange(e, optionIndex, subOptionIndex)}
//                                         placeholder={`Sub Option ${subOptionIndex + 1}`}
//                                     />
//                                     <input type="text" value={transformInputValue(subOption)} disabled placeholder="Logical Sub" />
//                                     {subOptionIndex !== 0 ? (
//                                         <button
//                                             onClick={() => removeSubOption(optionIndex, subOptionIndex)}
//                                             style={{
//                                                 marginLeft: "10px",
//                                                 background: "none",
//                                                 border: "none",
//                                                 color: "red",
//                                                 cursor: "pointer",
//                                                 fontSize: "20px",
//                                             }}
//                                         >
//                                             &times;
//                                         </button>
//                                     ) : (
//                                         <button
//                                             disabled
//                                             style={{
//                                                 marginLeft: "10px",
//                                                 background: "none",
//                                                 border: "none",
//                                                 color: "gray",
//                                                 cursor: "not-allowed",
//                                                 fontSize: "20px",
//                                             }}
//                                         >
//                                             &times;
//                                         </button>
//                                     )}
//                                 </div>
//                             ))}
//                             <br />
//                             {/* Add sub-option button */}
//                             <button onClick={() => addSubOption(optionIndex)} style={{ marginTop: "10px" }}>
//                                 + Add Sub Option
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             ))}

//             {/* Add new option button */}
//             <button onClick={addOption} style={{ marginTop: "20px" }}>
//                 +Add Option</button>
//             <button onClick={handleSave} disabled={!isFormComplete()}>
//                {mode === "edit" ? "Update" : "Save"}
//             </button>
//         </div>
//     ); };

//  export default Task;











