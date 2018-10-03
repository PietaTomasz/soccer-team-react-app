import React, {Component} from "react";
import { Modal, BallList, Loader, Field, Error } from '../../components';
import './Soccer.css';

export default class Soccer extends Component {
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
          dataX: Number(goal.events[1].x),
          dataY: Number(goal.events[1].y),
          videoUrl: goal.video.video_path
        }));
        this.setState({
          goals: goals,
          isFetching: false
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
      <div className="soccer">
        {isFetching && <Loader /> }
        {hasError && <Error />}
        <Field />
        <BallList handleOpen={this.openModal} balls={goals} />
        {videoUrl && <Modal showModal={showModal} handleClose={this.closeModal} className="modal" videoUrl={videoUrl} />}
      </div>
    );
  }
}
