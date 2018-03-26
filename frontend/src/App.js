import React, { Component } from "react";
import axios from "axios";
import { Twitter } from "./containers/Twitter";
import { calculatePostTime } from "./utils/calculatePostTime";

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
      postResponse: ""
    };
  }

  handleOnChange = e => {
    this.setState({ whatToPost: e.target.value });
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
          .then(res =>
            this.setState({
              postResponse: res.statusText
            })
          )
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
    const { twitterUser } = this.state;
    return (
      <div className="App">
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
