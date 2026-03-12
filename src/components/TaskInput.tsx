'use client'
import {useState} from 'react'

type Props = {
    addTask: (title: string) => void;
};
export default function TaskInput({addTask}: Props) {
    const [title, setTitle] = useState("");

    const handleSubmit = () => {
        if(!title.trim()) return;
        addTask(title);
        setTitle("");
    };
    return (
        <div className='flex gap-2 mb-4'> 
            <input
            className='border p-2 flex-1'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task title"
            />
            <button onClick={handleSubmit}
            className='bg-green-500 text-white px-4'>Add Task</button>
        </div>
    )
}