import React, { Component } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

import ActionForm from './components/ActionForm';
import Label from './components/Label'
import Button from './components/Button';
import Input from './components/Input'
import List from './components/List'
import ShowMore from './components/ShowMore'
import {MockList} from './mock-list'
import BookSVG from './BookSVG';

class App extends Component {
    constructor() {
        super();
        this.state = {
            valueButton: '',
            searchValue: '',
            limitItem: 5,
            stateShowMore: true
        }
    };
    _onChangeInput = (e) => {
        const  { value } = e.target;
        this.setState({ searchValue: value.toLowerCase() });
    };
    _onClickShowMore = () => {
        this.setState({limitItem: MockList.length, stateShowMore: false})
    };
  render() {
    return (
      <div className="App">
          <ActionForm
              classNameForm='globalForm'
              label={<Label
                      innerTextLable="Repositories"
                      classNameLable=""
                      onOffLable={true}
                  />}
              button={<Button
                      idButton="idButton"
                      onClickButton="https://github.com/new"
                      labelTextButton=""
                      innerTextButton="New repository"
                      classNameButton="btn btn-success"
                      onOffButton={true}
                  />}
              input={<Input
                      placeholderInput="Find a repository..."
                      typeInput='text'
                      classNameInput="form-control"
                      onChangeInput={this._onChangeInput}
                      labelTextInput=""
                      onClick={this._onClickShowMore}
                      onOffInput={true}
                  />}
              list={<List
                      searchValue={this.state.searchValue}
                      listItems={MockList}
                      listIcon={<BookSVG/>}
                      classNameList='list mt-3'
                      limitItemList={this.state.limitItem}
                      onOffList={true}
                  />}
              footer={<ShowMore
                      classNameShowMore='show-more width-full text-left f6 muted-link ml-2 mb-2 border-0'
                      innerTextShowMore='Show more'
                      show={this.state.stateShowMore}
                      onOffShowMore={true}
                      onClickShowMore={this._onClickShowMore}
                  />}
          />
      </div>
    );
  }
}
export default App;
