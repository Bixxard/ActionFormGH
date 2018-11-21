import React from 'react';

const Label = (props) => {
        return (
            props.onOffLable ?
                <label className={props.classNameLable}>
                    {props.innerTextLable}
                </label>
            : ''
        );
    }
export default Label;