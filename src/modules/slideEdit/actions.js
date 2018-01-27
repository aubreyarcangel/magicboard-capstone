import {db} from '../../firebase'
import * as actions from './actionTypes';

export const getLesson = lesson =>  ({type: actions.GET_LESSON, lesson})
export const getSlide = slide =>  ({type: actions.GET_SLIDE, slide})
export const removeSlide = slideId =>  ({type: actions.DELETE_SLIDE, slideId})
export const changeSlide = slideId =>  ({type: actions.CHANGE_SLIDE, slideId})

export function fetchLesson (id) {
  return function thunk (dispatch) {
    return db.ref('/lessons/-L3nOPjk6NFSMcJGRn4p').once('value')
			.then(lesson => {
				dispatch(getLesson(lesson.val().title))
				return db.ref('/lessons/-L3nOPjk6NFSMcJGRn4p/slides').once('value')
			})
			.then((slides)=>{
				slides.forEach((slide)=>{
					db.ref(`slides/${slide.key}`).on('value', (data)=>{
						if(data.val() === null){
							return dispatch(removeSlide(data.key))
						}
						const slideData = data.val()
						const slideId = data.key
						const slideObject = {
							id: slideId,
							...slideData
						}
						dispatch(getSlide(slideObject));
					})
			})
		});
	}
}
export function deleteSlide (slideId) {
	return function thunk (dispatch) {
		return db.ref(`/lessons/-L3nOPjk6NFSMcJGRn4p/slides/${slideId}`).remove()
			.then(()=> db.ref(`/slides/${slideId}`).remove())
			.then(()=> console.log("removed"))
	}
}


export function addSlide (data) {
  return function thunk (dispatch) {
		// const emptySlide = {
		// 	version: "2.0.0-rc.4",
		// 	backgorund: 'white'
		// }
		db.ref().child('slides').push(data)
			.then(slideKey => {
				db.ref().child(`lessons/-L3nOPjk6NFSMcJGRn4p/slides/${slideKey.key}`).set(true)
				return slideKey
			})
			.then((slideKey)=>{
				db.ref().child(`slides/${slideKey.key}`).on('value', (data)=>{
					if(data.val() === null){
						return dispatch(removeSlide(data.key))
					}
					const slideData = data.val()
					const slideId = data.key
					const slideObject = {
						id: slideId,
						...slideData
					}
					dispatch(getSlide(slideObject));
				})
			})
	}
}