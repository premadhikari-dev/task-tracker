import { Task } from '../types/task'
import TaskItem from './TaskItem'
type Props = {
    tasks: Task[];
    toggleTask: (id: number) => void
    deleteTask: (id: number) => void
}
export default function TaskList ({tasks, toggleTask, deleteTask}: Props){
    if(tasks.length === 0){
        return <p className='text-center text-gray-400 mt-8'>No tasks yet</p>
    }
    
    return (
        <div>
            {tasks.map(task => (
                <TaskItem
                key={task.id}
                task={task}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                />
            ))}
        </div>
    )
}