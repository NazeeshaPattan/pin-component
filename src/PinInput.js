import React from "react";
import PinInput from "react-pin-input";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends React.PureComponent {
  state = {
    value: "",
    count: 0,
  };

  onChange = (value) => {
    this.setState({
      value,
    });
  };

  onSubmit = async () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.value);
    if (this.state.count < 3) {
      if (this.state.value.length < 4) {
        toast.warning("invalid input", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        let payload = {
          otp: this.state.value,
        };
        let data = await fetch("https://pin-input-be.herokuapp.com/checkotp", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }).catch((error) => {
          toast.error(error);
        });
        if (data.status !== 200) {
          toast.error("Invalid Pin", {
            position: toast.POSITION.TOP_RIGHT,
          });
          return;
        } else {
          toast.success("OTP Confirmed", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      }
    } else {
      toast.warning("your 3 attempts have been exceeded", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  render() {
    return (
      <>
        <ToastContainer />
        <div className="app">
          <PinInput
            length={4}
            focus
            secret
            ref={(p) => (this.pin = p)}
            type="numeric"
            onChange={this.onChange}
          />{" "}
          <div className="text-center">
            <button
              className="btn btn-primary btn-grad"
              onClick={this.onSubmit}
            >
              Submit{" "}
            </button>{" "}
          </div>{" "}
          {/* */}{" "}
        </div>{" "}
      </>
    );
  }
}
export default App;
