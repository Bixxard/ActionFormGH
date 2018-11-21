import React, { Component } from 'react';

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
export default ShowMore;


