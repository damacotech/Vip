import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Label,
} from "reactstrap";

function UserProfile() {
  const [position, setPosition] = useState(0);
  const updateSelectedPosition = (e) => {
    setPosition(e.target.value);
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col md="10" className="ml-auto mr-auto">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Phone Number</label>
                        <Input placeholder="Phone Number" type="tel" />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="7">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input placeholder="email@email.com" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input placeholder="First Name" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input placeholder="Last Name" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Input placeholder="Home Address" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>City</label>
                        <Input placeholder="City" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="4">
                      <FormGroup>
                        <label>Country</label>
                        <Input placeholder="Country" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label>Postal Code</label>
                        <Input placeholder="ZIP Code" type="number" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>Position</label>
                        <Input
                          type="select"
                          name="position"
                          value={position}
                          onChange={updateSelectedPosition}
                          id="positionSelect"
                        >
                          <option value={0} disabled>
                            Position
                          </option>
                          <option value={1}>Staff</option>
                          <option value={2}>Board Member</option>
                          <option value={3}>Intern</option>
                          <option value={4}>Consultant</option>
                          <option value={5}>IT Support</option>
                          <option value={6}>Volunteer</option>
                          <option value={7}>Other</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* <Row>
                    <Col className="pr-md-1" md="9">
                      <Row>
                        <Col className="pr-md-1" md="4">
                          <h5>Access privileges</h5>
                        </Col>
                      </Row>
                      <FormGroup>
                        <Row>
                          <Label check>
                            <Col className="pr-md-1">
                              <input type="checkbox" value={0} id="admin" />{" "}
                              Administrators (total access)
                            </Col>
                          </Label>
                        </Row>
                        <Row>
                          <Col className="pr-md-1" md="4">
                            <h5>For all others:</h5>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="pr-md-1">
                            <Label check>
                              <input type="checkbox" value={0} id="adults" />{" "}
                              Adults Program{" "}
                            </Label>
                            <Label check>
                              <input type="checkbox" value={0} id="board" />{" "}
                              Board{" "}
                            </Label>
                            <Label check>
                              <input type="checkbox" value={0} id="children" />{" "}
                              Children's Program{" "}
                            </Label>
                            <Label check>
                              <input type="checkbox" value={0} id="data" /> Data{" "}
                            </Label>
                            <Label check>
                              <input type="checkbox" value={0} id="reports" />{" "}
                              Reports{" "}
                            </Label>
                            <Label check>
                              <input
                                type="checkbox"
                                value={0}
                                id="vision-care"
                              />{" "}
                              Vision Care{" "}
                            </Label>
                            <Label check>
                              <input
                                type="checkbox"
                                value={0}
                                id="valunteers"
                              />{" "}
                              Valunteers{" "}
                            </Label>
                            <Label check>
                              <input
                                type="checkbox"
                                value={0}
                                id="board-files"
                              />{" "}
                              Allowed to view confidential board files{" "}
                            </Label>
                            <Label check>
                              <input type="checkbox" value={0} id="read-only" />{" "}
                              Not allowed to make changes, regardless of access
                              privileges{" "}
                            </Label>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                  </Row> */}
                </Form>
              </CardBody>
              <CardFooter className="mr-auto ml-auto">
                <Button className="btn-fill" color="info" type="submit">
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserProfile;
