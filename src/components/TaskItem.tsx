import {Task} from '../types/task'
type Props = {
    task: Task;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
}

export default function TaskItem({
    task,
    toggleTask,
    deleteTask
}:Props){
    return (
        <div className='flex justify-between border p-2 mb-2'>
            <span
            onClick={() => toggleTask(task.id)}
            className={
                task.completed ? "line-through cursor-pointer" : "cursor-pointer" } 
            >
                {task.title}
            </span>
            <button
            onClick={() => deleteTask(task.id)}
            className="text bg-red-500 text-white px-4">
                Delete
            </button>
        </div>
    )
}