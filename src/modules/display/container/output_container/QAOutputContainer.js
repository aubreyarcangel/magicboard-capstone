import React, { Component } from 'react';
import components from '../../components'
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import ItemTypes from '../../../../ItemTypes'

const {QuestionOutput, ChoiceOutput} = components

const boxSource = {
	beginDrag(props) {
		return {
			question: props.question,
		}
	},

	endDrag(props, monitor) {

		const item = monitor.getItem()
		const dropResult = monitor.getDropResult()

		if (dropResult) {
      // let currentSlideId = props.currentSlideId
      console.log('dropped!!!!!!!!!') // eslint-disable-line no-alert
      // props.addTool(item.name, currentSlideId)
		}
	}
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
})

const style = {
  height: 150,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class QAOutputContainer extends Component{
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    question: PropTypes.string.isRequired,
  }

  render () {
    const { isDragging, connectDragSource, QA } = this.props
    return connectDragSource(
        <div>
          <Paper style={style} zDepth={1} >
                <div key={QA.question}>
                  <QuestionOutput question={QA.question}/>
                  <ChoiceOutput choice={QA.choice}/>
                </div>
        </Paper>
      </div>

    )
  }

}

export default DragSource(ItemTypes.BOX, boxSource, collect)(QAOutputContainer);