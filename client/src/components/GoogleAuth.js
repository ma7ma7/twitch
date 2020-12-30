import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "381437529994-egolr23486phfsfq4nubjpndjgv0mlqf.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }

  renderAuthBtn() {
    if (this.state.isSignedIn === null) {
      return <div>I dont know</div>;
    } else if (this.state.isSignedIn === true) {
      return <div>I'm signed in</div>;
    } else {
      return <div>I'm signed Out</div>;
    }
  }

  render() {
    return <div>{this.renderAuthBtn()}</div>;
  }
}

export default GoogleAuth;
