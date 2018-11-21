import React, { Component } from 'react';

class ListItem extends Component{
    render() {
            const {
                listIcon,
                url,
                data
            } = this.props;
        return (
            <ul className='list-unstyled mb-0'>
                <li className="m-1 mt-2"> {listIcon}
                    <a className="font-weight-bold mb-2 linkSize ml-1" href={url}>{data}</a>
                </li>
            </ul>
        )
    }
}
export default ListItem;