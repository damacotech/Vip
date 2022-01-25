import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
} from "reactstrap";

import Demo from "./calendar";

function Volunteers() {
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="6">
                  <CardTitle tag="h4">Volunteers</CardTitle>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <div className="places-buttons">
                <Row>
                  <Col className="ml-auto mr-auto" lg="8">
                    <Row>
                      <Col md="3">
                        <Button block color="info">
                          Calendar
                        </Button>
                      </Col>
                      <Col md="3">
                        <Button block color="info">
                          Events
                        </Button>
                      </Col>
                      <Col md="3">
                        <Button block color="info">
                          Reports
                        </Button>
                      </Col>
                      <Col md="3">
                        <Button block color="info">
                          Volunteers
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="12" md="12">
          <Card>
            <CardBody>
              <Demo />
              {/* <Table className="tablesorter" responsive>
                <thead className="text-primary">
                  <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1/21/2022</td>
                    <td>9:00 a.m.</td>
                    <td>Grace Episcopal , 156 Kingsley Ave. (32073)</td>
                  </tr>
                  <tr>
                    <td>1/21/2022</td>
                    <td>9:00 a.m.</td>
                    <td>Grace Episcopal , 156 Kingsley Ave. (32073)</td>
                  </tr>
                  <tr>
                    <td>1/21/2022</td>
                    <td>9:00 a.m.</td>
                    <td>Grace Episcopal , 156 Kingsley Ave. (32073)</td>
                  </tr>
                </tbody>
              </Table> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Volunteers;
