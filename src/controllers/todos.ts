import express from 'express'
import { createTodo, getTodos } from '../db/todos'

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

// export const deleteUser = async (
// 	req: express.Request,
// 	res: express.Response
// ) => {
// 	try {
// 		const { id } = req.params

// 		const deletedUser = await deleteUserById(id)

// 		return res.json(deletedUser)
// 	} catch (error) {
// 		console.log('error:', error)
// 		res.sendStatus(400)
// 	}
// }

// export const updateUser = async (
// 	req: express.Request,
// 	res: express.Response
// ) => {
// 	try {
// 		const { id } = req.params
// 		const { username } = req.body

// 		if (!username) {
// 			res.sendStatus(400).json({ error: 'Username does not exist' })
// 		}

// 		const user = await getUserById(id)
// 		user.username = username
// 		await user.save()

// 		return res.status(200).json(user).end()
// 	} catch (error) {
// 		console.log('error:', error)
// 		res.sendStatus(400)
// 	}
// }
