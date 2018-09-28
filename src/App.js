import React, {Component} from "react";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      goals: [],
      isFetching: false,
      hasError: false,
      notFound: false
    }
  }
  componentDidMount(){
    const url = `https://hkn-soccer-2018-api.lim.bz/api/soccer/goals`;
    fetch(url)
      .then(res => res.json)

  }

  render () {
    return (
    <div className="App">
    <header>
      <h1>Soccer App</h1>
    </header>
    <main>
      <div></div>
      <div className="field">
        <div className="f1"></div>
        <div className="f2"></div>

        <div className="f30"></div>
        <div className="f31"></div>
        <div className="f32"></div>
        <div className="f33"></div>

        <div className="f40"></div>
        <div className="f41"></div>
        <div className="f42"></div>
        <div className="f43"></div>
      </div>
      <div></div>
    </main>
    <footer>
      Made by Tomasz Pięta
    </footer>
  </div>
  );
  }
}
export default App;
