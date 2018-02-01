// ACTION TYPE
const REPL_SHOW = 'CHOICE_REPL'

// ACTION MAKER
export const showRepl = ()=> {
  return {
    type: REPL_SHOW,
    bool: 'show'
  }
}

//REDUCER

export default function reducer (state = false, action) {
  switch (action.type) {
    case REPL_SHOW:
      return !state;
      default:
      return state;
  }
}