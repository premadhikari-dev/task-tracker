'use client'

import {useState, useEffect} from 'react';
import TaskInput from "../components/TaskInput"
import TaskList from "../components/TaskList"
import {Task} from "../types/task"

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])

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
    const newTask: Task = {
      id: Date.now(),
      title,
      description: "",
      completed: false,
    }
    setTasks([...tasks, newTask])
  }
  function toggleTask(id: number) {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  function deleteTask(id: number) {
    setTasks(prev => prev.filter(t => t.id !== id))
  }
  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Task Tracker</h1>
        <TaskInput addTask={addTask} />
        <TaskList 
        tasks={tasks}
        toggleTask ={toggleTask}
        deleteTask ={deleteTask}
        />

    </main>
  )
}