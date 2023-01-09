import React, {useState} from 'react'
import { Button } from 'react-bootstrap';

function NewTask({addNewTask}) {

    const [newTask, setNewTask] = useState("");
    const [newDay, setNewDay] = useState(null)


    function handleNewTask(e) {
        e.preventDefault();
        fetch('http://localhost:9292/tasks', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    "name": newTask,
                    "day_id": newDay
                })
            }
        
        )
           .then(response => response.json())
           .then(data => addNewTask(data))
        }
    return (
        <div className="task-input">
            <form className='form' onSubmit={handleNewTask}>
            <label>New Reminder: 
                <input 
                type="text" 
                name="task"
                placeholder="Add a reminder..."
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
                ></input>
                <select className='selector' onChange={e => setNewDay(e.target.value)}>
                    <option value="">Select Day</option>
                    <option value="1">Monday</option>
                    <option value="2">Tuesday</option>
                    <option value="3">Wednesday</option>
                    <option value="4">Thursday</option>
                    <option value="5">Friday</option>
                    <option value="6">Saturday</option>
                    <option value="7">Sunday</option>
                </select>
                <Button variant="info" type="Submit" className="submit-btn"> ➕ </Button>
                </label>
            </form>
        </div>
    )
}

export default NewTask;