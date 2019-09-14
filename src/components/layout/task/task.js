import React from 'react';
import PropTypes from 'prop-types';

// https://material.io/resources/icons/?icon=warning&style=baseline

const task = ( {task = {}, editTask, toggleTask, deleteTask} ) => {
  console.log(task)
  return (
    <section className="task">
      <h5 className="task__header">{task.title}</h5>
      <div className="task__aside">
        {task.category}
        {task.tags}
      </div>
      <div className="task__content">{task.content}</div>
      <div className="task__actions">
        <span className="icons icon-comment-o" onClick={(e) => editTask(task)}>edit</span>
        <span onClick={(e) => toggleTask(task.id)}>done</span>
        <span onClick={(e) => deleteTask(task.id)}>trash</span>
      </div>

    </section>
  )
}

task.propTypes = {
  task: PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      content: PropTypes.string,
      category: PropTypes.string,
      tags: PropTypes.array
    }
  ).isRequired,
  editTask: PropTypes.func.isRequired, 
  toggleTask: PropTypes.func.isRequired, 
  deleteTask: PropTypes.func.isRequired
};

export default task;