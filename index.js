//console.log('Hello World!')
var schema = {
    properties: {
      nome: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'O nome pode conter apenas letras e espaços',
        required: true
	  },
	  sobrenome: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'O sobrenome pode conter apenas letras e espaços',
        required: true
      },
      email: {
		pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))+$/,
        message: 'O email deve conter @ e .com',
	  },
	  cpf: {
		pattern: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
		message: 'O cpf pode conter apenas numeros',
		required: true
      }
    }
  };

const prompt = require("prompt");
const validarCpf = require('validar-cpf');

prompt.start();

prompt.get(schema, function(_, result) {
	console.log("Nome: "+result.nome);
	console.log("Sobrenome: "+result.sobrenome);
	console.log("Email: "+result.email);
	console.log("CPF "+validarCpf(result.cpf));

});
