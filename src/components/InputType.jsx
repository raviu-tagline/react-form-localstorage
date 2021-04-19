import React from 'react';

const InputType = (props) => {
    return (
        <>
            {
                props.type == "button"?
                <button id={props.id} value={props.value} onClick={props.onClick}>{props.text}</button>:
                <input type={props.type} name={props.name} id={props.id} placeholder={props.placeHolder} value={props.value} onChange={props.onChange}/>
            }
        </>
    );
};

export default InputType;