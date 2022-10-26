const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.post('/user:infos', (req, res) => {
	console.log(req.params);
  	res.statusCode(200);
	res.send({
		mensage: "Dados do usuário recebido com sucesso!"
	});
});

app.listen(port, () => {
  console.log(`Web Login running`);
});