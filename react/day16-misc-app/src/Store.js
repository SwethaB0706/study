import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    addition: {
        num1: 0,
        num2: 0,
        sum: 0
    },
    subtraction: {
        num1: 0,
        num2: 0,
        difference: 0
    }
};

const add = (addition, action) => {
    let {num1, num2} = action.payload;
    let sum = num1 + num2;
    return { ...addition, num1, num2, sum};
};

const subtract = (subtraction, action) => {
    let {num1, num2} = action.payload;
    let difference = num1 - num2;
    return { ...subtraction, num1, num2, difference};
};

const addSlice = createSlice({
    name: "day16",
    initialState: initialState.addition,
    reducers: {
        add
    }
});

const subtractSlice = createSlice({
    name: "day16",
    initialState: initialState.subtraction,
    reducers: {
        subtract
    }
});

export const store = configureStore({
    reducer: {
        "addition": addSlice.reducer,
        "subtraction":subtractSlice.reducer
    }
});

export const  addAction = addSlice.actions;
export const  subtractAction = subtractSlice.actions;