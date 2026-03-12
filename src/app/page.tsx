'use client'

import {useState, useEffect} from 'react';
import TaskInput from "../components/TaskInput"
import TaskList from "../components/TaskList"
import {task} from "../../.next/types/task"

export default function Home() {
  const [tasks, setTasks] = useState<task[]>([])

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')
    if(storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  function addTask(title: string) {
    const newTask: task = {
      id: Date.now(),
      title,
      completed: false,
    }
    setTasks([...tasks, newTask])
  }
  function toggleTask(id: number) {
    const updatedTasks = tasks.map(task =>
      task.id === id ? {...task, completed: !task.completed} :task
    )
    setTasks(updatedTasks)
  }
  function deleteTask(id: number) {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks)
  }
  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Task Tracker</h1>
        <TaskInput addTask={addTask} />
        <TaskList 
        tasks={tasks}
        toggleTask ={toggleTask}
        deleteTask ={deleteTask}
        />

    </main>
  )
}