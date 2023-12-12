import React from 'react';
import { Grid, Button, Form, Header, Segment } from 'semantic-ui-react'

function Excluir() {

    document.title = "Excluir conta";

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h1' color='teal' textAlign='center'>
                    Excluir
                </Header>
                <Form size='large'>
                    <Segment color='red' piled>
                        Essa ação resultará na exclusão permanente da conta
                        <Button.Group>
                            <Button color='red'>
                                Excluir
                            </Button>
                            <Button.Or text='ou' />
                            <Button><a href='main'>Cancelar</a></Button>
                        </Button.Group>

                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    );

}

export default Excluir;
