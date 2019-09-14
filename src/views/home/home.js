import React from 'react';

import TaskList from '../../components/layout/task-list/task-list';
import SbButton from '../../components/ui/sb-button/sb-button';

const Home = (props) => {

  return (
    <div>
      <SbButton label="add"></SbButton>
      <TaskList></TaskList>
    </div>
  );
}

export default Home;
