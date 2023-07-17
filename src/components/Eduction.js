import React from "react";
import { Container, Row } from "react-bootstrap";
import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Image from "./Image";

export const Eduction = () => {
  return (
    <section className="eduction" id="eduction">
      <Container>
        <Row>
          <h2 className="text-center mb-5"> Educational Qualifications</h2>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{
                background:
                  "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2019 - 2022"
              iconStyle={{
                background:
                  "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
              }}
              icon={<Image />}
            >
              <h3 className="vertical-timeline-element-title">
                NSTI DEHRADUN, Diploma
              </h3>

              <p>Advance Diploma in IT, Networking and Cloud Computing.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background:
                  "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2018 - 2020"
              iconStyle={{
                background:
                  "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
              }}
              icon={<Image />}
            >
              <h3 className="vertical-timeline-element-title">
                KANPUR UNIVERSITY, Graduation
              </h3>

              <p>Bachelor in Science(Mathematics) </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background:
                  "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2016 - 2017"
              iconStyle={{
                background:
                  "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
              }}
              icon={<Image />}
            >
              <h3 className="vertical-timeline-element-title">
                NCVT BOARD LUCKNOW, I.T.I COPA
              </h3>

              <p>Computer Operator and Programming Assistant.</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Row>
      </Container>
    </section>
  );
};
