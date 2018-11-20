import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ActionForm extends Component {

    render() {
        const {
            classNameForm,
            label,
            button,
            input,
            list,
            footer
        } = this.props;
    return (
        <div className={classNameForm}>
            <div className='col-2 m-5 '>
                <div className="card">
                    <div className='card-header'>
                        <div className='row align-items-center'>
                            <div className='col-6'>{label}</div>
                            <div className='col-6'>{button}</div>
                        </div>
                    </div>
                    <div className="card-body">{input}{list}</div>
                {footer}
                </div>
            </div>
        </div>
        );
    }
}
ActionForm.propTypes = {
    classNameForm: PropTypes.string,
    label: PropTypes.object,
    button: PropTypes.object,
    input: PropTypes.object,
    list: PropTypes.object,
    footer: PropTypes.object,
};
ActionForm.defaultProps = {
    classNameForm: 'defaultClassNameForm',
    label: {},
    button: {},
    input: {},
    list: {},
    footer: {},

};
export default ActionForm;