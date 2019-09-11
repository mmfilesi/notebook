import React from 'react';
import { connect } from 'react-redux';

import { editTask, deleteTask, toggleTask } from '../../core/redux/ducks/tasks';

import Task from '../../components/task/task';



const Home = (props) => {

  const handleEditTask = (task) => {
    props.editTask(task);
  } 

  const handleTooggleTask = (idTask) => {
    props.toggleTask(idTask);
  } 

  const handleDeleteTask = (idTask) => {
    props.deleteTask(idTask);
  }

  return (
    <h3>
      { props.tasks.length ? (
        props.tasks.map( (task) => {
          return (
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
    </h3>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    tasks: state.reducerTask.tasks
  }
};

const mapDispatchToProps = {
  editTask,
  toggleTask,
  deleteTask
};

// https://limkopi.me/react-re-ducks-redux-saga/

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
