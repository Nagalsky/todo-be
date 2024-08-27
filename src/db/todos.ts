import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
	description: { type: String, required: true },
	isCompleted: { type: Boolean, required: true },
})

export const TodoModel = mongoose.model('Todo', TodoSchema)

export const getTodos = () => TodoModel.find()

export const getTodoById = (id: string) => TodoModel.findById(id)

export const createTodo = (values: {
	description: string
	isCompleted: boolean
}) => new TodoModel(values).save().then(todo => todo.toObject())

export const deleteTodoById = (id: string) =>
	TodoModel.findOneAndDelete({ _id: id })
