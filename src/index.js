const express = require('express'),
	request = require('request'),
	norm = require('normalize-url')
let cur = 0
let token;




const handler = async (req, res, next) => {
	// console.log(token)
	try {
		req.headers['tk'] = token

		req.pipe(request({
			url: norm(servers[cur].url + req.url)
		})).pipe(res);
		// console.log({
		// 	url: norm(servers[cur].url + req.url)
		// })
		// console.log(servers[cur])
		cur = (cur + 1) % servers.length;
	} catch (error) {
		setTimeout((req, res) => {
			handler(req, res)
		}, 2000)
	}
};
let net = require('net');

const server = express(),
	bp = require("body-parser")
server.disable('x-powered-by')
// server.use(express.json())
server.use(async (req, res, next) => {
		res.header("Access-Control-Allow-Origin", "*");
		res.header(
			"Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept, Authorization "
		);
		res.header('Access-Control-Allow-Methods', 'GET, PATCH, POST, DELETE, OPTIONS');
		res.header("Content-Type", " application/json; charset=utf-8")
		// res.header('Provided-By', 'btm-api')
		// res.header('X-Powered-By', 'btm-api')
		// console.log(req.headers)
		if (req.method === "OPTIONS")
			res.send();
		else
			next();
		// next();
	})
	// server.use(async (req, res, next) =>{
	// 	// console.log({header: req.headers['content-type']})
	// 	if (req.headers['content-type'] !=='application/json'){
	// 		res.status(412).send({
	// 			code: 'CONTENT_TYPE_NOT_SUPPORTED',
	// 			statusCode: 412,
	// 			message: "Content-Type não suportado, por favor verifique se o conteúdo da requisição é appicaiton/json (JSON)  e tente novamento.",
	// 			name: "Formato Inválido."
	// 		})
	// 	}
	// 	else{
	// 		next()
	// 	}
	// })
	// server.use(bp.json())
	.all('*', handler)

let {
	nextAvailable
} = require('node-port-check');


const getport = (numb = 8080) =>
	process.env.PORT || numb,
	chalk = require('chalk')



