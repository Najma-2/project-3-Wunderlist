import React from'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UpdateTask from "./UpdateTask"


function TaskCard({task, number, day, onDelete, id, handleEdit, isEdit, onTaskUpdate}){
    
    
    function handleCompleted() {
        fetch(`http://localhost:9292/tasks/${id}`, {
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then((completedTask) => onDelete(completedTask))
    }
  

    return(
    <div>
        
        <Card className="TaskCard"
        bg="secondary"
        key="secondary"
        text="dark"
        style={{ width: "15rem" }}
        
      >
            <Card.Body>
          <Card.Title>Task #{number}</Card.Title>
          <Card.Text>{day}</Card.Text>
          <Card.Text>{task}</Card.Text>
          {isEdit ? <UpdateTask task={task} day={day} id={id} onTaskUpdate={onTaskUpdate}/> :
                null}
            <Button className='delete-btn' onClick={handleCompleted} variant="dark">✅</Button>
            <Button  onClick={handleEdit} variant="dark">✍🏼</Button>

            </Card.Body>
        </Card>       
    </div>
)
}

export default TaskCard