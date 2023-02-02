const body = document.querySelector('body')
const section = document.querySelector('section')
const form = document.querySelector('form')


document.getElementById("loginForm").addEventListener("submit", event => {
	event.preventDefault();
	login()
})

function login() {

	const username = form[0].value
	const password = form[1].value

	if (username.toUpperCase() == 'ERIC' || username.toUppercase() == 'ERIC WRANNE') {

		if (password.toUpperCase() == 'Bottas2018'.toUpperCase() || password.toUpperCase() == 'ValtteriBottas2018'.toUpperCase()) {

			const img = document.createElement('img')
			img.src = 'img/eric.png'
			body.innerHTML = ''
			body.style.background = 'black'
			body.style.backgroundImage = `url(https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif)`
			body.style.alignItems = 'start'
			section.innerHTML = `<h1 style="font-size: 1.5em" class="white">Stort grattis på födelsedagen, säger vi i dag till den nyblivna 30-åringen. Hipp hurra! 🎈</h1>`
			section.append(img)
			body.append(section)

		} else {
			alert('Fel lösenord! Idiot!')
		}

	} else {
		alert('Fel användarnamn! Idiot!')
	}


} 