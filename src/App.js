import React, { Component } from 'react';
import Button from './components/Button';

class App extends Component {

  onClick = (value) => {
    console.log('click')
    console.log(value)
  }

  render() {

    return (
      <div className="App">
        <Button
          id="my-asdasdghasdasdghj"
          onClick={this.onClick}
          labelText="test"
          innerText="Create Customer"
          className="custom-class"

        >
          <div><h1>test</h1></div>
        </Button>
        {/*<SearchForm*/}
          {/*list={array}*/}
          {/*filterBy="value:id:email"*/}
          {/*onClick=// DOLJEN BIT SSILKOI*/}
          {/*onChange={samogo inputa}*/}
          {/*href={}*/}
          {/*className={}*/}
          {/*titleText*/}
          {/*buttonText*/}
          {/*placeholder*/}
          {/*limit={5}*/}
          {/*loadMOre={false}*/}
          {/*onClickItemHandler={}*/}
          {/*listIcon={<bookSVG}*/}
        {/*/>*/}

      </div>
    );
  }
}

export default App;
