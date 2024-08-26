import express from 'express'

import { createNewTodo, getAllTodos } from '../controllers/todos'

export default (router: express.Router) => {
	router.get('/todos', getAllTodos)
	router.post('/todos', createNewTodo)
}
