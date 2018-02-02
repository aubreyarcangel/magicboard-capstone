import {db} from '../../firebase'
import * as actions from './actionTypes';


export const getLesson = lesson =>  ({type: actions.GET_LESSON, lesson})
export const getSlide = slide =>  ({type: actions.GET_SLIDE, slide})
export const getSlideIndex = index =>  ({type: actions.GET_SLIDE_INDEX, index})
export const unmountLesson = () =>  ({type: actions.UNMOUNT_LESSON})
export const addEmotion = (emotion) =>  ({type: actions.ADD_EMOTION, emotion})


export function fetchLesson (id) {
  return function thunk (dispatch) {
		db.ref(`lessons/${id}/currentSlide`).on('value', (data)=>{
			dispatch(getSlideIndex(data.val()))
		})
    return db.ref(`/lessons/${id}`).once('value')
			.then(lesson => {
        lesson = lesson.val()
				lesson.id = id
				dispatch(getLesson(lesson))
				return db.ref(`/lessons/${id}/slides`).once('value')
			})
			.then((slides)=>{
				slides.forEach((slide)=>{
					db.ref(`slides/${slide.key}`).on('value', (data)=>{
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


export function addEmotionThunk (type,id) {
  return function thunk (dispatch) {
      const emotion = {
        type,
        time: new Date().getTime()
      }
      return db.ref(`lessons/${id}/emotions`).push(emotion)
        .then(dispatch(addEmotion(emotion)))

	}
}
