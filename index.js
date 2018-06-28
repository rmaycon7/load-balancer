const express = require('express'),
	request = require('request'),
	norm = require('normalize-url')
let cur = 0,
	servers = ['https://btm-api1.herokuapp.com', 'https://btm-api2.herokuapp.com', 'https://btm-api3.herokuapp.com'],
	sleep = 'https://btm-api.herokuapp.com'

const handler = (req, res) => {
	try {

		req.pipe(request({
			url: norm(servers[cur] + req.url)
		})).pipe(res);
		console.log({url: norm(servers[cur] + req.url)})
		// console.log(servers[cur])
		cur = (cur + 1) % servers.length;
	} catch (error) {
		req.pipe(request({
			url: servers[cur] + req.url
		})).pipe(res);
		console.log(servers[cur])
		cur = (cur + 1) % servers.length;
	}
};
let net = require('net');

const server = express().get('*', handler).post('*', handler).patch('*', handler).delete('*', handler);
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