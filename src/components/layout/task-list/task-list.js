import React from 'react';
import { connect } from 'react-redux';

import { editTask, deleteTask, toggleTask } from '../../../core/redux/ducks/tasks';

import Task from '../task/task';

// import PropTypes from 'prop-types';

const TaskList = (props) => {

  const handleEditTask = (task) => {
    props.editTask(task);
  } 

  const handleTooggleTask = (idTask) => {
    props.toggleTask(idTask);
  } 

  const handleDeleteTask = (idTask) => {
    props.deleteTask(idTask);
  }

  const filterTasks = (task) => {
    return true;
  }

  return (
    <article className="tasks">
      { props.tasks.length ? (
        props.tasks.map( (task) => {
          return (
            filterTasks(task) && 
            <Task 
            task={task} 
            editTask={handleEditTask}
            toggleTask={handleTooggleTask}
            deleteTask={handleDeleteTask}
            key={task.id}
            />
          )})
        ) : (
          <div>nada</div>
        )
      }
    </article>
  )
}

const mapStateToProps = (state) => {
  return {
    tasks: state.reducerTask.tasks
  }
};

const mapDispatchToProps = {
  editTask,
  toggleTask,
  deleteTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);