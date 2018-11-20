import React, { Component } from 'react';
import PropTypes from "prop-types";

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
Input.propTypes = {
    placeholderInput: PropTypes.string,
    typeInput: PropTypes.string,
    classNameInput: PropTypes.string,
    labelTextInput: PropTypes.string,
    onOffInput: PropTypes.bool,
    onChangeInput: PropTypes.func,
    onClick: PropTypes.func
}
Input.defaultProps = {
    placeholderInput: 'PlaceholderInput',
    typeInput: 'text',
    classNameInput: 'defaultClassInput',
    labelTextInput: '',
    onOffInput: true,
    onChangeInput: () => {},
    onClick: () => {}
}

export default Input;