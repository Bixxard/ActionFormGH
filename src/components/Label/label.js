import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Label extends Component {
    render() {
        const {
            innerTextLable,
            onOffLable,
            classNameLable

        } = this.props;

        return (
            onOffLable ?
                <label className={classNameLable}>
                    {innerTextLable}
                </label>
                : ''
        );
    }
}
Label.propTypes = {
    innerTextLable: PropTypes.string,
    classNameLable: PropTypes.string,
    onOffLable: PropTypes.bool,
    }
Label.defaultProps = {
        innerTextLable: "text",
        classNameLable: "defaultClassLabel",
        onOffLable: true,
    }
export default Label;