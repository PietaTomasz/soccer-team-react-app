import React, {Component} from "react";
import Modal from '../components/Modal/Modal';
import BallList from '../components/BallList/BallList';
import Loader from '../components/Loader/Loader';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFetching: false,
      hasError: false,
      showModal: false,
      dataX: [],
      dataY: [],
      video: [],
      white: true
    }
  }
  componentDidMount(){
    this.setState({
      isFetching: true
    })
  }

  fetchData = () => {
    const url = `https://hkn-soccer-2018-api.lim.bz/api/soccer/goals`;
    this.setState({
      isFetching: true,
      // notFound: false
    })
    fetch(url)
      .then(res => res.json())
      .catch(e => {
        this.setState({
          hasError: true,
          isFetching: false
        })
      })
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

  changeColor = () => {
    this.setState({white: !this.state.white});
  }

  render () {
    // const {goals, isFetching, hasError, notFound} = this.state;
    const balls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    let color = this.state.white ? "black" : "white";
    const url = `https://s3.us-east-2.amazonaws.com/hkn-soccer-2018/180923_WEEK 30 - HEDGES GOAL 87 - DAL@VAN.mp4`;

    return (
    <div className="App">
    <header onClick={this.changeColor} className={color}>
      <h1>Soccer App
      <button className="fetch" onClick={this.fetchData}>Temporary Button to Fetch Data</button>
      </h1>
    </header>
    <h3>
    After clicking on the ball, the video of victorious goal is presented.
    </h3>
    <main>
    
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

        <BallList handleOpen={this.openModal} balls={balls} top={this.state.dataX} left={this.state.dataY} />

        <Modal showModal={this.state.showModal} handleClose={this.closeModal} className="modal" url={this.state.video} />

      </div>
    </main>
    <footer onClick={this.changeColor} className={color}>
      Footer
    </footer>
  </div>
  );
  }
}
export default App;
