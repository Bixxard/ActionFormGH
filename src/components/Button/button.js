import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      innerTextButton,
      classNameButton,
      labelTextButton,
      onClickButton,
      idButton,
      onOffButton
    } = this.props;
    return (
      onOffButton ?
      <div>
          {labelTextButton && <label>{labelTextButton}</label>}
            <a href={onClickButton}>
                <button
                    id={idButton}
                    className={classNameButton}>
                    {innerTextButton}
                </button>
            </a>
      </div>
      : ''
    );
  }
}
Button.protoType = {
    idButton: PropTypes.string,
    labelTextButton: PropTypes.string,
    innerTextButton: PropTypes.string,
    onClickButton: PropTypes.string,
    classNameButton: PropTypes.string,
    onOffButton: PropTypes.bool
}
Button.defaultProps = {
    idButton: 'defaultIdButton',
    labelTextButton: '',
    innerTextButton: 'textButton',
    onClickButton: '',
    classNameButton: "defaultClassButton",
    onOffButton: true
}
export default Button;
