import React, { Component } from "react";
import axios from "axios";
import Twitter from "./containers/Twitter";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isAuthenticated: false,
      user: null,
      token: "",
      whatToPost: ""
    };
  }

  handleOnChange = e => {
    this.setState({ whatToPost: e.target.value });
  };

  onSuccess = response => {
    const token = response.headers.get("x-auth-token");
    response.json().then(user => {
      if (token) {
        this.setState({ isAuthenticated: true, user: user, token: token });
      }
    });
  };

  onFailed = error => {
    alert(error);
  };

  logout = () => {
    this.setState({ isAuthenticated: false, token: "", user: null });
  };

  // sendTwit = () => {
  //   return axios({
  //     method: "post",
  //     url: "http://localhost:4000/api/v1/sendTwit",
  //     data: {
  //       status: this.state.whatToPost
  //     }
  //   }).then(res => console.log(res));
  // };

  render() {
    console.log(this.state);
    const { whatToPost, isAuthenticated, user } = this.state;
    return (
      <div className="App">
        <div>
          <span>Type in your post message</span>
          <input
            type="text"
            onChange={this.handleOnChange}
            placeholder="type sth"
          />
        </div>
        <Twitter
          whatToPost={whatToPost}
          user={user}
          isAuthenticated={isAuthenticated}
          logout={this.logout}
          onFailed={this.onFailed}
          onSuccess={this.onSuccess}
        />
      </div>
    );
  }
}

export default App;
