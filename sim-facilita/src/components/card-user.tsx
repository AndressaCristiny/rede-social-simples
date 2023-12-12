import React, { useState } from 'react';
import { Header, Segment, Grid, Icon, List, Button, Modal } from 'semantic-ui-react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

function exampleReducer(state, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
            return { open: true, dimmer: action.dimmer, size: action.size }
        case 'CLOSE_MODAL':
            return { open: false }
        default:
            throw new Error()
    }
}

function CompCardUser() {

    //compon
    const [state, dispatch] = React.useReducer(exampleReducer, {
        open: false,
        dimmer: undefined,
        size: undefined,
    })
    const { open, dimmer } = state


    //sair
    let navigate = useNavigate();
    const sair = () => {
        axios.post("http://localhost:8000/logadoDel")
            .then(({ data }) => {

            })
            .catch(({ data }) => console.log(data));

        navigate("/");
    }


    //exibir usuário logado
    axios.get('http://localhost:8000/UserLogado')
        .then(function (response) {
            dadosUser(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })

    function dadosUser(data) {
        let id = data[0].idUser;
        axios
            .post("http://localhost:8000/infoUserLog", {
                id: id,
            })
            .then(({ data }) => setUser(data))
            .catch(({ data }) => console.log(data));

    }

    const [user, setUser] = useState(null);
    if (!user) return null;

    return (
        <>
            <Grid.Column style={{ maxWidth: 300, maxHeight: 300 }}>
                <Segment>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='users' size='small' circular />
                        <Header.Content>
                            {}
                        </Header.Content>
                    </Header>
                    <List style={{ fontSize: '20px' }} link>
                        <List.Item as='a'><a href='main'>Home</a></List.Item>
                        <List.Item as='a'><a href='perfil'>Perfil</a></List.Item>
                    </List>
                </Segment>
                <Segment>
                    <Header as='h4'>
                        <Icon name='settings' size='small' />
                        <Header.Content>
                            Account Settings
                        </Header.Content>
                        <List style={{ fontSize: '17px' }} link>
                            <List.Item as='a' onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring', size: 'mini' })}>Alterar</List.Item>
                            <List.Item as='a'><a href='/excluir'>Excluir conta</a></List.Item>
                            <List.Item as='a' onClick={sair}>Sair</List.Item>
                        </List>
                    </Header>

                </Segment>
            </Grid.Column>

            <Modal dimmer={dimmer} open={open} onClose={() => dispatch({ type: 'CLOSE_MODAL' })}>
                <Modal.Header>Alterar informações</Modal.Header>
                <Modal.Content>
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
                        Cancelar
                    </Button>
                    <Button positive onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
                        Confirmar
                    </Button>
                </Modal.Actions>
            </Modal>
        </>
    )
}

export default CompCardUser;
