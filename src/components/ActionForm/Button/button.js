import React, { Component } from 'react';

class Button extends Component {
  render() {
    const {
      innerTextButton,
      classNameButton,
      labelTextButton,
      onClickButton,
      idButton,
      urlButton,
      onOffButton
    } = this.props;
    return (
      onOffButton ?
      <div>
          {labelTextButton && <label>{labelTextButton}</label>}
            <a href={urlButton}>
                <button
                    onClick={onClickButton}
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
export default Button;
