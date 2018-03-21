import React, { Component } from "react";
import TwitterLogin from "react-twitter-auth";
import axios from "axios";

export default class Twitter extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    // }
  }

  sendTwit = () => {
    const { whatToPost } = this.props;
    return axios({
      method: "post",
      url: "http://localhost:4000/api/v1/sendTwit",
      data: {
        status: this.props.whatToPost
      }
    }).then(res => console.log(res));
  };

  renderContent = () => {
    let content = !!this.props.isAuthenticated ? (
      <div>
        <p>Authenticated</p>
        <div>{this.props.user.email}</div>
        <div>
          <button onClick={this.sendTwit}>Post on Twitter</button>
        </div>
        <div>
          <button onClick={this.props.logout} className="button">
            Log out
          </button>
        </div>
      </div>
    ) : (
      <TwitterLogin
        loginUrl="http://localhost:4000/api/v1/auth/twitter"
        onFailure={this.props.onFailed}
        onSuccess={this.props.onSuccess}
        requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
      />
    );
    return <div>{content}</div>;
  };

  render() {
    return (
      <div>
        <div style={{ padding: 20, width: 400 }}>
          {this.renderContent.call(this)}
        </div>
      </div>
    );
  }
}
