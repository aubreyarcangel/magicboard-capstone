import { combineReducers } from 'redux';
import selectedTools from '../modules/tools/reducers/SelectedTools';
import slideEdit from '../modules/slideEdit/reducers';
import studentLesson from '../modules/studentLesson/reducers';
import lessonList from '../modules/teacherDashboard/reducers';
import whiteboard from '../modules/whiteboard/reducers';
import authentication from '../modules/authentication/reducers';
import questions from '../modules/display/reducers/questions'
import InputQ from '../modules/display/reducers/InputQ'
import repl from '../modules/display/reducers/repl'
import toggleChoice from '../modules/tools/reducers/ToggleChoice';
import toggleRepl from '../modules/tools/reducers/ToggleRepl';
import toggleInput from '../modules/tools/reducers/ToggleInput';
import choiceShow from '../modules/tools/reducers/ChoiceShow';
import replShow from '../modules/tools/reducers/ReplShow';
import replSolution from '../modules/display/reducers/replSolutionShare';
import replQuestion from '../modules/display/reducers/replQShare'
import YTShow from '../modules/slideEdit/components/overlayComponents/reducers/YouTubeShow'
import choiceQAShare from '../modules/display/reducers/choiceQAShare'

export default combineReducers({
  user: authentication,
  selectedTools,
  questions,
  toggleChoice,
  toggleRepl,
  lessonList,
  whiteboard,
  lesson: slideEdit,
  toggleInput,
  InputQ,
  repl,
  choiceShow,
  replShow,
  replSolution,
  replQuestion,
  studentLesson,
  YTShow,
  choiceQAShare,
});


export * from '../modules/tools/reducers/SelectedTools'
export * from '../modules/display/reducers/questions'
export * from '../modules/display/reducers/InputQ'
export * from '../modules/display/reducers/repl'
export * from '../modules/tools/reducers/ToggleChoice'
export * from '../modules/tools/reducers/ToggleInput'
export * from '../modules/tools/reducers/ToggleRepl'
export * from '../modules/tools/reducers/ChoiceShow'
export * from '../modules/tools/reducers/ReplShow'
export * from '../modules/display/reducers/replSolutionShare'
export * from '../modules/display/reducers/replQShare'
export * from '../modules/slideEdit/components/overlayComponents/reducers/YouTubeShow'
export * from '../modules/display/reducers/choiceQAShare'
