import React, {useState, useEffect} from 'react'
// eslint-disable-next-line
import Todo from './styles/Todo.css'

const Tasks = () => {
    const saved = localStorage.getItem("Tasks")
    let [tasks, setTasks] = useState("")
    let [count, setCount] = useState(0)
    
    let [list, setList] = useState(() => {
        if (saved) {
            return JSON.parse(saved)
        }
        return []
    })

    useEffect(() => {
        localStorage.setItem("Tasks", JSON.stringify(list))
    }, [list])

    const onSubmit = e => {
        e.preventDefault()
        if (tasks) {
            setList([...list, {id: list.length, task: tasks, complete: false}])
        }
        setTasks("")
        setCount(0)
    }

    const deleteTask = (key) => {
        let filteredList = list.filter((task, i) => {
            return i !== key
        })
        setList(filteredList)
    }

    const change = e => {
        setTasks(e.target.value)
        setCount(e.target.value.length)
    }

    const toggleComplete = (e, key) => {
        let copyList = [...list]
        copyList[key].complete = e.target.checked
        setList(copyList)
    }

    return (
        <div className="taskForm">
            <form onSubmit={onSubmit} className="form">
                <div>
                    <input type="text" onChange={change} value={tasks} placeholder="Add Task"></input>
                    <h6>{count}/100</h6>
                </div>

                <input type="submit"></input>
            </form>
            {
                list.map((item, key=item.id) => {
                    return (
                        <div key={key} className="mapItems">
                            <input type="checkbox" checked={item.complete} onChange={e => toggleComplete(e, key)}></input>
                            <h3 style={{textDecoration: item.complete? "line-through": "None"}}>{item.task}</h3>
                            <button onClick={e => deleteTask(key)}>Delete!</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Tasks