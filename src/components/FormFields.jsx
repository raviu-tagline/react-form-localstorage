import React from 'react';
import Label from './Label';
import InputType from './InputType';

const FormFields = (props) => {
    return (
        <div className="form-group">
            <Label for={props.labelFor} text={props.labelText}/>
            <InputType type={props.inputType} name={props.inputName} id={props.inputId} placeHolder={props.inputPlaceholder} value={props.inputValue} onChange={props.onChange} />
            {
                props.inputType == "radio"?
                    <InputType type={props.inputType2} name={props.inputName2} id={props.inputId2} value={props.inputValue2} onChange={props.onChange}/> : null
            }
            {
                props.InputType == "submit"?
                <InputType type={props.inputType} name={props.inputName} id={props.inputId} onClick={props.handleClick}/> : null
            }
        </div>
    );
};

export default FormFields;