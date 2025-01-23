import React, { useState } from 'react';
import { TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Select, MenuItem, InputLabel, Box } from '@mui/material';

const Lab03 = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        experience: '',
        country: '',
        gender: '',
    });

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
            <h1>Lab 03: Simple Form</h1>
            <div>
                <TextField
                    label="Name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formValues.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <TextField
                    label="Years of Experience"
                    name="experience"
                    type="number"
                    value={formValues.experience}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <FormControl fullWidth>
                    <InputLabel>Country</InputLabel>
                    <Select
                        name="country"
                        value={formValues.country}
                        onChange={handleChange}
                        required
                    >
                        <MenuItem value="USA">USA</MenuItem>
                        <MenuItem value="India">India</MenuItem>
                        <MenuItem value="Canada">Canada</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                        name="gender"
                        value={formValues.gender}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </div>
        </Box>
    );
};

export default Lab03;

 