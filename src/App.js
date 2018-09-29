import React, {Component} from "react";
import Modal from './Modal';
import BallList from './BallList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // goals: [],
      isFetching: false,
      hasError: false,
      // notFound: false,
      showModal: false
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
          let coords = [];
          coords.push(dataX,dataY);
          // console.log(dataX);
          // console.log(dataY);
          console.log(coords,coords[0],coords[1],video);
          }
        
        ;
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

  render () {
    // const {goals, isFetching, hasError, notFound} = this.state;
    const balls = [1, 2, 3, 4, 5, 6];
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

        <div className="balls">

        <div onClick={this.openModal}></div>
        <div className="ball b02" onClick={this.openModal}></div>
        <div className="ball b03" onClick={this.openModal}></div>
        <div className="ball b04" onClick={this.openModal}></div>
        <div className="ball b05" onClick={this.openModal}></div>
        <div className="ball b06" onClick={this.openModal}></div>
        <div className="ball b07" onClick={this.openModal}></div>
        <div className="ball b08" onClick={this.openModal}></div>
        <div className="ball b09" onClick={this.openModal}></div>
        <div className="ball b10" onClick={this.openModal}></div>
        <div className="ball b11" onClick={this.openModal}></div>
        <div className="ball b12" onClick={this.openModal}></div>
        <div className="ball b13" onClick={this.openModal}></div>
        <div className="ball b14" onClick={this.openModal}></div>
        <div className="ball b15" onClick={this.openModal}></div>
        <div className="ball b16" onClick={this.openModal}></div>
        <div className="ball b17" onClick={this.openModal}></div>
        <div className="ball b18" onClick={this.openModal}></div>
        <div className="ball b19" onClick={this.openModal}></div>
        <div className="ball b20" onClick={this.openModal}></div>
        <div className="ball b21" onClick={this.openModal}></div>
        <div className="ball b22" onClick={this.openModal}></div>
        <div className="ball b23" onClick={this.openModal}></div>
        <div className="ball b24" onClick={this.openModal}></div>
        <div className="ball b25" onClick={this.openModal}></div>
        <div className="ball b26" onClick={this.openModal}></div>
        <div className="ball b27" onClick={this.openModal}></div>
        <div className="ball b28" onClick={this.openModal}></div>
        <div className="ball b29" onClick={this.openModal}></div>
        <div className="ball b30" onClick={this.openModal}></div>
        </div>

        <Modal showModal={this.state.showModal} handleClose={this.closeModal} className="modal" url={url} />

      </div>
      <div> </div>
    </main>
    <footer>
      Made by Tomasz Pięta
      <BallList balls={balls}
       />
    </footer>
  </div>
  );
  }
}
export default App;
