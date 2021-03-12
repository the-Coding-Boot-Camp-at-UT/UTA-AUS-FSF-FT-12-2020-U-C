import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function RecipeList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function RecipeListItem(props) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={props.thumbnail || "http://img.recipepuppy.com/560556.jpg"}/>
          </Col>
          <Col size="xs-8 sm-9">
              <h3>{props.title}</h3>
            
            <ul>
             {props.ingredients.map(value => { return (
               <li>{value}</li>
             )})}
            </ul>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href={props.href}
            >
              Go to recipe!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
