import React, { Component } from 'react';
import ListItem from './ListItem'

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
export default List;