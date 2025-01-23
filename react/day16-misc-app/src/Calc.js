import {useState} from 'react';
import { addAction } from './Store';
import { subtractAction } from './Store';
import {useDispatch, useSelector} from 'react-redux';


const Calc = () => {
    const dispatch = useDispatch();
    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const {num1, num2, sum} = useSelector(state => state.addition);
    const {subtraction} = useSelector(state => state);

    const addButtonClicked = () => {
        dispatch(addAction.add({
            num1: number1,
            num2: number2
        }));
    };
    const subtractButtonClicked = () => {
        dispatch(subtractAction.subtract({
            num1: number1,
            num2: number2
        }));

    };
    return (<div>
        <input type="number" placeholder="Number 1" onChange={e => setNumber1(parseInt(e.target.value))}></input> <br/>
        <input type="number" placeholder="Number 2" onChange={e => setNumber2(parseInt(e.target.value))}></input> <br/>
        <button onClick={addButtonClicked}>Add</button>
        <h5>Sum of {num1} and {num2} is {sum}</h5>
        <hr/>
        <button onClick={subtractButtonClicked}>Subtract</button>
        <h5>Difference of {subtraction.num1} and {subtraction.num2} is {subtraction.difference} </h5>
    </div>);
};
export default Calc;