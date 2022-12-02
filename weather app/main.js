const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5a98fe2c84msh5692b5233de7527p10179djsn7c702c0d6273',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};


function weather(){
	const user = document.getElementById("user-input").value;
	fetch(`https://open-weather13.p.rapidapi.com/city/${user}`, options)
	.then(response => response.json())
	.then(response => inputs(response))
	.catch(err => console.error(err));
}


function inputs(name){
	const user = document.getElementById("user-input").value;
	if(user != ""){document.querySelector(".city").innerText = `${user}`;}

	document.querySelector(".main").innerText = `Current Temperature : ${name.main.temp}\u00B0`
	document.querySelector(".max").innerText = `Max Temperature : ${name.main.temp_max}\u00B0`
	document.querySelector(".min").innerText = `Min Temperature : ${name.main.temp_min}\u00B0`
}


