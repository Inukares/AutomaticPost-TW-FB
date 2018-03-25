import React, { Component } from "react";
import axios from "axios";
import Twitter from "./containers/Twitter";
import FacebookLogin from "react-facebook-login";
import { calculatePostTime } from "./utils/calculatePostTime";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isTwitterAuthenticated: false,
      twitterUser: null,
      twitterToken: "",
      twitterToggled: true,
      whatToPost: ""
    };
  }

  handleOnChange = e => {
    this.setState({ whatToPost: e.target.value });
  };

  onTwitterToggle = () => {
    this.setState({ twitterToggled: !this.state.twitterToggled });
  };

  sendTwit = () => {
    const { whatToPost } = this.state;
    return axios({
      method: "post",
      url: "http://localhost:4000/api/v1/sendTwit",
      data: {
        status: whatToPost
      }
    })
      .then(res => console.log(res))
      .then(() => this.setState({ whatToPost: "" }));
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

  logout = () => {
    this.setState({
      isAuthenticated: false,
      twitterToken: "",
      twitterUser: null
    });
  };

  render() {
    console.log(this.state);
    const {
      whatToPost,
      isTwitterAuthenticated,
      twitterUser,
      twitterToggled
    } = this.state;
    return (
      <div className="App">
        <Twitter
          whatToPost={whatToPost}
          user={twitterUser}
          isAuthenticated={isTwitterAuthenticated}
          twitterToggled={twitterToggled}
          logout={this.logout}
          onFailed={this.onFailed}
          onSuccess={this.onSuccess}
          handleOnChange={this.handleOnChange}
          onTwitterToggle={this.onTwitterToggle}
          sendTwit={this.sendTwit}
        />
      </div>
    );
  }
}

export default App;

// responseFacebook = response => {
//   console.log(response);
// };

// <div >
// <FacebookLogin
//   appId="*********"
//   autoLoad={true}
//   fields="name,email,picture,posts"
//   scope="public_profile,user_posts"
//   // onClick={componentClicked}
//   callback={this.responseFacebook}
// />
// </div>
