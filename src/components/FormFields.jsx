import React from 'react';
import Label from './Label';
import InputType from './InputType';

const FormFields = (props) => {
    return (
        <div className="form-group">
            {
                props.inputType == "radio"?
                (
                    <>
                        <Label for={props.labelFor} text={props.labelText}/>
                        <InputType type={props.inputType} name={props.inputName} id={props.inputId} value={props.inputValue} onChange={props.onChange} />
                        <InputType type={props.inputType2} name={props.inputName2} id={props.inputId2} value={props.inputValue2} onChange={props.onChange}/>
                    </>
                ) : 
                null
            }
            {
                props.inputType == "button"?
                <InputType id={props.inputId} value={props.inputType} text={props.inputName} onClick={props.onClick} type={props.inputType}/> : 
                null
            }
            {
                props.inputType != "radio" && props.inputType != "button" ?
                (   <>
                        <Label for={props.labelFor} text={props.labelText}/>
                        <InputType type={props.inputType} name={props.inputName} id={props.inputId} placeHolder={props.inputPlaceholder} value={props.inputValue} onChange={props.onChange} />
                    </>
                ):null
            }
        </div>
    );
};

export default FormFields;