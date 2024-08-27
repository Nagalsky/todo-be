import express from 'express'
import { createTodo, deleteTodoById, getTodoById, getTodos } from '../db/todos'

export const getAllTodos = async (
	req: express.Request,
	res: express.Response
) => {
	try {
		const todos = await getTodos()

		return res.status(200).json(todos)
	} catch (error) {
		console.log('error: ', error)
		return res.sendStatus(400)
	}
}

export const createNewTodo = async (
	req: express.Request,
	res: express.Response
) => {
	try {
		const { description } = req.body

		if (!description) {
			return res.sendStatus(400)
		}
		const user = await createTodo({
			description,
			isCompleted: false,
		})

		return res.status(200).json(user).end()
	} catch (error) {
		console.log('Error: ', error)
		return res.sendStatus(400)
	}
}

export const deleteTodo = async (
	req: express.Request,
	res: express.Response
) => {
	console.log('WHY?')
	try {
		const { id } = req.params

		const deletedTodo = await deleteTodoById(id)

		return res.json(deletedTodo)
	} catch (error) {
		console.log('error:', error)
		res.sendStatus(400)
	}
}

export const updateTodoStatus = async (
	req: express.Request,
	res: express.Response
) => {
	try {
		const { id } = req.params
		const { isCompleted } = req.body

		if (!id) {
			res.sendStatus(400).json({ error: 'Todo does not exist' })
		}

		const todo = await getTodoById(id)
		todo.isCompleted = isCompleted
		await todo.save()

		return res.status(200).json(todo).end()
	} catch (error) {
		console.log('error:', error)
		res.sendStatus(400)
	}
}

export const updateTodoDescription = async (
	req: express.Request,
	res: express.Response
) => {
	try {
		const { id } = req.params
		const { description } = req.body

		if (!id) {
			res.sendStatus(400).json({ error: 'Todo does not exist' })
		}

		const todo = await getTodoById(id)
		todo.description = description
		await todo.save()

		return res.status(200).json(todo).end()
	} catch (error) {
		console.log('error:', error)
		res.sendStatus(400)
	}
}
