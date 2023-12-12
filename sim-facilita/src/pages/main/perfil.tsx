import React from 'react';
import { Toast, ToastContainer } from 'react-toastify/dist/components';
import { Grid, Header, Segment, Comment, Item, Feed, Image, Divider } from 'semantic-ui-react'
import CompHeader from '../../components/header';
import CompCardUser from '../../components/card-user';
import NewPost from '../../components/new-post';

function Perfil() {

    document.title = "Perfil";

    return (
        <>
            <CompHeader />

            <Grid columns='equal' textAlign='center'>
                <Grid.Row stretched>

                    <CompCardUser />

                    <Grid.Column style={{ maxWidth: 700 }}>

                        <NewPost />

                        <Divider horizontal>
                            <Header as='h3'>
                                Meus Post's
                            </Header>
                        </Divider>
                        <Segment textAlign='left'>
                            <Item.Group>
                                <Item>
                                    <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/small/steve.jpg' />
                                    <Item.Content>
                                        <Item.Header as='a'>Header</Item.Header>
                                        <Item.Meta>Description</Item.Meta>
                                        <Item.Description>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                                        </Item.Description>
                                        <Item.Extra>Additional Details</Item.Extra>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        </Segment>
                    </Grid.Column>


                    <Grid.Column style={{ maxWidth: 350, maxHeight: 900 }}>
                        <Segment>
                            <Header as='h3' dividing>
                                Seguidores
                            </Header>
                            <Feed>
                                <Feed.Event>
                                    <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/steve.jpg' />
                                    <Feed.Content>
                                        <Feed.Summary>
                                            Roberto Oliveira
                                        </Feed.Summary>
                                    </Feed.Content>
                                </Feed.Event>
                                <Feed.Event>
                                    <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/steve.jpg' />
                                    <Feed.Content>
                                        <Feed.Summary>
                                            Sara Reis
                                        </Feed.Summary>
                                    </Feed.Content>
                                </Feed.Event>
                                <Feed.Event>
                                    <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/steve.jpg' />
                                    <Feed.Content>
                                        <Feed.Summary>
                                            Lucas Santiago
                                        </Feed.Summary>
                                    </Feed.Content>
                                </Feed.Event>
                            </Feed>
                        </Segment>
                        <Segment>
                            <Header as='h3' dividing>
                                Seguindo
                            </Header>
                            <Feed>
                                <Feed.Event>
                                    <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/steve.jpg' />
                                    <Feed.Content>
                                        <Feed.Summary>
                                            Roberto Oliveira
                                        </Feed.Summary>
                                    </Feed.Content>
                                </Feed.Event>
                                <Feed.Event>
                                    <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/steve.jpg' />
                                    <Feed.Content>
                                        <Feed.Summary>
                                            Sara Reis
                                        </Feed.Summary>
                                    </Feed.Content>
                                </Feed.Event>
                                <Feed.Event>
                                    <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/steve.jpg' />
                                    <Feed.Content>
                                        <Feed.Summary>
                                            Lucas Santiago
                                        </Feed.Summary>
                                    </Feed.Content>
                                </Feed.Event>
                            </Feed>
                        </Segment>
                    </Grid.Column>


                </Grid.Row>
            </Grid>

        </>
    );

}

export default Perfil;
