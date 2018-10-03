import React, {Component} from "react";
import { Modal, BallList, Loader, Error } from '../../components';
import './Field.css';

export default class Field extends Component {
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
      <div className="field">
        {isFetching && <Loader /> }
        {hasError && <Error />}
        <div className="field">
          <div className="f10"></div>
          <div className="f20"></div>
          <div className="f30"></div>
          <div className="f31"></div>
          <div className="f32"></div>
          <div className="f33"></div>
          <div className="f40"></div>
          <div className="f41"></div>
          <div className="f42"></div>
          <div className="f43"></div>
        </div>
        <BallList handleOpen={this.openModal} balls={goals} />
        {videoUrl && <Modal showModal={showModal} handleClose={this.closeModal} className="modal" videoUrl={videoUrl} />}
      </div>
    );
  }
}
