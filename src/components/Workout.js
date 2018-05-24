import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Grid, Row, Col, Table, Button } from "react-bootstrap";

class Workout extends Component {
  render() {
    return (
      <Grid>
        {" "}
        <Row>
          <Col xs={3}>
            <Button>1 min</Button>
          </Col>
          <Col xs={3}>
            <Button>2 min</Button>
          </Col>
          <Col xs={3}>
            <Button>3 min</Button>
          </Col>
          <Col xs={3}>
            <Button>Edit Timer</Button>
          </Col>
        </Row>
        <br />
        <Table striped bordered condensed hover responsive>
          <thead>
            <tr>
              <th>Exercise</th>
              <th>Weight</th>
              <th>Reps</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bench</td>
              <td>185</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Bench</td>
              <td>185</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Bench</td>
              <td>185</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Incline Bench</td>
              <td>185</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Incline Bench</td>
              <td>185</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Incline Bench</td>
              <td>185</td>
              <td>5</td>
            </tr>
            <tr>
              <td colSpan="3">
                <NavLink exact to="/">
                  <Button block>complete workout</Button>
                </NavLink>
              </td>
            </tr>
          </tbody>
        </Table>
      </Grid>
    );
  }
}

export default Workout;
