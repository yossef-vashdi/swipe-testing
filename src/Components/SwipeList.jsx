import React from "react";
import SwipeContainer from "./SwipeContainer";

class SwipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: true,
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

  rendering(condition) {
    if (condition)
      return this.state.list.map((item, i) => {
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
      });
    else
      return this.state.list.map((item, i) => {
        if (i === 0)
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
        else return null;
      });
  }
  render() {
    console.log(this.state.list);
    console.log(this.state.condition);
    return (
      <div>
        <p style={{ fontWeight: "bold" }}>
          there is <mark> {this.state.list.length} </mark> notification left to
          swipe on. and you can see on the console if you swipped left or right
        </p>
        <button
          onClick={() =>
            this.setState((prevState) => {
              return { condition: !prevState.condition };
            })
          }
        >
          {this.state.condition ? "one after another" : "everyone together"}
        </button>

        {/* <SwipeContainer
          key={this.state.list[0].id}
          slide={this.state.list[0].slide}
          name={this.state.list[0].name}
          id={this.state.list[0].id}
          index={this.state.list[0]}
          Change={(e, info) => this.Change(e, info)}
        /> */}
        {this.rendering(this.state.condition)}
        {/* {this.state.list.map((item, i) => {
          if (i === 0)
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
          else return "hi !";
        })} */}

        {/* {this.state.list.map((item, i) => {
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
        })} */}
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
