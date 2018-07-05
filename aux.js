// let teste = [{
// 		name: "maycon",
// 		age: 22
// 	}, {
// 		name: "Mathias",
// 		age: 16
// 	}, {
// 		name: "Mateus",
// 		age: 19
// 	}],
// 	sleep = {
// 		name: "Lorena",
// 		age: 7
// 	}


// setInterval(() => {
// 	console.clear()
// 	console.log(teste, sleep)
// 	// let aux = teste.filter(test => {
// 	// 	// console.log(test, teste[0])
// 	// 	return test.name.toString() !== teste[0].name.toString()
// 	// })
// 	let aux = teste.filter(test => {
// 		return test !== teste[0]
// 	})
// 	// console.log({aux:aux})
// 	aux.push(sleep)
// 	sleep = teste[0]
// 	teste = aux
// }, 1000)


const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/middleware')
mongoose.Promise = global.Promise
const TkSchema = new mongoose.Schema({
		tk: {
			type: String,
			require: true
		}
	}),
	os = require('os')

const Tk = mongoose.model("Tk", TkSchema);

Tk.create({
	tk: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWlkZGxld2FyZSIsImFnZSI6MTAsImlhdCI6MTUzMDI0NTIxN30.uxZH-RnpPFndLQhE6OxbRY8s7PtA5YwQ9R726HhTBLM"
}, (error,tk) =>{
	console.log(tk)
})