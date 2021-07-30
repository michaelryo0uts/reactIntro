import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  //THIS IS SYNC METHOD
  //COMPONENTDIDMOUNT == WILL BE LOAD FIRST 
  // componentDidMount(){
  //   let result = fetch('/load')
  //   .then(result => result.json())
  //   .then(json => this.setState({ count: json.count }));
  // }
  
  
  // THIS IS ASYNC METHOD
  async componentDidMount(){
    let result = await fetch('/load');
    let json = await result.json();
    this.setState({count : json.count});
  }


  async increment() {
    let result = await fetch('/increment', { method: 'POST' });
    let json = await result.json();
    this.setState({ count: json.count });
  }

  async Reset() {
    let result = await fetch('/reset', { method: 'GET' });
    let json = await result.json();
    this.setState({ count: json.count });
  }

  render() {
    return (
      <>
        <h1>Counter</h1>
        <p>Current count: { this.state.count }</p>
        <p><button onClick={() => this.increment()}>+1</button></p>
        <p><input type="text"></input></p>
        <p><button onClick={() => this.Reset()}>Reset</button></p>
      </>
    );
  }
}

export default App;
