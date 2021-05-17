import React from "react";
import ReactSwipeableViews from "react-swipeable-views";

const styles = {
  slide: {
    margin: "20px 50px",
    padding: 15,
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    background: "#FEA900",
    opacity: "0",
  },
  slide2: {
    background: "#422434",
  },
  slide3: {
    background: "#fff",
    opacity: "0",
  },
};

class SwipeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slide: this.props.slide,
    };
  }

  render() {
    // console.log("hi !!!");
    // console.log(this.props);
    return (
      <div>
        <ReactSwipeableViews
          enableMouseEvents
          index={this.state.slide}
          // onSwitching
          // onTransitionEnd={(e) => {
          //   this.props.Change(e);
          //   // console.log(e);
          // }}
          onChangeIndex={(e) => {
            // console.clear();
            this.props.Change(e, this.props);
            // console.log(this.props);
            // console.log(e);
          }}
        >
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            Swiped right
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            my name is {this.props.name}, swipe it :)
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            Swiped left
          </div>
        </ReactSwipeableViews>
      </div>
    );
  }
}

export default SwipeContainer;
