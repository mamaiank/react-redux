import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";

const HtmlApp = (value) => {
    return (
        <Container>
            <Row>
                {
                    value.data.map((result, key) => (
                        <Col xs={12} md={6} lg={4} key={key}>
                            <Card className="mx-auto" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title><Link to={`/post/${result.id}`}>{result.title}</Link></Card.Title>
                                    <span className="content-html" dangerouslySetInnerHTML={{ __html: result.body }} />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dataStatus: false,
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState({ data: data, dataStatus: true }));
    }
    render() {
        const { data, dataStatus } = this.state;
        return (
            <>
                {dataStatus ? <HtmlApp data={data} /> : <h1>Loading</h1>}

            </>
        );
    }
}

export default Home;