import {Button, Input, InputNumber} from 'antd';

const Lab02 = () => {
    return (<div style={{margin: "10px", padding: "10px", width: "400px"}}>
        <h4>Lab02 using ANT design UI components</h4>
        <Input size='small' placeholder='First name' onChange={e => console.log(e.target.value)}/> <br/>
        <InputNumber size='small' placeholder='Age'></InputNumber>
        <br/>
        <Button type="primary" onClick={() => console.log('register clicked')}>Register</Button>
        <Button danger>Cancel</Button>
    </div>);
};

export default Lab02;