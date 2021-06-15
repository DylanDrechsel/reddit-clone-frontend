import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import TextPost from './PostBoxes/TextPost'

const PostChoiceBar = () => {
    const [postState, setPostState] = useState('text')

    const handlePostNoImageClick = () => {
        setPostState('text')
    }

    const handlePostWithImageClick = () => {
        setPostState('image');
    }

    const handleLinkPostClick = () => {
        setPostState('link')
    }

    return (
			<div className='PostChoiceBar'>
				<Container>
					<Row >
                        <Col className={postState === 'text' ? 'PostNoImageClicked' : 'PostNoImage'} onClick={handlePostNoImageClick}>
						    <h4 className='PostNoImageText'>Text Post</h4>
                        </Col>

                        <Col className={postState === 'image' ? 'PostWithImageClicked' : 'PostWithImage'} onClick={handlePostWithImageClick}>
                            <h4 className='PostWithImageText'>Post With Image</h4>
                        </Col>

                        <Col className={postState === 'link' ? 'LinkPostClicked' : 'LinkPost'} onClick={handleLinkPostClick}>
                            <h4 className='LinkPostText'>Link</h4>
                        </Col>
					</Row>

                    <Row>
                        <TextPost />
                    </Row>
				</Container>
			</div>
		);
};

export default PostChoiceBar;