import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import Demo from "./calendar";
// var today = new Date(), date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

function Children() {
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="6">
                  <CardTitle tag="h4">Children</CardTitle>
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
                          Children
                        </Button>
                      </Col>
                      <Col md="3">
                        <Button block color="info">
                          Locations
                        </Button>
                      </Col>
                      <Col md="3">
                        <Button block color="info">
                          Scheduling
                        </Button>
                      </Col>
                      <Col md="3">
                        <Button block color="info">
                          Upcoming
                        </Button>
                      </Col>
                      <Col md="3">
                        <Button block color="info">
                          Results
                        </Button>
                      </Col>
                      <Col md="3">
                        <Button block color="info">
                          Referrals
                        </Button>
                      </Col>
                      <Col md="3">
                        <Button block color="info">
                          Reminders
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
        <Col md="12">
          <Card>
            <CardBody>
              <Demo />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Children;
