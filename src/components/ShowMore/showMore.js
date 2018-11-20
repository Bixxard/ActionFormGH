import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowMore extends Component {

    render() {
        const {
            innerTextShowMore,
            onClickShowMore,
            show,
            classNameShowMore,
            onOffShowMore
        } = this.props;

        return (
            onOffShowMore ?
            show ? <button type='submit'
                           className={classNameShowMore}
                           onClick={onClickShowMore}
            >
                {innerTextShowMore}</button> : '' :''
        );
    }
}
ShowMore.propTypes = {
    innerTextShowMore: PropTypes.string,
    classNameShowMore: PropTypes.string,
    onOffShowMore: PropTypes.bool,
    show: PropTypes.bool,
    onClickShowMore: PropTypes.func
}
ShowMore.defaultProps = {
    innerTextShowMore: 'Show more',
    classNameShowMore: 'Default-class-Show-More',
    onOffShowMore: true,
    show: true,
    onClickShowMore: () => {}
}
export default ShowMore;


