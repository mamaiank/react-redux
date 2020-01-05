import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const HtmlApp = (value) => {
  return (
    <>
      <Jumbotron>
        <h1>{value.data.title}</h1>
        <p className="content-html" dangerouslySetInnerHTML={{ __html: value.data.body }} />
      </Jumbotron>
    </>
  );
}

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataStatus: false,
    };
  }
  componentDidMount() {
    const postId = this.props.match.params.id;
    fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
      .then(response => response.json())
      .then(data => this.setState({ data: data, dataStatus: true }));
  }
  render() {
    const { data, dataStatus } = this.state;
    console.log(data);
    return (
      <>
        {dataStatus ? <HtmlApp data={data} /> : <h1>Loading</h1>}
      </>
    );
  }
}

export default Post;