let argv = require('minimist')(process.argv.slice(2));
// console.dir(argv);
let dev = argv['dev'] || argv['DEV']
let servers, sleep, msg
const nuvem = () => {
	request.get({
		url: sleep.heroku,
		headers: {
			'Authorization': 'Bearer ' + sleep.key,
			'Accept': 'application/vnd.heroku+json; version=3'
		}
	}, (error, response, body) => {
		body = JSON.parse(response.body)
		sleep.stack_id = body.build_stack.id
		request.patch({
			url: sleep.heroku,
			headers: {
				'Authorization': 'Bearer ' + sleep.key,
				'Accept': 'application/vnd.heroku+json; version=3'
			},
			form: {
				build_stack: sleep.stack_id,
				maintenance: true,
				name: sleep.name
			}
		}, (error, response, body) => {
			body = JSON.parse(response.body)
			// console.log(body)
		})
	})
	servers.map(f => {
		request.get({
			url: f.heroku,
			headers: {
				'Authorization': 'Bearer ' + f.key,
				'Accept': 'application/vnd.heroku+json; version=3'
			}
		}, (error, response, body) => {
			body = JSON.parse(response.body)
			f.stack_id = body.build_stack.id
			request.patch({
				url: f.heroku,
				headers: {
					'Authorization': 'Bearer ' + f.key,
					'Accept': 'application/vnd.heroku+json; version=3'
				},
				form: {
					build_stack: f.stack_id,
					maintenance: false,
					name: f.name
				}
			}, (error, response, body) => {
				body = JSON.parse(response.body)
				// console.log(body)
			})
		})
	})
	setInterval(() => {
		// console.log(servers[0])


		request.get({
			url: sleep.heroku,
			headers: {
				'Authorization': 'Bearer ' + sleep.key,
				'Accept': 'application/vnd.heroku+json; version=3'
			}
		}, (error, response, body) => {
			body = JSON.parse(response.body)
			sleep.stack_id = body.build_stack.id
			request.patch({
				url: sleep.heroku,
				headers: {
					'Authorization': 'Bearer ' + sleep.key,
					'Accept': 'application/vnd.heroku+json; version=3'
				},
				form: {
					build_stack: sleep.stack_id,
					maintenance: true,
					name: sleep.name
				}
			}, (error, response, body) => {
				body = JSON.parse(response.body)
				// console.log(body)
			})
		})
		servers.map(f => {
			request.get({
				url: f.heroku,
				headers: {
					'Authorization': 'Bearer ' + f.key,
					'Accept': 'application/vnd.heroku+json; version=3'
				}
			}, (error, response, body) => {
				body = JSON.parse(response.body)
				f.stack_id = body.build_stack.id
				request.patch({
					url: f.heroku,
					headers: {
						'Authorization': 'Bearer ' + f.key,
						'Accept': 'application/vnd.heroku+json; version=3'
					},
					form: {
						build_stack: f.stack_id,
						maintenance: false,
						name: f.name
					}
				}, (error, response, body) => {
					body = JSON.parse(response.body)
					// console.log(body)
				})
			})
		})



		request(servers[0].url, (error, response, body) => {})
		request(servers[1].url, (error, response, body) => {})
		request(servers[2].url, (error, response, body) => {})
	}, 30000)

	setInterval(() => {
		// console.log({sleep: sleep})
		let id, name
		request.get({
			url: sleep.heroku,
			headers: {
				'Authorization': 'Bearer ' + sleep.key,
				'Accept': 'application/vnd.heroku+json; version=3'
			}
		}, (error, response, body) => {
			body = JSON.parse(response.body)
			id = body.build_stack.id,
				name = body.name,
				sleep.stack_id = id
			// console.log(body)
			request.patch({
				url: sleep.heroku,
				headers: {
					'Authorization': 'Bearer ' + sleep.key,
					'Accept': 'application/vnd.heroku+json; version=3'
				},
				form: {
					build_stack: id,
					maintenance: false,
					name: name
				}
			}, (error, response, body) => {
				body = JSON.parse(response.body)

				let tmp = servers.filter(server => {
					return server !== servers[0]
				})
				tmp.push(sleep)
				sleep = servers[0]
				servers = tmp

				request.get({
					url: sleep.heroku,
					headers: {
						'Authorization': 'Bearer ' + sleep.key,
						'Accept': 'application/vnd.heroku+json; version=3'
					}
				}, (error, response, body) => {
					body = JSON.parse(response.body)
					sleep.stack_id = body.build_stack.id
					request.patch({
						url: sleep.heroku,
						headers: {
							'Authorization': 'Bearer ' + sleep.key,
							'Accept': 'application/vnd.heroku+json; version=3'
						},
						form: {
							build_stack: sleep.stack_id,
							maintenance: true,
							name: sleep.name
						}
					}, (error, response, body) => {
						body = JSON.parse(response.body)
						// console.log(body)
					})
				})

			})
			// console.log(body)
		})



		// console.log(servers, sleep)
	}, 28800000)
	// }, 1000)


}
const local = () => {
	setInterval(() => {
		// console.log(servers[0])
		request(servers[0], (error, response, body) => {})
		request(servers[1], (error, response, body) => {})
		request(servers[2], (error, response, body) => {})
	}, 250000)

	setInterval(() => {
		let tmp = servers.filter(server => {
			return server !== servers[0]
		})
		tmp.push(sleep)
		sleep = servers[0]
		servers = tmp
		// console.log(servers, sleep)
		// }, 28800000)
	}, 200000)

}

