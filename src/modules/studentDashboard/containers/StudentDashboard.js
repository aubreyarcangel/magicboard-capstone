import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Dashboard from '../components/Dashboard'
import {fetchLessons} from '../../teacherDashboard/actions'
import {changePanel} from '../../slideEdit/actions'

class StudentDashboard extends Component {
  componentDidMount(){
    this.props.fetchLessons()
  }
  shouldComponentUpdate(nextProps){
    if(nextProps.lessonList !== this.props.lessonList){
      return true
    }
    if(nextProps.location.pathname !== this.props.location.pathname){
      return true
    }
    return false
  }
  render() {
    return (
        <Dashboard {...this.props}/>
    );
  }
}
function mapStateToProps(state){
  return {
    lessonList: state.lessonList,
    panel: state.lesson.panel
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchLessons,changePanel}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentDashboard);
