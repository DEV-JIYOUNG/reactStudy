import React from 'react';
import './Form.css';

//함수형 컴포넌트
const Form = ({value, onChange, onCreate, onKeyPress}) => {
    
    return (
        <div className="form">
            <input value={value} onChange={onChange}
                onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
}
export default Form;