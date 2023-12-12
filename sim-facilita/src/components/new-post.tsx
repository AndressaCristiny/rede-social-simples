import React from 'react';
import { useState, useMemo } from 'react';
import { Comment, Button, Form } from 'semantic-ui-react'

function NewPost() {

    const [post, setPost] = useState('');

    const postLength = useMemo(() => {
        return post.length;
    }, [post.length])

    const limitCaract = (event) => {
        setPost(event.target.value);
    }

    return (
        <>
            <Comment.Group>
                <Comment>
                    <Comment.Content>
                        <Form reply>
                            <Form.TextArea placeholder='Novo Post' value={post} onChange={limitCaract} maxLength={500}/>
                            <Comment.Metadata >
                                {postLength}/500
                            </Comment.Metadata>
                            <Button content='Enviar' labelPosition='left' icon='edit' color='teal' fluid />
                        </Form>
                    </Comment.Content>
                </Comment>
            </Comment.Group>
        </>
    );

}

export default NewPost;
