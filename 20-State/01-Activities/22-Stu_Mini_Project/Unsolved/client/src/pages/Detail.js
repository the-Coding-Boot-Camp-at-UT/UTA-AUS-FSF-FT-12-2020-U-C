import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

function Detail(props) {
  return (
    <>{/* Replace `true` with the state of your application */}{true ? (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>TITLE by AUTHOR</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Content:</h1>
              <p>BODY</p>
            </article>
          </Col>
          {/* Replace `false` to check if the current post is in the favorites list */}
          {false ? (
            <button className="btn btn-danger">Remove from Favorites!</button>
          ) : (
            <button className="btn">❤️ Add to Favorites</button>
          )}
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Posts</Link>
          </Col>
        </Row>
      </Container>
    ) : (
      <div>loading...</div>
    )}</>
  );
}

export default Detail;
