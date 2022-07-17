const axios=require('axios');

const body = "1".repeat(132 * 1024);

async function request() {
	console.time("time")
	let res = await axios.post("http://127.0.0.1:5001/test/post", body, {
		"headers": {
			"content-type": "text/plain; charset=utf-8"
		}
	})

	console.log('response.size:', (await res.data).length);
	console.timeEnd("time")
}


async function main(){
	for (let i=0;i<10;i++){
		await request();
	}
}

main();

