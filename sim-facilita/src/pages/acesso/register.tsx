import React, { useState, useCallback } from 'react';
import { Grid, Button, Form, Header, Segment } from 'semantic-ui-react'
import axios from "axios";

function Register() {

  document.title = "Cadastro";

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const cadastrar = useCallback(async () => {

    await axios
      .post("http://localhost:8000", {
        nome: nome,
        sobrenome: sobrenome,
        nascimento: nascimento,
        telefone: telefone,
        email: email,
        senha: password
      })
      .then(({ data }) => alert(data))
      .catch(({ data }) => alert(data));

  }, [nome, sobrenome, nascimento, telefone, email, password]);

  return (
    <>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h1' color='teal' textAlign='center'>
            Cadastrar
          </Header>
          <Form size='large'>
            <Segment piled>
              <Form.Input fluid placeholder='Nome' required value={nome} onChange={e => setNome(e.target.value)} />
              <Form.Input fluid placeholder='Sobrenome' required value={sobrenome} onChange={e => setSobrenome(e.target.value)} />
              <Form.Input fluid placeholder='Data de Nascimento' type='date' required value={nascimento} onChange={e => setNascimento(e.target.value)} />
              <Form.Input fluid placeholder='Telefone' type='tel' required value={telefone} onChange={e => setTelefone(e.target.value)} />
              <Form.Input fluid placeholder='E-mail address' value={email} onChange={e => setEmail(e.target.value)} />
              <Form.Input fluid placeholder='Password' type='password' required value={password} onChange={e => setPassword(e.target.value)} />
              <Button color='teal' fluid size='large' onClick={cadastrar}>
                Cadastrar
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );

}

export default Register;
