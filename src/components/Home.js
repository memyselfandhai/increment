import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <p>current routine: BLS | day 4: shoulders </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <NavLink exact to="workout">
              <h1>new workout</h1>
            </NavLink>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>routines</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <h1>log</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <h1>settings</h1>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
