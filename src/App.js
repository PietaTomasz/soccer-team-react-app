import React, {Component} from "react";
import Ball from './Ball';
import Modal from './Modal';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // goals: [],
      // isFetching: false,
      // hasError: false,
      // notFound: false,
      showModal: true
    }
  }
  componentDidMount(){
    const url = `https://hkn-soccer-2018-api.lim.bz/api/soccer/goals`;
    fetch(url)
      .then(res => res.json)
      
  }
  openModal = () => {
    this.setState({
      showModal: true
    })
  }
  closeModal = () => {
    this.setState({
      showModal: false
    })
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

        <Modal showModal={this.state.showModal} handleClose={this.closeModal} className="modal">
        
        </Modal>  

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


        <div className="ball b01"></div>
        <div className="ball b02"></div>
        <div className="ball b03"></div>
        <div className="ball b04"></div>
        <div className="ball b05"></div>
        <div className="ball b06"></div>
        <div className="ball b07"></div>
        <div className="ball b08"></div>
        <div className="ball b09"></div>
        <div className="ball b10"></div>
        <div className="ball b11"></div>
        <div className="ball b12"></div>
        <div className="ball b13"></div>
        <div className="ball b14"></div>
        <div className="ball b15"></div>
        <div className="ball b16"></div>
        <div className="ball b17"></div>
        <div className="ball b18"></div>
        <div className="ball b19"></div>
        <div className="ball b20"></div>
        <div className="ball b21"></div>
        <div className="ball b22"></div>
        <div className="ball b23"></div>
        <div className="ball b24"></div>
        <div className="ball b25"></div>
        <div className="ball b26"></div>
        <div className="ball b27"></div>
        <div className="ball b28"></div>
        <div className="ball b29"></div>
        <Ball onClick={this.openModal} />
        
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
