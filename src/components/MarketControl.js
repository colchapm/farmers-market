import React from 'react';
import MarketList from './MarketList';

class MarketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dayOfWeekShow: "Home",
      formVisibleOnPage: false
    };

  }

  handleClick = (val) => {
    this.setState(({
      dayOfWeekShow: val
    }));
  }

  render() {
    let dayOfWeekVisibleState = null;
    dayOfWeekVisibleState = <MarketList weekday={this.state.dayOfWeekShow} />
    return (
      <React.Fragment>
        <div class="row">
          <div class="col">
            <button value="Monday" onClick={(event) => this.handleClick(event.target.value)}>Monday</button>
            <button value="Tuesday" onClick={(event) => this.handleClick(event.target.value)}>Tuesday</button>
            <button value="Wednesday" onClick={(event) => this.handleClick(event.target.value)}>Wednesday</button>
            <button value="Thursday" onClick={(event) => this.handleClick(event.target.value)}>Thursday</button>
            <button value="Saturday" onClick={(event) => this.handleClick(event.target.value)}>Saturday</button>
            <button value="Sunday" onClick={(event) => this.handleClick(event.target.value)}>Sunday</button>
          </div>
          <div class="col">
            {dayOfWeekVisibleState}
          </div>
      </div>
      </React.Fragment>
    );
  }

}

export default MarketControl;