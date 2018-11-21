import React, { Component } from 'react';

import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import ActionForm from './components/ActionForm';
import {MockList} from './mock-list'
import BookSVG from './BookSVG';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ActionForm
              classNameForm='globalForm'
              //Lable
              innerTextLable="Repositories"
              classNameLable=""
              onOffLable={true}
              //Button
              idButton="idButton"
              labelTextButton=""
              innerTextButton="New repository"
              classNameButton="btn btn-success"
              urlButton="https://github.com/new"
              onOffButton={true}
              //Input
              placeholderInput="Find a repository..."
              typeInput='text'
              classNameInput="form-control"
              labelTextInput=""
              onOffInput={true}
              //List
              listItems={MockList}
              listIcon={<BookSVG/>}
              classNameList='list mt-3'
              limitItemList={5}
              onOffList={true}
              //ShowMore
              classNameShowMore='show-more width-full text-left f6 muted-link ml-2 mb-2 border-0'
              innerTextShowMore='Show more'
              onOffShowMore={true}
          />
      </div>
    );
  }
}
export default App;