// console.log({
// 	argv_dev: argv['dev'],
// 	argv_DEV: argv['DEV']
// })
if (dev === 'local') {
	console.log('local')
	// process.exit()
	servers = [{
			url: 'http://localhost:8090',
			key: ''
		}, {
			url: 'http://localhost:8090',
			key: ''
		}, {
			url: 'http://localhost:8090',
			key: ''
		}],
		sleep = {
			url: 'http://localhost:8090',
			key: ''
		},
		msg = {
			head: "Bem vindo ao  Middleware BTM!",
			body: "Middleware escalonador e balanceador de carga para a API da aplicação.",
			action: "running  in "
		}
	local()
} else {

	if (dev != undefined) {
		sleep = {
			key: "2a0a9c98-f4ac-472e-8863-38e0d4aa46cd",
			maintenance: true,
			name: "btm-api0",
			stack_id: "",
			url: 'https://btm-api0.herokuapp.com',
			heroku: 'https://api.heroku.com/apps/btm-api0'
		}, msg = {
			head: "Bem vindo ao  Middleware BTM!",
			body: "Middleware escalonador e balanceador de carga para a API da aplicação.",
			action: "running  in "
		}
	} else {

		sleep = {
			key: "2a0a9c98-f4ac-472e-8863-38e0d4aa46cd",
			maintenance: true,
			name: "btm-api0",
			stack_id: "",
			url: 'https://btm-api0.herokuapp.com',
			heroku: "https://api.heroku.com/apps/btm-api0"

		}, msg = {
			action: "running in "
		}
	}

	servers = [{
		key: "402c7c2f-1a91-4f0a-ac20-f10a086fca21",
		maintenance: true,
		name: "btm-api1",
		stack_id: "",
		url: 'https://btm-api1.herokuapp.com',
		heroku: "https://api.heroku.com/apps/btm-api1"
	}, {
		key: "f766902b-2d81-472f-b3f8-d86c59fac52c",
		maintenance: true,
		name: "btm-api2",
		stack_id: "",
		url: 'https://btm-api2.herokuapp.com',
		heroku: "https://api.heroku.com/apps/btm-api2"
	}, {
		key: "f484ddae-8a44-423b-af45-3f7e4ce1ab9c",
		maintenance: true,
		name: "btm-api3",
		stack_id: "",
		url: 'https://btm-api3.herokuapp.com',
		heroku: "https://api.heroku.com/apps/btm-api3"
	}]
	nuvem()
	// servers = ['https://btm-api1.herokuapp.com', 'https://btm-api2.herokuapp.com', 'https://btm-api3.herokuapp.com']
}


const mongoose = require("mongoose")

let tk_id
// let argv = require('minimist')(process.argv.slice(2));
// console.dir(argv);
const TkSchema = new mongoose.Schema({
		tk: {
			type: String,
			require: true
		}
	}),
	os = require('os')

const Tk = mongoose.model("Tk", TkSchema);

const get_con = () => {

	Tk.findOne({
		_id: tk_id
	}, (error, tk) => {
		// setTimeout(() => {
		// 	console.log({
		// 		tk: tk
		// 	})

		// }, 5000)
		token = tk.tk
		nextAvailable(getport(), '0.0.0.0').then((next) => {

			// console.log(next)
			server.listen(next, (error) => {
				if (!error) {
					console.clear()

					// console.log(tp[0])
					// console.log(tp[1])
					// console.log(tp[2])
					// console.log(tp.length)
					// tp.map( tmp =>{
					// 	console.log(tmp[1][0].address)
					// })
					let tp = Object.entries(os.networkInterfaces())
					let ips = ""
					for (let i = 0; i < tp.length; i++) {

						ips += "http://" + tp[i][1][0].address + ":" + next
						if (i < tp.length - 1) {
							ips += ", "
						}
					}
					// console.log({ips:ips})
					if (msg.head) {
						console.log("\t\t" + chalk.red(msg.head))
						console.log("\t" + chalk.blue(msg.body))

						console.log("\t" + msg.action + " " + ips)
					} else {
						console.log("\t" + msg.action + " " + ips)
						// console.log("\t" + msg.action)
					}
					// console.log('Server Run in ' + next)
				} else {
					console.log(error)
					// run(port++)
				}
			})
		})

	})
}
let db = argv['db'] || argv['DB']
if (db !== 'local') {
	console.log("DB Cloud")
	tk_id = '5b35aef9856afb46f98297fa'
	mongoose.connect('mongodb://root:mkdirbuild0099@ds018708.mlab.com:18708/middleware').then(() => {
		mongoose.Promise = global.Promise
		get_con()
	})


} else {
	console.log("DB local")
	tk_id = '5b3d6c80286867475e68f8c2'
	mongoose.connect('mongodb://localhost/middleware').then(() => {
		mongoose.Promise = global.Promise
		get_con()
	})
}
