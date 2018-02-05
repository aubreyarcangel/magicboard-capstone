import * as actions from './actionTypes';

export default function reducers(state = {lessonData: {}, slides:[], currentSlide: 0, users:[], active: [],subscribers: [], session: {}, panel: false}, action){
  switch (action.type){
    case actions.GET_CAMERA_SUBSCRIBERS:
			return {...state, subscribers: action.subscribers, session: action.session}
    case actions.GET_LESSON:
			return {...state, lessonData: action.lesson}
    case actions.GET_SLIDE_INDEX:
  			return {...state, currentSlide: action.index}
    case actions.GET_ONLINE_USERS:
    	return {...state, users: action.students}
    case actions.GET_ACTIVE_STUDENTS:
      return {...state, active: action.students}
		case actions.DELETE_SLIDE:
			const updatedSlides = state.slides.filter(slide => slide.id !== action.slideId)
			return {...state, slides: updatedSlides, currentSlide: state.currentSlide -1}
		case actions.CHANGE_SLIDE:
			return {...state, currentSlide: action.index}
    case actions.CHANGE_PANEL:
  			return {...state, panel: !state.panel}
		case actions.GET_SLIDE:
			const update = state.slides.find(slide => slide.id === action.slide.id)
			console.log('THIS IS THE UPDATE -------->', update)
			if(update){
				const updatedSlides = state.slides.map(slide => {
					if(slide.id === action.slide.id) return action.slide
					return slide
				})
				return {...state, slides: updatedSlides}
			}
			return {...state, slides: [...state.slides,action.slide]}
    case actions.UNMOUNT_LESSON:
  		return {lessonData: {}, slides: [], currentSlide: 0}
    default:
      return state;
  }
}
