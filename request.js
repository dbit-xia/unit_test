const fetch=require('node-fetch');

const body="1".repeat(132*1000);

async function request(){
	console.time("time")
	let res=await fetch("http://127.0.0.1:5001/test/post", {
	  "headers": {
		"content-type": "text/plain; charset=utf-8"
	  },
	  "body": body,
	  "method": "POST"
	})
	
	console.log('response.size:',(await res.text()).length);
	console.timeEnd("time")
}


async function main(){
	for (let i=0;i<10;i++){
		await request();
	}
}

main();

