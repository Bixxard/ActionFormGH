import React, { Component } from 'react';

class Input extends Component {
    render() {
        const {
            labelTextInput,
            classNameInput,
            typeInput,
            placeholderInput,
            onChangeInput,
            onClick,
            onOffInput
        } = this.props;
    return (
    onOffInput ?
    <div>
        {labelTextInput && <label>{labelTextInput}</label>}
            <input
                onClick={onClick}
                className={classNameInput}
                type={typeInput}
                placeholder={placeholderInput}
                onChange={onChangeInput}
            />
    </div>
    : ''
        );
    }
}
export default Input;