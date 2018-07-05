const express = require('express'),
	request = require('request'),
	norm = require('normalize-url')
let cur = 0



// mongodb://<dbuser>:<dbpassword>@ds018708.mlab.com:18708/middleware



let token;

const handler = (req, res) => {
	// console.log({token: token})
	try {
		req.headers['tk'] = token
		// console.log(req.headers)

		req.pipe(request({
			url: norm(servers[cur].url + req.url)
		})).pipe(res);
		console.log({
			url: norm(servers[cur].url + req.url)
		})
		// console.log(servers[cur])
		cur = (cur + 1) % servers.length;
	} catch (error) {
		setTimeout((req, res) => {
			handler(req, res)
		}, 2000)
		// req.pipe(request({
		// 	url: servers[cur] + req.url
		// })).pipe(res);
		// // console.log(servers[cur])
		// cur = (cur + 1) % servers.length;
	}
};
let net = require('net');

const server = express()
server.use(async (req, res, next) => {
		res.header("Access-Control-Allow-Origin", "*");
		res.header(
			"Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept, Authorization "
		);
		res.header('Access-Control-Allow-Methods', 'GET, PATCH, POST, DELETE, OPTIONS');
		res.header("Content-Type", " application/json; charset=utf-8")
		// res.header('Provided-By', 'btm-api')
		res.header('X-Powered-By', 'btm-api')
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
	.all('*', handler)
// const server = express().get('*', handler).post('*', handler).patch('*', handler).delete('*', handler);
let {
	isFreePort
} = require('node-port-check');
let {
	nextAvailable
} = require('node-port-check');


// const getport = async (numb = 8080) => {
// 		if(  await  isFreePort(numb,'0.0.0.0')){
// 			numb++
// 			return await getport(numb)
// 		}
// 		else{
// 			return process.env.PORT || numb
// 		}
// 	}

const getport = (numb = 8080) =>
	process.env.PORT || numb,
	chalk = require('chalk')
// 	nodemon = require('nodemon');

// nodemon({
// 	script: './index.js'
// }).on('start', function() {
// 	console.log('nodemon started');
// }).on('crash', function() {
// 	console.log('script crashed for some reason');
// 	nodemon.emit('restart');
// });



// const {
// 	spawn
// } = require('child_process');

// function spawnNodemon() {
// 	const cp = spawn('nodemon', ['./index.js', '--watch', './'], {
// 		// the important part is the 4th option 'ipc'
// 		// this way `process.send` will be available in the child process (nodemon)
// 		// so it can communicate back with parent process (through `.on()`, `.send()`)
// 		// https://nodejs.org/api/child_process.html#child_process_options_stdio
// 		stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
// 	});

// 	return cp;
// }

// var appn = spawnNodemon();

// appn.on('message', function(event) {
// 	// console.log(event)
// 	if (event.type === 'start') {
// 		console.log('nodemon started');
// 	} else if (event.type === 'crash') {
// 		console.log('script crashed for some reason');
// 		appn.send('restart');
// 		appn.send('exit')
// 	}
// });
// appn.on('exit', function () {
//   console.log('nodemon quit');
// });



// var nodemon = require('nodemon');

// nodemon({
//   script: './index.js',
//   ext: 'js '
// });

// nodemon.on('start', function () {
//   console.log('App has started');
// }).on('quit', function () {
//   console.log('App has quit');
//   process.exit();
// }).on('restart', function (files) {
//   console.log('App restarted due to: ', files);
// });

// force a restart
// 


// var chokidar = require('chokidar');

// // One-liner for current directory, ignores .dotfiles
// chokidar.watch('.', {ignored: /(^|[\/\\])\../}).on('all', (event, path) => {
//   console.log(event, path);
// });

const run = async (port = 8080) => {
		try {
			let numb = await getport(port)
			console.log(numb)
			server.listen(numb, (error) => {
				if (!error) {
					console.clear()
					console.log('Server Run in ' + getport(port))
				} else {
					run(port++)
				}
			})
			// server.on('error', (error) => {
			// 	// run(port++)
			// 	console.clear()
			// 	console.log("erro")
			// })
			process.on('uncaughtException', (error) => {
				console.clear()
				console.log('eeee')
			})
		} catch (error) {
			// console.clear()
			console.log(error)
			// run(port++)
		}
	},
	k = async () => {
		console.log({
			get: await getport()
		})
	}

let argv = require('minimist')(process.argv.slice(2));
// console.dir(argv);
let dev = argv['dev'] || argv['DEV']
let servers, sleep, msg
const https = require('https')
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
		request(servers[0].url, (error, response, body) => {})
		request(servers[1].url, (error, response, body) => {})
		request(servers[2].url, (error, response, body) => {})
	}, 250000)

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
							maintenance: false,
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
	}, 28800000)
	// } ,2000)

}

// console.log({
// 	argv_dev: argv['dev'],
// 	argv_DEV: argv['DEV']
// })
if (dev === 'local') {
	console.log('local')
	// process.exit()
	servers = [{
			url: 'http://localhost:8081',
			key: ''
		}, {
			url: 'http://localhost:8081',
			key: ''
		}, {
			url: 'http://localhost:8081',
			key: ''
		}],
		sleep = {
			url: 'http://localhost:8081',
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

mongoose.connect('mongodb://root:mkdirbuild0099@ds018708.mlab.com:18708/middleware').then(() => {
	mongoose.Promise = global.Promise
	const TkSchema = new mongoose.Schema({
			tk: {
				type: String,
				require: true
			}
		}),
		os = require('os')

	const Tk = mongoose.model("Tk", TkSchema);
	Tk.findOne({
		_id: '5b35aef9856afb46f98297fa'
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

})



let teste = () => {
	let l = ['a', 'b', 'c'],
		s = 'd'

	let change = () => {
		let tmp = l.filter(t => {
			return t !== l[0]
		})
		let cont = 0

		tmp.push(s)
		s = l[0]
		l = tmp
		console.log(l, s)
		cont++
		if (cont < 10) {

			// setTimeout(change(l,s,cont),1000)
			setInterval(() => {
				let tmp = l.filter(t => {
					return t !== l[0]
				})

				tmp.push(s)
				s = l[0]
				l = tmp
				console.log(l, s)
				cont++
			}, 28800000)
		} else {
			return true;
		}

	}
	// change(l, s, 0)
	change()

}

// teste()