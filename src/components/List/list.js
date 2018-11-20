import React, { Component } from 'react';
import ListItem from './ListItem/index'
import PropTypes from 'prop-types';

class List extends Component {
    render() {
        const {
            listItems,
            listIcon,
            classNameList,
            limitItemList,
            searchValue,
            onOffList
        } = this.props;

        const data = listItems ? listItems.filter(obj => obj.title
        .toLowerCase().indexOf(searchValue)  > -1)
        .slice(0, limitItemList)
        .map((item) => {
            return(
                onOffList ?
                <ListItem
                    key={item.id}
                    url={item.url}
                    data={item.title}
                    listIcon={listIcon}
                />
                    : ''
            )
        }): 'No Item';
        return (
            <div className={classNameList}>
                {data}
            </div>
        );
    }
}
List.propTypes = {
    listItems: PropTypes.array,
    listIcon: PropTypes.object,
    classNameList: PropTypes.string,
    limitItemList: PropTypes.number,
    onOffList: PropTypes.bool,
    searchValue: PropTypes.string
}
List.defaultProps = {
    listItems: [],
    listIcon: {},
    classNameList: 'defaultClassInput',
    limitItemList: 0,
    onOffList: true,
    searchValue: ''
}
export default List;