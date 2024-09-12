import { useState } from "react";
import  './App.css'
function Todo(){
    const [task,setTask] = useState(["Eat breakfast","Take a shower",
    "Walking"])
    const [newTask,setNewTask] = useState("")

    function handleInput(event){
       setNewTask(event.target.value)
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTask(t=>[...task,newTask])
     setNewTask("")
        }
     
    }
    function deleteTask(index){
       const updatedTask = task.filter((element, i) => i !== index)
       setTask(updatedTask)
    
    }
    function moveUpTask(index){
       if(index > 0){
        const updatedTasks = [...task];
        [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
        setTask(updatedTasks)
       }
    }

    function moveDownTask(index){
     if(index < task.length-1){
        const updatedTasks = [...task];
        [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
        setTask(updatedTasks)
     }
    }
    function striktext(index){
        const text  = document.querySelectorAll(".text")
        const selectedtext = text[index]
        if(selectedtext.style.textDecoration === "line-through"){
            selectedtext.style.textDecoration = "none"
            selectedtext.style.color = "grey"
        }
        else{
         selectedtext.style.textDecoration = "line-through"
         selectedtext.style.color = "#F7E2DF"
        }
      
       
    }
        
      
    
    let date = new Date()
    let time = date.getHours()
    let minute = date.getMinutes()
    let data = date.toLocaleDateString()
    return(
        <div className="to-do-list">
            <h1>Just do it!.</h1>
            <div className="task-items">
                <input type="text" value={newTask} placeholder="Enter your Task...." onChange={handleInput} />
                <button onClick={addTask} className="addbtn">Add</button>
            </div>
            <p className="date">{data}, {time}:{minute} AM</p>
            <ul>
                {task.map((tasks,index)=> <li key={index}>
                    <span className="text">{tasks}</span>
                    <div className="btn">
                        <button className="button" onClick={()=>striktext(index)}><i class="fa-solid fa-check"></i></button>
                    <button className="button" onClick={()=>deleteTask(index)}><i className="fa-solid fa-trash"></i></button>
                    <button className="move-btn" onClick={()=>moveUpTask(index)}><i className="fa-solid fa-up-long"></i></button>
                    <button className="move-btn" onClick={()=>moveDownTask(index)}><i className="fa-solid fa-down-long"></i></button>
                    </div>
                   
                </li>)}
            </ul>
        </div>
    )
}
export default Todo;