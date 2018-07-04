let teste = [{
		name: "maycon",
		age: 22
	}, {
		name: "Mathias",
		age: 16
	}, {
		name: "Mateus",
		age: 19
	}],
	sleep = {
		name: "Lorena",
		age: 7
	}


setInterval(() => {
	console.clear()
	console.log(teste,sleep)
	// let aux = teste.filter(test => {
	// 	// console.log(test, teste[0])
	// 	return test.name.toString() !== teste[0].name.toString()
	// })
	let aux = teste.filter(test =>{
		return  test !== teste[0]
	})
	// console.log({aux:aux})
	aux.push(sleep)
	sleep = teste[0]
	teste = aux
},1000)