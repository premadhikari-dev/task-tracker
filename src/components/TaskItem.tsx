useEffect(() => {
    localStorage.setItem('tasks' JSON.stringify(tasks));
}, [tasks]);