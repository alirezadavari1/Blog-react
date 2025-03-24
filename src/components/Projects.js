import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "فروش وسایل گیم",
      description: "Design & Front",
      imgUrl: projImg1,
    },
    {
      title: "سایت شغل یابی",
      description: "Design & Front",
      imgUrl: projImg2,
    },
    {
      title: "فروش دوره ",
      description: "Design & Front & Bakend",
      imgUrl: projImg3,
    },
    {
      title: "وبلاگ شخصی",
      description: "Design & Front",
      imgUrl: projImg4,
    },
    {
      title: "پنل کار بری",
      description: "Design & Front",
      imgUrl: projImg5,
    },
    {
      title: "کارت ویزیت",
      description: "Design & Front",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>پروژه ها</h2>
                <p>در ایجا چند تا از پروژه ها یا نیمه پروژه هایی که تاحالا زدم رو قرار دادم. در این قسمت فقط یک عکس و نام پروژه قرار دارد اگر میخواهید به خود پروژه دسترسی داشته باشید میتوانید از اکانت گیتهابم ان را مشاهده یا استفاده کنید</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="third">
                  <Nav  variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                      <Nav.Link eventKey="first">صفحه 3</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">صفحه 2</Nav.Link>
                    </Nav.Item>
                   <Nav.Item> 
                      <Nav.Link  eventKey="third" >1 صفحه</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <p>پروژه ای وجود ندارد</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="first">
                      <p>پروژه ای وجود ندارد</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
