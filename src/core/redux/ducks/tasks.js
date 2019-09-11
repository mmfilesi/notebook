
/* Action types */

export const types = {
  ADD: 'Tasks/ADD',
  EDIT: 'Tasks/EDIT',
  DELETE: 'Tasks/DELETE',
  TOGGLE: 'Tasks/TOGGLE'
};

/* Reducer */

const initialState = {
  tasks: [
    {
      id: '12',
      title: 'foo',
      content: 'Lore Ipsum trololololo',
      category: 'JS',
      tags: ['React', 'Vue'],
      status: 'done'
    }
  ]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    
    case types.ADD:
      console.log('add');
      return [];
    
    case types.EDIT:
      console.log('EDIT');

      return [];

    case types.DELETE:
      return {
        ...state,
        tasks: state.tasks.filter( task => task.id !== action.payload)
      }

    case types.TOGGLE:
        console.log('delete', action);
        return [];
    
    default:
      return state;
  }
}

/* Actions creators */

export function addTask(task) {
  return {
    type: types.ADD,
    payload: task
  }
}

export function editTask(task) {
  return {
    type: types.EDIT,
    payload: task
  }
}

export function deleteTask(idTask) {
  return {
    type: types.DELETE,
    payload: idTask
  }
}

export function toggleTask(idTask) {
  return {
    type: types.TOGGLE,
    payload: idTask
  }
}