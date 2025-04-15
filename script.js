const btn = document.querySelector('#time')
const content = document.querySelector('.content')


btn.addEventListener('click', ()=>{
	const ip = prompt("Enter ip", "192.168.10.1");
	if(ip){
		getTime(ip)
	} else{
		alert('Введіть IP адресу')
	}
})

async function getTime(ip){
	try{
		const response = await fetch(`https://www.timeapi.io/api/time/current/ip?ipAddress=${ip}`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		const time = await data;

		content.innerHTML = 
			`<br> IP: ${ip}
			<br> TimeZone: ${time.timeZone}
			<br> dateTime: ${time.dateTime}
			<br> Day: ${time.day}`
		}
	catch(error){
		content.textContent = error.message
		}
}