import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }

  _onClickHandler = () => {
      const { onClick, id } = this.props;
      // TODO ??
      const { value } = this.state;
      this.setState({ value: id });
      onClick(id);
  };

  render() {
    const {
      innerText,
      className,
      html,
      labelText,
      children,
      id
    } = this.props;
    return (
      <div>
          <div className="children">
            {html && children}
          </div>
          {labelText && <label>{labelText}</label>}
          <button
            onClick={this._onClickHandler}
            id={id}
            className={className}>
            {innerText}
            </button>
      </div>
    );
  }
}

Button.propTypes = {
  innerText: PropTypes.string,
  className: PropTypes.string,
  html: PropTypes.bool,
  labelText: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  id: '',
  innerText: '',
  className: '',
  html: false,
  labelText: '',
  onClick: () => {}
};

export default Button;
