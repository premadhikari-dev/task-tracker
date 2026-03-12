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
        <div>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task title"
            />
            <button onClick={handleSubmit}>Add Task</button>
        </div>
    )
}