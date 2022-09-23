import React from "react";

const Overview = (props) => {
  const { tasks, deleteTask } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>{task.text}
            <button onClick={deleteTask}>Delete</button>
          </li>            
        );
      })}
    </ul>
  );
};

export default Overview;