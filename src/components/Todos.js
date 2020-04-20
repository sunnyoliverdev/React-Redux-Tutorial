import React from 'react';

const TodoItem = ({todo, onToggle, onRemove}) =>{
    return (
        <div>
            <input type='checkbox'/>
            <span>Example text</span>
            <button>Remove</button>
        </div>
    );
};

const Todos = ({
    input,
    todos,
    onChange,
    onInsert,
    onToggle,
    onRemove
})=>{
    const onSubmit = e =>{
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input />
                <button type='submit'>Register</button>
            </form>
            <div>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    );
};

export default Todos;