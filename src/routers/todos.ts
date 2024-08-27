import express from 'express'

import {
	createNewTodo,
	deleteTodo,
	getAllTodos,
	updateTodoDescription,
	updateTodoStatus,
} from '../controllers/todos'

export default (router: express.Router) => {
	router.get('/todos', getAllTodos)
	router.post('/todos', createNewTodo)
	router.delete('/todos/:id', deleteTodo)
	router.patch('/todos/status/:id', updateTodoStatus)
	router.patch('/todos/description/:id', updateTodoDescription)
}
