const cancel = document.querySelector('#cancel');
const user = document.querySelector("#user");
const pass = document.querySelector("#pass");
const enviar = document.querySelector('button:nth-child(2)');

const feedbackUser = document.getElementById('feedback-user');
const feedbackPass = document.getElementById('feedback-pass');

const data = new FormData();

cancel.addEventListener('click', (e)=>{
	e.preventDefault();
	user.value = '';
	pass.value = '';
});

enviar.addEventListener('click',(e)=>{
	e.preventDefault();

	data.append('user', user.value);
	data.append('pass', pass.value);

	if(isValid(user) && isValid(pass)){
		fetch('/user', {
			method: 'POST',
			body: data,
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => {
			window.location = 'welcome.html';
		})
	}
});

const isValid = (element) =>{
	if(element.value === ''){
		element.classList.toggle('is-invalid');
		if(element.getAttribute('id') === 'user'){
			feedbackUser.textContent = 'Campo obrigatório';
			feedbackUser.classList.toggle('invalid-feedback');
		} else {
			feedbackPass.textContent = 'Campo obrigatório';
			feedbackPass.classList.toggle('invalid-feedback');
		}
		return false;
	} else {
		if(element.classList.contains('is-invalid')){
			element.classList.remove('is-invalid');
		}

		if(element.getAttribute('id') === 'user'){
			feedbackUser.textContent = '';
		} else {
			feedbackPass.textContent = '';
		}
		element.classList.add('is-valid');
		return true;
	}
}
