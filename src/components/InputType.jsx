import React from 'react';

const InputType = (props) => {
    return (
        <>
            {
                props.type != "button"?
                <input type={props.type} name={props.name} id={props.id} placeholder={props.placeHolder} value={props.value} onChange={props.onChange}/>: 
                    <input type={props.type} name={props.name} id={props.id} placeholder={props.placeHolder} value={props.value} onClick={props.onClick} />
            }
        </>
    );
};

export default InputType;