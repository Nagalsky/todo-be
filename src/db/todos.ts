import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
	description: { type: String, required: true },
	isCompleted: { type: Boolean, required: true },
	// authentication: {
	// 	password: { type: String, required: true, select: false },
	// 	salt: { type: String, select: false },
	// 	sessionToken: { type: String, select: false },
	// },
})

export const TodoModel = mongoose.model('Todo', TodoSchema)

export const getTodos = () => TodoModel.find()
// export const getUserByEmail = (email: string) => UserModel.findOne({ email })
// export const getUserBySessionToken = (sessionToken: string) =>
// 	UserModel.findOne({
// 		'authentication.sessionToken': sessionToken,
// 	})
// export const getUserById = (id: string) => UserModel.findById(id)
export const createTodo = (values: {
	description: string
	isCompleted: boolean
}) => new TodoModel(values).save().then(todo => todo.toObject())
// export const deleteUserById = (id: string) =>
// 	UserModel.findOneAndDelete({ _id: id })
// export const updateUserById = (id: string, values: Record<string, any>) =>
// 	UserModel.findByIdAndUpdate(id, values)
