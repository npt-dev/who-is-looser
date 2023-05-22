import React, { Component } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const MyContext = React.createContext();

class MyProvider extends Component {
  defaultState = {
    stage: 1,
    players: [],
    result: "",
  }

  state = {
    ...this.defaultState
  };

  addPlayerHandler = (name) => {
    this.setState((prevState, props) => ({
      players: [...prevState.players, name],
    }));
  };

  removePlayerHandler = (idx) => {
    let newArray = this.state.players.filter((item, id) => id !== idx);
    this.setState({ players: newArray });
  };

  nextHandler = () => {
    const { players } = this.state;
    if (players?.length < 2) {
      return Toast.show({
        type: "error",
        position: "bottom",
        text1: "Sorry",
        text2: "You need at least 2 players",
      });
    }

    this.setState(
      {
        stage: 2,
      },
      () => {
        this.generateLooser();
      }
    );
  };

  generateLooser = () => {
    const { players } = this.state;
    this.setState({
      result: players[Math.floor(Math.random() * players.length)],
    });
  };

  resetHandler = () => {
    this.setState({
      ...this.defaultState
    })
  };

  render() {
    return (
      <>
        <MyContext.Provider
          value={{
            state: this.state,
            addPlayer: this.addPlayerHandler,
            removePlayer: this.removePlayerHandler,
            next: this.nextHandler,
            retry: this.generateLooser,
            reset: this.resetHandler,
          }}
        >
          {this.props.children}
        </MyContext.Provider>
      </>
    );
  }
}

export { MyProvider, MyContext };
