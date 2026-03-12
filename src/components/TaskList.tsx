import { task } from '../types/task'
import TaskItem from './TaskItem'
type Props = {
    tasks: Task[];
    toggleTask: (id: number) => void
    deleteTask: (id: number) => void
}
export default function TaskList ({tasks, toggleTask, deleteTask}: Props){
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