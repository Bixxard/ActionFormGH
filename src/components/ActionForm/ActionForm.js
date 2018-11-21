import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';
import Label from './Label';
import List from './List';
import ShowMore from './ShowMore'

class ActionForm extends Component {
    constructor() {
        super();
        this.state = {
            valueButton: '',
            searchValue: '',
            limitItem: null,
            showShowMore: true
        }
    };
    componentWillMount() {
        const { limitItemList } = this.props;
        this.setState({limitItem: limitItemList });
    };
    _onClickHandler = () => {
        const {idButton} = this.props;
        this.setState({ valueButton: idButton });
    };
    _onChangeInput = (e) => {
        const  { value } = e.target;
        this.setState({ searchValue: value.toLowerCase() });
    };
    _onClickShowMore = () => {
        const {listItems} = this.props;
        this.setState({limitItem: listItems.length, showShowMore: false})
    };
    render() {
        const {
            //Form
            classNameForm,
            //Lable
            innerTextLable,
            classNameLable,
            onOffLable,
            //Button
            idButton,
            labelTextButton,
            innerTextButton,
            classNameButton,
            urlButton,
            onOffButton,
            //Input
            placeholderInput,
            typeInput,
            classNameInput,
            labelTextInput,
            onOffInput,
            //List
            listItems,
            listIcon,
            classNameList,
            onOffList,
            //ShowMore
            innerTextShowMore,
            classNameShowMore,
            onOffShowMore
        } = this.props;
    return (
        <div className={classNameForm}>
            <div className='col-2 m-5 '>
                <div className="card">
                    <div className='card-header'>
                        <div className='row align-items-center'>
                            <div className='col-6'>
                                <Label
                                    innerTextLable={innerTextLable}
                                    classNameLable={classNameLable}
                                    onOffLable={onOffLable}
                                />
                            </div>
                            <div className='col-6'>
                                <Button
                                    idButton={idButton}
                                    onClickButton={this._onClickHandler}
                                    labelTextButton={labelTextButton}
                                    innerTextButton={innerTextButton}
                                    classNameButton={classNameButton}
                                    urlButton={urlButton}
                                    onOffButton={onOffButton}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <Input
                            placeholderInput={placeholderInput}
                            typeInput={typeInput}
                            classNameInput={classNameInput}
                            onChangeInput={this._onChangeInput}
                            labelTextInput={labelTextInput}
                            onClick={this._onClickShowMore}
                            onOffInput={onOffInput}
                        />
                        <List
                            searchValue={this.state.searchValue}
                            listItems={listItems}
                            listIcon={listIcon}
                            classNameList={classNameList}
                            limitItemList={this.state.limitItem}
                            onOffList={onOffList}
                        />
                    </div>
                        <ShowMore
                            innerTextShowMore={innerTextShowMore}
                            onClickShowMore = {this._onClickShowMore}
                            show={this.state.showShowMore}
                            classNameShowMore={classNameShowMore}
                            onOffShowMore={onOffShowMore}
                        />
                </div>
            </div>
        </div>
        );
    }
}
ActionForm.propTypes = {
    //Form
    classNameForm: PropTypes.string,
    //Lable
    innerTextLable: PropTypes.string,
    classNameLable: PropTypes.string,
    onOffLable: PropTypes.bool,
    //Button
    idButton: PropTypes.string,
    labelTextButton: PropTypes.string,
    innerTextButton: PropTypes.string,
    classNameButton: PropTypes.string,
    urlButton: PropTypes.string,
    onOffButton: PropTypes.bool,
    //Input
    placeholderInput: PropTypes.string,
    typeInput: PropTypes.string,
    classNameInput: PropTypes.string,
    labelTextInput: PropTypes.string,
    onOffInput: PropTypes.bool,
    //List
    listItems: PropTypes.array,
    listIcon: PropTypes.object,
    classNameList: PropTypes.string,
    limitItemList: PropTypes.number,
    onOffList: PropTypes.bool,
    //ShowMore
    innerTextShowMore: PropTypes.string,
    classNameShowMore: PropTypes.string,
    onOffShowMore: PropTypes.bool
};
ActionForm.defaultProps = {
    //Form
    classNameForm: 'defaultClassNameForm',
    //Lable
    innerTextLable: "text",
    classNameLable: "sad",
    onOffLable: true,
    //Button
    idButton: 'defaultIdButton',
    labelTextButton: '',
    innerTextButton: 'textButton',
    classNameButton: "defaultClassButton",
    urlButton: "",
    onOffButton: true,
    //Input
    placeholderInput: 'PlaceholderInput',
    typeInput: 'text',
    classNameInput: 'defaultClassInput',
    labelTextInput: '',
    onOffInput: true,
    //List
    listItems: [],
    listIcon: {},
    classNameList: 'defaultClassInput',
    limitItemList: 0,
    onOffList: true,
    //ShowMore
    innerTextShowMore: 'Show more',
    classNameShowMore: 'Default-class-Show-More',
    onOffShowMore: true
};
export default ActionForm;