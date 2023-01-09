import React from'react';
import TaskCard from './TaskCard'

function TaskList({tasks, setTasks, handleEdit, isEdit, onTaskUpdate}) {
    
    // console.log(tasks)
    const myTasks = tasks.map((task, index) => {
        return <TaskCard
        onDelete={onDelete}
        id = {task.id} 
        key={task.id} 
        task={task.name} 
        day={task.day.day_of_week}
        handleEdit={handleEdit}
        isEdit={isEdit}
        onTaskUpdate={onTaskUpdate}
        number = {index +1}
        />
    })
    function onDelete(deletedTask) {
        const updatedTasks = tasks.filter(task => task.id !== deletedTask.id)
        setTasks(updatedTasks)
    }
    

    return (
        <div className="task-list">
            <h3  >My Tasks</h3>
            <div className='eachtask' >
                {myTasks}
            </div>
            
        </div>
    )
}

export default TaskList

