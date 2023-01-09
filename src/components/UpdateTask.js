import React, { useState } from 'react';
import { useFormik } from "formik"
import TaskList from './TaskList';


function UpdateTask({ task, day, id, onTaskUpdate }){

    const [description, setDescription] = useState(task)
    const [taskDay, setTaskDay] = useState(day)


    function handleFormUpdate(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: description,
                day_id: taskDay
            })
        })
            .then(r => r.json())
            .then((data) => onTaskUpdate(data))
    }

    function validate(values) {
          const errors = {};
          if (!values.task) {
            errors.task = "Required";
          }
      
          if (!values.day) {
            errors.day = "Required";
          }
          return errors;
        }
    
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        touched,
        values, // use this if you want controlled components
        errors,
      } = useFormik({
        initialValues: {
            task: "",
            day: "",
        },
        validate,
        onSubmit: (values) => {
          console.log(JSON.stringify(values));
        
        },
      })

    return(
        <div>
<form onSubmit={handleFormUpdate}>
            <label>Update Task: 
                <input 
                type="text" 
                name="task"
                placeholder="Add a task..."
                value={description}
                onChange={e => setDescription(e.target.value)}
                ></input>
                 {touched.task && errors.task
                     ? <div>errors.task</div>
                        : null}
                <select onChange={e => setTaskDay(e.target.value)}>
                    <option value="">Select Day</option>
                    <option value="1">Monday</option>
                    <option value="2">Tuesday</option>
                    <option value="3">Wednesday</option>
                    <option value="4">Thursday</option>
                    <option value="5">Friday</option>
                    <option value="6">Saturday</option>
                    <option value="7">Sunday</option>
                </select>
                {touched.day && errors.day
        ? <div>errors.day</div>
        : null}
                <input type="submit" value="update" className="submit-btn"></input>
                </label>
            </form>
        </div>
    )
}

export default UpdateTask