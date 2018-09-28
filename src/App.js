import React, {Component} from "react";
import Ball from './Ball';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      goals: [],
      isFetching: false,
      hasError: false,
      notFound: false,
      isModalOpened: false
    }
  }
  componentDidMount(){
    const url = `https://hkn-soccer-2018-api.lim.bz/api/soccer/goals`;
    fetch(url)
      .then(res => res.json)

  }
  openModal() {

  }

  render () {
    const {goals, isFetching, hasError, notFound} = this.state;
    return (
    <div className="App">
    <header>
      <h1>Soccer App</h1>
    </header>
    <main>
      <div> </div>
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


        <div class="ball b01"></div>
        <div class="ball b02"></div>
        <div class="ball b03"></div>
        <div class="ball b04"></div>
        <div class="ball b05"></div>
        <div class="ball b06"></div>
        <div class="ball b07"></div>
        <div class="ball b08"></div>
        <div class="ball b09"></div>
        <div class="ball b10"></div>
        <div class="ball b11"></div>
        <div class="ball b12"></div>
        <div class="ball b13"></div>
        <div class="ball b14"></div>
        <div class="ball b15"></div>
        <div class="ball b16"></div>
        <div class="ball b17"></div>
        <div class="ball b18"></div>
        <div class="ball b19"></div>
        <div class="ball b20"></div>
        <div class="ball b21"></div>
        <div class="ball b22"></div>
        <div class="ball b23"></div>
        <div class="ball b24"></div>
        <div class="ball b25"></div>
        <div class="ball b26"></div>
        <div class="ball b27"></div>
        <div class="ball b28"></div>
        <div class="ball b29"></div>
        <Ball onClick="openModal()" />

      </div>
      <div> </div>
    </main>
    <footer>
      Made by Tomasz Pięta
    </footer>
  </div>
  );
  }
}
export default App;
