import React from "react";
import MarketList from "./MarketList";
import ProduceList from "./ProduceList";

class MarketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dayOfWeekShow: this.getTodaysDay(),
      produceListVisibleOnPage: false,
    };
  }

  getTodaysDay = () => {
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    Date.prototype.getDayName = function () {
      return days[this.getDay()];
    };

    var now = new Date();
    var day = now.getDayName();

    return day;
  };

  handleClick = (val) => {
    this.setState({
      dayOfWeekShow: val,
    });
  };

  handleClickTwo = () => {
    this.setState((prevState) => ({
      produceListVisibleOnPage: !prevState.produceListVisibleOnPage,
    }));
  };

  render() {
    let produceListVisibleOnPage = null;
    let buttonText = null;
    if (this.state.produceListVisibleOnPage) {
      produceListVisibleOnPage = <ProduceList />;
      buttonText = "See My Schedule";
    } else {
      buttonText = "See What I'm Offering";
      produceListVisibleOnPage = (
        <div class="row">
          <div class="col">
            <div class="container">
              <div class="center">
                <div class="btn-group">
                  <button
                    value="Monday"
                    onClick={(event) => this.handleClick(event.target.value)}
                  >
                    Monday
                  </button>
                  <button
                    value="Tuesday"
                    onClick={(event) => this.handleClick(event.target.value)}
                  >
                    Tuesday
                  </button>
                  <button
                    value="Wednesday"
                    onClick={(event) => this.handleClick(event.target.value)}
                  >
                    Wednesday
                  </button>
                  <button
                    value="Thursday"
                    onClick={(event) => this.handleClick(event.target.value)}
                  >
                    Thursday
                  </button>
                  <button
                    value="Saturday"
                    onClick={(event) => this.handleClick(event.target.value)}
                  >
                    Saturday
                  </button>
                  <button
                    value="Sunday"
                    onClick={(event) => this.handleClick(event.target.value)}
                  >
                    Sunday
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <MarketList weekday={this.state.dayOfWeekShow} />
          </div>
        </div>
      );
    }

    return (
      <React.Fragment>
        <button onClick={this.handleClickTwo}>{buttonText}</button>
        {produceListVisibleOnPage}
      </React.Fragment>
    );
  }
}

export default MarketControl;
