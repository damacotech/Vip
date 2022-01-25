import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Home() {
  return (
    <>
      <div className="content">
        <Row>
          <h2>Welcome {" Staff Name"}</h2>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">
                  Your Children Program screening schedule for the next three
                  weeks:
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
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
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">
                  Your Adult Program screening schedule for the next three
                  weeks:
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
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
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
