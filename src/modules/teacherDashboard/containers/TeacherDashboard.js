import React, { Component } from 'react';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchLessons,createLesson,deleteLesson} from '../actions'
import {changePanel} from '../../slideEdit/actions'

import Dashboard from '../components/Dashboard'

class TeacherDashboard extends Component {
  componentDidMount(){
    this.props.fetchLessons()
  }
  shouldComponentUpdate(nextProps){
    console.log(nextProps)
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
  return bindActionCreators({fetchLessons, createLesson, deleteLesson,changePanel}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(TeacherDashboard);
