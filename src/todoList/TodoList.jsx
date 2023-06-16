import React, {useState} from "react"
import './todoList.css'

const TodoList =()=>{
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [editingIndex, setEditingIndex] =useState(null)

    const handleInputChange=(e)=>{
        setInputValue(e.target.value)
    }

    const handleAddTodo=()=>{
        if (inputValue.trim() !== ''){
            if (editingIndex !== null) {
                const updatedTodos = [...todos];
                updatedTodos[editingIndex] = inputValue;
                setInputValue(updatedTodos)
                setEditingIndex(null)
            } else {
                setTodos([...todos, inputValue])   
            }
            setInputValue('')
        }
    }

    const handleEditTodo = (index) => {
        setInputValue(todos[index]);
        setEditingIndex(index);
      };

    const handleDeleteTodo=(index) =>{
        const updateTodos = todos.filter((_,i)=> i !== index);
        setTodos(updateTodos)
    }

        return (
            <div className="todo-container">
              <h2 className="todo-title">Todo List</h2>
              <div className="input-container">
                <input className="todo-input" type="text" value={inputValue} onChange={handleInputChange} />
                <button className="add-button" onClick={handleAddTodo}>{editingIndex !== null ? 'Update' : 'Add'}</button>
              </div>
              <ul className="todo-list">
                {todos.map((todo, index) => (
                  <li key={index} className="todo-item">
                    <span>{todo}</span>
                    <button className="edit-button" onClick={() => handleEditTodo(index)}>Edit</button>
                    <button className="delete-button" onClick={() => handleDeleteTodo(index)}>Delete</button>
                  </li>
                ))}
              </ul>
            </div>
          );
    
}

export default TodoList;