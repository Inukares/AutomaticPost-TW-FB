import React, { Component } from "react";
import TwitterLogin from "react-twitter-auth";
import axios from "axios";

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

  sendTwit = () => {
    return axios({
      method: "post",
      url: "http://localhost:4000/api/v1/sendTwit",
      data: {
        status: this.state.whatToPost
      }
    }).then(res => console.log(res));
  };

  render() {
    console.log(this.state);
    let content = !!this.state.isAuthenticated ? (
      <div>
        <p>Authenticated</p>
        <div>{this.state.user.email}</div>
        <div>
          <button onClick={this.logout} className="button">
            Log out
          </button>
        </div>
      </div>
    ) : (
      <TwitterLogin
        loginUrl="http://localhost:4000/api/v1/auth/twitter"
        onFailure={this.onFailed}
        onSuccess={this.onSuccess}
        requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
      />
    );

    return (
      <div className="App">
        <div style={{ width: 200 }}>
          <span>Type in your post message</span>
          <input
            type="text"
            onChange={this.handleOnChange}
            placeholder="type sth"
          />
        </div>
        <div>{this.state.whatToPost}</div>
        <div>
          tutaj kliknij po auth me<button onClick={this.sendTwit} />
        </div>
        {content}
      </div>
    );
  }
}

export default App;
