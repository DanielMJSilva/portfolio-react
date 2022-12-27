import React from "react";
import classes from "./Projects.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import Button from "@material-ui/core/Button";
import StarIcon from "@material-ui/icons/Star";

const Projects = ({ reff }) => {
  return (
    <div className={classes.body} ref={reff}>
      <div className={classes.project_title}>
        <h2> My Professional timeline </h2>
      </div>

      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            border: "3px solid  yellow",
            background: "#3a4750",
            color: "#f6c90e",
          }}
          contentArrowStyle={{ borderRight: "16px solid  yellow" }}
          iconStyle={{ background: "#303841", color: "#f6c90e" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Production Engineering Bachelor's Degree
          </h3>
          <h4 className="vertical-timeline-element-subtitle"> 2011 </h4>
          <p>
            {" "}
            Studied Production Engineering at Pontifical Catholic University of 
            Rio de Janeiro, which I learn about ERPs, Finance, C++ and algorithm.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            border: "3px solid  yellow",
            background: "#3a4750",
            color: "#f6c90e",
          }}
          contentArrowStyle={{ borderRight: "16px solid  yellow" }}
          iconStyle={{ background: "#303841", color: "#f6c90e" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            Business Risk Consultant{" "}
          </h3>
          <h4 className="vertical-timeline-element-subtitle"> Mar 2010 - Dec 2013</h4>
          <p>Worked at Deloitte for 4 years, where I developed leadership and teamwork skills</p>
          <ul>
            <li>
            Identified the IT controls and risks to ensure they follow the best practices of IT
            </li>
            <li>Developed policies and procedures in compliance with regulations, and according to best practices of Corporative Governance.</li>
            <li>Led 5 people team in a 9 months project, and developed leadership and teamwork skills.{" "}
            </li>
            <li>Interviewed client to map the business process, and identify inconsistencies.{" "}
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            border: "3px solid  yellow",
            background: "#3a4750",
            color: "#f6c90e",
          }}
          contentArrowStyle={{ borderRight: "16px solid  yellow" }}
          iconStyle={{ background: "#303841", color: "#f6c90e" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            Project Engineer{" "}
          </h3>
          <h4 className="vertical-timeline-element-subtitle"> Dec 2013 - Jun 2014</h4>
          <p>Worked at Leduca Construction</p>
          <ul>
            <li>
              Estimated the cost of the construction project, including materials, equipment, and labor.
            </li>
            <li>
              Supervised construction site, and monitored cost and progress of the project.</li>
            <li>
              Improved the process of estimating and monitoring costs using excel macros.{" "}
            </li>
            <li>
              Wrote reports and presented periodic status meeting.{" "}
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            border: "3px solid  yellow",
            background: "#3a4750",
            color: "#f6c90e",
          }}
          contentArrowStyle={{ borderRight: "16px solid  yellow" }}
          iconStyle={{ background: "#303841", color: "#f6c90e" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            Store Manager{" "}
          </h3>
          <h4 className="vertical-timeline-element-subtitle"> Jun 2014 - Dec 2016</h4>
          <p>Worked at Casa Justo, Office and Art supplies</p>
          <ul>
            <li>
              Tracked and analyzed sales and customer trend.
            </li>
            <li>
              Maintained high standards of customer service during high-volume, fast-paced operations.</li>
            <li>
              Handled with all issues that arise from staff or customers (complaints, grievances etc).{" "}
            </li>
            <li>
              Applied retail KPI knowledge to make strategic commercial decisions.{" "}
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            border: "3px solid  yellow",
            background: "#3a4750",
            color: "#f6c90e",
          }}
          contentArrowStyle={{ borderRight: "16px solid  yellow" }}
          iconStyle={{ background: "#303841", color: "#f6c90e" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            Software Enginner Program
          </h3>
          <h4 className="vertical-timeline-element-subtitle"> 2020-2022 </h4>
          <p>
            {" "}
            Studied Software Engineer program at Centennial College,
             where I learned MERN, SpringBoot, AWS, DevOps, REST and GraphQL 
             APIs, MySQL and MongoDB, Java, C#, JavaScript and Python languages.{" "}
          </p>
        </VerticalTimelineElement>     
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            border: "3px solid  yellow",
            background: "#3a4750",
            color: "#f6c90e",
          }}
          contentArrowStyle={{ borderRight: "16px solid yellow" }}
          iconStyle={{ background: "#303841", color: "#f6c90e" }}
          icon={<StarIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            Full Stack Projects{" "}
          </h3>
          <h4 className="vertical-timeline-element-subtitle"> 2020-2022 </h4>
          <p>
            {" "}
            In 2020 and 2022, I performed more than 8 projects using Javascript,
            React, React Native, Redux, Hooks, Material-UI, Animate.CSS
            AWS could services, GraphQL, API, Node, Express and MongoDB.
          </p>
          <h4 className="vertical-timeline-element-button">
            <div className={classes.btns}>
              <Button
                variant="outlined"
                style={{ border: "2px solid yellow", color: "white" }}
                href="https://github.com/DanielMJSilva"
              >
                View Code at Github
              </Button>
              <span className={classes.btns_span}></span>
            </div>
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Projects;
