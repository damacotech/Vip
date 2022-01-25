/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Home from "views/Home.js";
import Access from "views/Access.js";
import Children from "views/Children.js";
import Reports from "views/Reports.js";
import Adults from "views/Adults.js";
import VisionCare from "views/VisionCare.js";
import Volunteers from "views/Volunteers.js";
import UserProfile from "views/UserProfile";

var routes = [
  {
    path: "home",
    name: "Home",
    icon: "tim-icons icon-bank",
    component: Home,
    layout: "/",
  },
  {
    path: "access",
    name: "Access",
    icon: "tim-icons icon-key-25",
    component: Access,
    layout: "/",
  },
  {
    path: "adults",
    name: "Adults",
    icon: "tim-icons icon-single-02",
    component: Adults,
    layout: "/",
  },
  {
    path: "children",
    name: "Children",
    icon: "tim-icons icon-satisfied",
    component: Children,
    layout: "/",
  },
  {
    path: "reports",
    name: "Reports",
    icon: "tim-icons icon-notes",
    component: Reports,
    layout: "/",
  },
  // {
  //   path: "vision-care",
  //   name: "Vision Care",
  //   icon: "tim-icons icon-globe-2",
  //   component: VisionCare,
  //   layout: "/",
  // },
  {
    path: "volunteers",
    name: "Volunteers",
    icon: "tim-icons icon-badge",
    component: Volunteers,
    layout: "/",
  },
  {
    path: "user",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/",
  },
];
export default routes;
