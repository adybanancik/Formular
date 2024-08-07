async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();

        const todoList = document.getElementById('todoList');
        todos.forEach(todo => {
            const card = document.createElement('div');
            card.classList.add('todo-card');
            card.innerHTML = `
                <h3>Todo #${todo.id}</h3>
                <p>${todo.title}</p>
                <p>Status: ${todo.completed ? 'Completed' : 'Incomplete'}</p>
            `;
            todoList.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the fetchData function to load the todos
fetchData();
