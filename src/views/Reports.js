import React, { useState } from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  Table,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

import { Select, MenuItem } from "@material-ui/core";

function Reports() {
  const [month, setMonth] = useState("");
  const updateSelectedMonth = (e) => {
    setMonth(e.target.value);
  };
  const [year, setYear] = useState("");
  const updateSelectedYear = (e) => {
    setYear(e.target.value);
  };
  const [fy, setFY] = useState("");
  const updateSelectedFY = (e) => {
    setFY(e.target.value);
  };
  const [fyes, setFYes] = useState("");
  const updateSelecteFY = (e) => {
    setFYes(e.target.value);
  };
  const [f, setF] = useState("");
  const updateSelectedF = (e) => {
    setF(e.target.value);
  };
  const [mon, setMon] = useState("");
  const updateSelectedVal = (e) => {
    setMon(e.target.value);
  };
  const [m, setM] = useState("");
  const updateSelectedM = (e) => {
    setM(e.target.value);
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="6">
                    <CardTitle tag="h4">Reports</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="places-buttons">
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Row>
                        <Col md="4">
                          <Button block color="info">
                            Adults Program
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button block color="info">
                            Children's Program
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button block color="info">
                            Vision Care
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
                <CardTitle tag="h4">Children's Program</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <tbody>
                    <tr>
                      <td>
                        <input type="radio" name="month" />
                      </td>
                      <td>
                        <label>Month End:</label>
                      </td>
                      <td>
                        {/* <FormGroup>
                          <Input type="select" name="Month" id="exampleSelect">
                            <option disabled>Month</option>
                            <option>Jan</option>
                            <option>Feb</option>
                            <option>Mar</option>
                            <option>Apr</option>
                            <option>May</option>
                            <option>Jun</option>
                            <option>Jul</option>
                            <option>Aug</option>
                            <option>Sep</option>
                            <option>Oct</option>
                            <option>Nov</option>
                            <option>Dec</option>
                          </Input>
                        </FormGroup> */}
                        <Select
                          value={month}
                          displayEmpty
                          onChange={updateSelectedMonth}
                        >
                          <MenuItem value={""} disabled>
                            {"Mon"}
                          </MenuItem>
                          <MenuItem value={"Jan"}>{"Jan"}</MenuItem>
                          <MenuItem value={"Feb"}>{"Feb"}</MenuItem>
                          <MenuItem value={"Mar"}>{"Mar"}</MenuItem>
                          <MenuItem value={"Apr"}>{"Apr"}</MenuItem>
                          <MenuItem value={"May"}>{"May"}</MenuItem>
                          <MenuItem value={"Jun"}>{"Jun"}</MenuItem>
                          <MenuItem value={"Jul"}>{"Jul"}</MenuItem>
                          <MenuItem value={"Aug"}>{"Aug"}</MenuItem>
                          <MenuItem value={"Sep"}>{"Sep"}</MenuItem>
                          <MenuItem value={"Oct"}>{"Oct"}</MenuItem>
                          <MenuItem value={"Nov"}>{"Nov"}</MenuItem>
                          <MenuItem value={"Dec"}>{"Dec"}</MenuItem>
                        </Select>
                      </td>
                      <td>
                        <Select
                          value={year}
                          displayEmpty
                          onChange={updateSelectedYear}
                        >
                          <MenuItem value={""} disabled>
                            {"Year"}
                          </MenuItem>
                          <MenuItem value={"2022"}>{"2022"}</MenuItem>
                          <MenuItem value={"2023"}>{"2023"}</MenuItem>
                          <MenuItem value={"2024"}>{"2024"}</MenuItem>
                        </Select>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <input type="radio" name="month" />
                      </td>
                      <td>
                        <label>Year to Date:</label>
                      </td>
                      <td>
                        <Select
                          value={fy}
                          displayEmpty
                          onChange={updateSelectedFY}
                        >
                          <MenuItem value={""} disabled>
                            {"Select"}
                          </MenuItem>
                          <MenuItem value={"CurrentFY"}>
                            {"Current FY"}
                          </MenuItem>
                          <MenuItem value={"PreviousFY"}>
                            {"Previous FY"}
                          </MenuItem>
                        </Select>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <input type="radio" name="month" />
                      </td>
                      <td>
                        <label>Three-Year Comparison thru:</label>
                      </td>
                      <td>
                        <Select
                          value={mon}
                          displayEmpty
                          onChange={updateSelectedVal}
                        >
                          <MenuItem value={""}>{"All"}</MenuItem>
                          <MenuItem value={"Jan"}>{"Jan"}</MenuItem>
                          <MenuItem value={"Feb"}>{"Feb"}</MenuItem>
                          <MenuItem value={"Mar"}>{"Mar"}</MenuItem>
                          <MenuItem value={"Apr"}>{"Apr"}</MenuItem>
                          <MenuItem value={"May"}>{"May"}</MenuItem>
                          <MenuItem value={"Jun"}>{"Jun"}</MenuItem>
                          <MenuItem value={"Jul"}>{"Jul"}</MenuItem>
                          <MenuItem value={"Aug"}>{"Aug"}</MenuItem>
                          <MenuItem value={"Sep"}>{"Sep"}</MenuItem>
                          <MenuItem value={"Oct"}>{"Oct"}</MenuItem>
                          <MenuItem value={"Nov"}>{"Nov"}</MenuItem>
                          <MenuItem value={"Dec"}>{"Dec"}</MenuItem>
                        </Select>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <input type="radio" name="month" />
                      </td>
                      <td>
                        <label>Age comparison:</label>
                      </td>
                      <td>
                        <Select
                          value={fyes}
                          displayEmpty
                          onChange={updateSelecteFY}
                        >
                          <MenuItem value={""} disabled>
                            {"Select"}
                          </MenuItem>
                          <MenuItem value={"CurrentFY"}>
                            {"Current FY"}
                          </MenuItem>
                          <MenuItem value={"PreviousFY"}>
                            {"Previous FY"}
                          </MenuItem>
                        </Select>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <input type="radio" name="month" />
                      </td>
                      <td>
                        <label>Three-Year Comparison thru:</label>
                      </td>
                      <td>
                        <Select
                          value={m}
                          displayEmpty
                          onChange={updateSelectedM}
                        >
                          <MenuItem value={""}>{"All"}</MenuItem>
                          <MenuItem value={"Jan"}>{"Jan"}</MenuItem>
                          <MenuItem value={"Feb"}>{"Feb"}</MenuItem>
                          <MenuItem value={"Mar"}>{"Mar"}</MenuItem>
                          <MenuItem value={"Apr"}>{"Apr"}</MenuItem>
                          <MenuItem value={"May"}>{"May"}</MenuItem>
                          <MenuItem value={"Jun"}>{"Jun"}</MenuItem>
                          <MenuItem value={"Jul"}>{"Jul"}</MenuItem>
                          <MenuItem value={"Aug"}>{"Aug"}</MenuItem>
                          <MenuItem value={"Sep"}>{"Sep"}</MenuItem>
                          <MenuItem value={"Oct"}>{"Oct"}</MenuItem>
                          <MenuItem value={"Nov"}>{"Nov"}</MenuItem>
                          <MenuItem value={"Dec"}>{"Dec"}</MenuItem>
                        </Select>
                      </td>
                      <td>
                        <Select
                          value={f}
                          displayEmpty
                          onChange={updateSelectedF}
                        >
                          <MenuItem value={""} disabled>
                            {"Select"}
                          </MenuItem>
                          <MenuItem value={"CurrentFY"}>
                            {"Current FY"}
                          </MenuItem>
                          <MenuItem value={"PreviousFY"}>
                            {"Previous FY"}
                          </MenuItem>
                        </Select>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="mr-auto ml-auto" lg="4" md="4">
            <Button color="info" onClick={() => console.log("click!")}>
              Submit
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Reports;
