import React from "react";
import SwipeContainer from "./SwipeContainer";

class SwipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { name: "nana", id: 1, slide: 1 },
        { name: "baba", id: 2, slide: 1 },
        { name: "gaga", id: 3, slide: 1 },
        { name: "dada", id: 4, slide: 1 },
      ],
    };
  }

  Change(e, info) {
    // console.log(e);
    const swipe = e === 2 ? "Swiped left" : "Swiped right";
    // console.log(info);
    console.log(`you ${swipe} ${info.name}`);
    // this.setState({ slide: 1 });
    this.setState((prevState) => {
      return {
        list: [
          ...prevState.list.slice(0, info.index),
          ...prevState.list.slice(info.index + 1),
        ],
      };
    });
  }
  render() {
    return (
      <div>
        {this.state.list.map((item, i) => {
          return (
            <SwipeContainer
              key={item.id}
              slide={item.slide}
              name={item.name}
              id={item.id}
              index={i}
              Change={(e, info) => this.Change(e, info)}
            />
          );
        })}
        {/* <SwipeContainer
          slide={1}
          name="kiki"
          Change={(e, info) => this.Change(e, info)}
        /> */}
      </div>
    );
  }
}

export default SwipeList;
