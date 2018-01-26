import React, { Component } from 'react';
import {AppBar, Paper} from 'material-ui';

import components from '../components'
import {ToolContainer} from '../../tools'
import {QAContainer} from '../../display'

const {CanvasBlock} = components

class SlideEdit extends Component {
  render() {
    return (
        <div style={{display: 'flex'}}>
          <div style={{flex: 7}}>
            <Paper style={{margin: "10px"}} zDepth={1}>
              <CanvasBlock />
            </Paper>
           {/* thumbnail area */}
            <Paper style={{margin: "10px"}} zDepth={1}>
              <div style={{height: "140px"}}></div>
            </Paper>
          </div>

          <div style={{flex: 3}}>
           {/* Toolbox area */}
            <Paper style={{margin: "10px"}} zDepth={1}>
            <div className="flex-container-column toolSectionContainer">
              <ToolContainer />
              </div>
            </Paper>

             {/* Display area */}
            <Paper style={{margin: "10px"}} zDepth={1}>
              < QAContainer />
            </Paper>
          </div>

        </div>
    );
  }
}

export default SlideEdit;
