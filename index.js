const express = require('express'),
	request = require('request'),
	norm = require('normalize-url')
let cur = 0,
	// servers = ['http://localhost:8081','http://localhost:8081','http://localhost:8081']
	servers = ['https://btm-api1.herokuapp.com', 'https://btm-api2.herokuapp.com', 'https://btm-api3.herokuapp.com'],
	sleep = 'https://btm-api0.herokuapp.com'
	// sleep = 'http://localhost:8081'



// mongodb://<dbuser>:<dbpassword>@ds018708.mlab.com:18708/middleware




let token;

const handler = (req, res) => {
	try {
		req.headers['tk'] =  token
		// console.log(req.headers)

		req.pipe(request({
			url: norm(servers[cur] + req.url)
		})).pipe(res);
		// console.log({url: norm(servers[cur] + req.url)})
		// console.log(servers[cur])
		cur = (cur + 1) % servers.length;
	} catch (error) {
		req.pipe(request({
			url: servers[cur] + req.url
		})).pipe(res);
		// console.log(servers[cur])
		cur = (cur + 1) % servers.length;
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
	process.env.PORT || numb

const run = async (port = 8080) => {
		try {
			let numb = await getport(port)
			console.log(numb)
			server.listen(numb, (error) => {
				if (!error) {
					console.log('Server Run in ' + getport(port))
				} else {
					run(port++)
				}
			})
			// server.on('error', (error) => {
			// 	run(port++)
			// })
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



const mongoose =  require("mongoose")

mongoose.connect('mongodb://root:mkdirbuild0099@ds018708.mlab.com:18708/middleware').then(() =>{
	
const TkSchema = new mongoose.Schema({
    tk: {
        type: String,
        require: true
    }
});

const Tk = mongoose.model("Tk", TkSchema);
Tk.findOne({_id: '5b35aef9856afb46f98297fa'}, (error, tk) =>{
		// console.log(tk)
		token = tk.tk
		nextAvailable(getport(), '0.0.0.0').then((next) => {
			// console.log(next)
			server.listen(next, (error) => {
				if (!error) {
					console.log('Server Run in ' + next)
				} else {
					// run(port++)
				}
			})
		})
	
})

})






const https =  require('https')
setInterval(() => {
	// console.log(servers[0])
	request(servers[0], (error, response, body) =>{})
	request(servers[1], (error, response, body) =>{})
	request(servers[2], (error, response, body) =>{})
},250000)

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