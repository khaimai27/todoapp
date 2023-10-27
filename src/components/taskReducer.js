// taskReducer.js
const initialState = {
    taskName: '',
    tasks: [],
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TASK_NAME':
        return {
          ...state,
          taskName: action.payload,
        };
      case 'ADD_TASK':
        return {
          taskName: '',
          tasks: [...state.tasks, action.payload],
        };
      case 'REMOVE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  