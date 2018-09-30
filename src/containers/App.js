import React, {Component} from "react";
import Modal from '../components/Modal/Modal';
import BallList from '../components/BallList/BallList';
import Loader from '../components/Loader/Loader';
import Field from '../components/Field/Field';
import Footer from '../components/Footer/Footer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFetching: false,
      hasError: false,
      showModal: false,
      goals: [],
      videoUrl: null
    }
  }
  componentDidMount(){
    this.fetchData();
  }

  fetchData = () => {
    const url = `https://hkn-soccer-2018-api.lim.bz/api/soccer/goals`;
    this.setState({
      isFetching: true,
      hasError: false
    });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        const goals = res.map(goal => ({
          key: goal.events[1].id,
          dataX: goal.events[1].x,
          dataY: goal.events[1].y,
          videoUrl: goal.video.video_path
        }));
        this.setState({
          goals: goals,
          isFetching: false,
          videoUrl: goals.videoUrl
        });
      })
      .catch(e => {
        this.setState({
          hasError: true,
          isFetching: false
        });
      });
  };

  openModal = videoUrl => {
    if (videoUrl === null) {
      return alert("This ball has got no video. Choose another one.");
    }
    this.setState({
      showModal: true,
      videoUrl: videoUrl
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      videoUrl: null
    });
  };

  render () {
    const {goals, isFetching, hasError, showModal, videoUrl} = this.state;    
    return (
      <div className="App">
        <header>
          <h1>Soccer Team React App</h1>
        </header>
        <h3 className="title">
          After clicking on the ball, the video of victorious goal is presented.
        </h3>
        {isFetching ? <Loader /> : <div className="dummy" /> }
        <main>
          <Field />
            {hasError && 
              <div className="alert">There has been an error fetching data. Refresh the page</div>}
            <BallList handleOpen={this.openModal} balls={goals} />
            {videoUrl && 
              <Modal showModal={showModal} handleClose={this.closeModal} className="modal" videoUrl={videoUrl} />}
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
