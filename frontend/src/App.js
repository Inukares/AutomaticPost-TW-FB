import React, { Component } from "react";
import axios from "axios";
import { Twitter } from "./containers/Twitter";
import { calculatePostTime } from "./utils/calculatePostTime";
import { format } from "./utils/calculatePostTime";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isTwitterAuthenticated: false,
      twitterUser: null,
      twitterToken: "",
      isTwitterToggled: true,
      whatToPost: "",
      autoSchedule: false,
      showModal: false
    };
  }

  handleOnChange = e => {
    this.setState({ whatToPost: e.target.value });
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  onTwitterToggle = () => {
    this.setState({ isTwitterToggled: !this.state.isTwitterToggled });
  };

  onAutoScheduleToggle = () => {
    this.setState({ autoSchedule: !this.state.autoSchedule });
  };

  sendTwit = () => {
    const { whatToPost, isTwitterToggled, autoSchedule } = this.state;
    if (!isTwitterToggled) {
      return;
    } else {
      return (
        axios({
          method: "post",
          url: "http://localhost:4000/api/v1/sendTwit",
          data: {
            status: whatToPost,
            toBeScheduled: autoSchedule,
            timeToPost: calculatePostTime()
          }
        })
          // so I can display modal that the post will be send
          .then(res => {
            if (res.statusText === "OK") {
              this.setState({
                showModal: true
              });
            }
          })
          .then(() => this.setState({ whatToPost: "" }))
      );
    }
  };

  onSuccess = response => {
    const token = response.headers.get("x-auth-token");
    response.json().then(user => {
      if (token) {
        this.setState({
          isTwitterAuthenticated: true,
          twitterUser: user,
          twitterToken: token
        });
      }
    });
  };

  onFailed = error => {
    alert(error);
  };

  twitterLogout = () => {
    // is functional to prevent rendering components not having proper props
    this.setState(() => {
      return {
        isTwitterAuthenticated: false,
        twitterToken: "",
        twitterUser: null
      };
    });
  };

  render() {
    console.log(this.state);
    const { twitterUser, showModal, autoSchedule } = this.state;
    return (
      <div className="App">
        <Modal isOpen={showModal} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            You have sent a post!
          </ModalHeader>
          <ModalBody>
            {autoSchedule
              ? `Your post will be posted on: ${format(calculatePostTime())}`
              : `Your post has just been added !`}
          </ModalBody>
        </Modal>
        <Twitter
          {...this.state}
          user={twitterUser}
          twitterLogout={this.twitterLogout}
          onFailed={this.onFailed}
          onSuccess={this.onSuccess}
          handleOnChange={this.handleOnChange}
          onTwitterToggle={this.onTwitterToggle}
          sendTwit={this.sendTwit}
          onAutoScheduleToggle={this.onAutoScheduleToggle}
        />
      </div>
    );
  }
}

export default App;
