import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const [error, setError] = useState("");
    const {addTodo,todos} = useTodo()

    const add = (e) => {
        e.preventDefault();

        const trimmed = todo.trim();
        if (!trimmed) return;
        const alreadyExists = todos.some(
            (t) => t.todo === trimmed
        );

        if (alreadyExists) {
            setError("Todo already exists");
            return;
        }

        addTodo({ todo: trimmed, completed: false });
        setTodo("");
        setError("");
    };

    return (
        <form onSubmit={add} className="flex flex-col gap-2">
            <div className="flex flex-col w-full">
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Write Todo..."
                        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
                    >
                        Add
                    </button>
                </div>
                {error && (
                    <p className="text-xl font-semibold  text-red-700 bg-red-100 px-5 py-5 mt-4 rounded-lg">
                        {error}
                    </p>
                )}
            </div>
        </form>
    );

}

export default TodoForm;