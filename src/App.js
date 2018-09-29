import React, {Component} from "react";
import Modal from './Modal';
import Ball from './Ball';
import BallList from './BallList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // goals: [],
      isFetching: false,
      hasError: false,
      // notFound: false,
      showModal: false,
      coords: [],
      dataX: [],
      dataY: [],
      data1x: '',
      data1y: '',
      white: true
    }
  }
  componentDidMount(){}

  fetchData = () => {
    const url = `https://hkn-soccer-2018-api.lim.bz/api/soccer/goals`;
    this.setState({
      isFetching: true,
      // notFound: false
    })
    fetch(url)
      .then(res => res.json())
      .then(res => {

        for (let i = 0; i <= res.length; i++) {
          let dataX = JSON.parse(res[i].events[1].x);
          let dataY = JSON.parse(res[i].events[1].y);
          let video = res[i].video.video_path;
          // let coords = [dataX, dataY];
          let coords = [...coords];
          coords.push(dataX,dataY);
          // console.log(dataX);
          // console.log(dataY);
          console.log(coords,coords[0],coords[1],video);
          this.setState({
            coords: [...coords],
            dataX: [...dataX],
            dataY: [...dataY],
          })
        }
        let data1x = JSON.parse(res[0].events[1].x);
        let data1y = JSON.parse(res[0].events[1].y);
        this.setState({
          data1x: [...data1x],
          data1y: [...data1y]
        })
      })
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
    let color = this.state.white ? "black" : "white";
    const url = `https://s3.us-east-2.amazonaws.com/hkn-soccer-2018/180923_WEEK 30 - HEDGES GOAL 87 - DAL@VAN.mp4`;

    return (
    <div className="App">
    <header>
      <h1>Soccer App
      <button className="fetch" onClick={this.fetchData}>Temporary Button to Fetch Data</button>
      <button onClick={this.openModal}>OpenModal</button>
      </h1>
    </header>
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

        <BallList handleOpen={this.openModal} />

        <Modal showModal={this.state.showModal} handleClose={this.closeModal} className="modal" url={url} />

      </div>
    </main>
    <footer onClick={this.changeColor} className={color}>
      Footer<br />
      <hr/>
      {this.state.coords[1]}
      <hr/>
      {this.state.data1y}
    </footer>
  </div>
  );
  }
}
export default App;
