import React, { Component } from 'react';
import ToolsTabsContainer from './ToolsTabsContainer'
import DisplayContainer from './DisplayContainer'
import FaceContainer from './generic_container/FaceContainer'
import HotSpotContainer from './generic_container/HotSpotContainer'
import NameContainer from './generic_container/NameContainer'
import WhiteBoardContainer from './generic_container/WhiteBoardContainer'

class MainDisplayContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: "default" }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(select){
    this.setState({selectedTab: select})
  }

  render() {
    console.log('state is--------------', this.state)
    const selectedTab = this.state.selectedTab
    return (
    <div>
      <ToolsTabsContainer handleChange={this.handleChange}/>
      {
        (selectedTab === "default") && <DisplayContainer />
      }

      {
        (selectedTab === "Name") && <NameContainer />
      }

      {
        (selectedTab === "Face") && <FaceContainer />
      }

      {
        (selectedTab === "HotSpot") && <HotSpotContainer />
      }

      {
        (selectedTab === "WhiteBoard") && <WhiteBoardContainer />
      }

    </div>
  )
  }
}

export default MainDisplayContainer;
