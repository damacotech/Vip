import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table
} from "reactstrap";

function Access() {
  const notificationAlertRef = React.useRef(null);
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome
          </div>
        </div>
      ),
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7,
    };
    notificationAlertRef.current.notificationAlert(options);
  };
  return (
    <>
      <div className="content">
        <div className="react-notification-alert-container">
          <NotificationAlert ref={notificationAlertRef} />
        </div>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="6">
                    <CardTitle tag="h4">Access</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="places-buttons">
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Row>
                        <Col md="3">
                          <Button
                            block
                            color="info"
                            onClick={() => notify("tr")}
                          >
                            Add
                          </Button>
                        </Col>
                        <Col md="3">
                          <Button
                            block
                            color="info"
                            onClick={() => notify("tc")}
                          >
                            Active
                          </Button>
                        </Col>
                        <Col md="3">
                          <Button
                            block
                            color="info"
                            onClick={() => notify("bl")}
                          >
                            Signatures
                          </Button>
                        </Col>
                        <Col md="3">
                          <Button
                            block
                            color="info"
                            onClick={() => notify("br")}
                          >
                            Uploads
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
              <CardHeader>
                <CardTitle tag="h4">ACTIVE USERS</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Tybe</th>
                      <th>Last Login</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Maher George Brikae</td>
                      <td>Admin</td>
                      <td>1/20/2022 10:32:13 AM</td>
                    </tr>
                    <tr>
                      <td>Paul Barnett</td>
                      <td>Staff</td>
                      <td>1/20/2022 10:00:47 AM</td>
                    </tr>
                    <tr>
                      <td>Diana Kasza</td>
                      <td>Consultant</td>
                      <td>7/22/2014 1:33:40 PM</td>
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

export default Access;
