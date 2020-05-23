import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import styles from "assets/jss/material-kit-react/views/components.js";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(styles);

var NewComponent = (
      <div>
        <p>
          <font color="#49b1cc" size={4} face="arial">
            <b>
              Virtual MEDICAL WEIGHT LOSS –Hamilton, Princeton, Monroe  - Now available via TELEMDICINE - Doxy.me , a HIPAA compliant platform for physicians
            </b>
          </font>
        </p><p>
          <font color="#49b1cc" size={4} face="arial">
            <b>
              &nbsp;&nbsp;&nbsp;&nbsp; Lose weight and maintain the optimal weight level without going to doctor’s office. Virtual Telemedicine consultations and follow up appointments will allow diagnosis and treatment of obesity.<br />
              Obesity is a medical condition like any other disease and needs to be treated by a physician for best results.
            </b>
          </font>
        </p>  
        <p>
          <font color="#49b1cc" size={4} face="arial">
            <b>
              What is medical weight loss? 
            </b>
          </font>
        </p>
        <p>
          <font size={4} face="arial">
            &nbsp;&nbsp;&nbsp;&nbsp; Medical weight loss is a program of weight loss and weight maintenance at the optimal level based on medical scientific evidence that targets the root causes of obesity and weight gain.<br />
            The program is designed, guided and supervised by a physician – Dorota M. Gribbin, M.D.
          </font>
        </p>
        <p>
          <font size={4} face="arial">
            &nbsp;&nbsp;&nbsp;&nbsp; Medical weight loss is designed to help any individual with his or her specific weight loss goals, whether to lose 100 pounds or those last stubborn ten pounds. Dr Gribbin will provide the treatment and<br />
            guidance necessary to help you achieve weight loss and maintain it for life.
          </font>
        </p>
        <p>
          <font color="#49b1cc" size={4} face="arial">
            <b>
              What makes this program different? 
            </b>
          </font>
        </p>
        <p>
          <font size={4} face="arial">
            &nbsp;&nbsp;&nbsp;&nbsp;The tools that Dr. Gribbin utilizes to help you manage your weight are very different from what you might find with commercial programs. During the first consultation, Dr. Gribbin will get to know you : she<br />
            will obtain history of your weight fluctuations, will analyze previous weight loss programs which you participated in (if any), will get familiar with your past mediacal history (all medical conditions that you<br />
            have had), medications, social history and she will go over review of systems and lifestyle. 
            <b>
              The treatment plan and phases will be identified. Prelimnary and ultimate goals will be discussed.
            </b>
          </font>
        </p>
        <p>
          <font color="#49b1cc" size={4} face="arial">
            <b>
              Body composition is analyzed.&nbsp; 
            </b>
          </font>
          <font size={4} face="arial">
            An exact percentage of body fat, water, and muscle will be obtained. Based on this analysis, the appropriate program is designed individually for each patient.
          </font>
        </p>
        <p>
          <font size={4} face="arial">
            Throughout the program&nbsp;
            <font color="#49b1cc" face="arial">
              <b>
              your metabolism
              </b>
            </font>
            &nbsp;and&nbsp; 
            <font color="#49b1cc">
              <b>
                 body composition&nbsp;
              </b>
            </font>
            (mainly fat, water and muscle percentage) is used as a true indicator of the weight loss progress, something other plans can’t do.
          </font>
        </p>
        <p>
          <font color="#49b1cc" size={4} face="arial">
            <b>
              How does it work?
            </b>
          </font>
        </p>
        <p>
          <font size={4} face="arial">
            Dr Gribbin will guide you through different plans and will recommend the one that will best suit you, to work with you on an individual level.
          </font>
        </p>
        <p>
          <font size={4} face="arial">
            Behavioral counseling is a part of any plan you follow, which will teach you the skills necessary to maintain your weight loss for the long term.
          </font>
        </p>
        <p>
          <font size={4} face="arial">
            &nbsp;&nbsp;&nbsp;&nbsp;The program was created to acknowledge and treat the unique, very personal challenges every person looking to lose weight faces. Our belief is that because weight by its very nature is a medical issue, there<br />
            is no better person to help people achieve their weight loss goals than a medical <b>doctor</b>
          </font>
        </p>
        <p>
          <br />
        </p>
        <p>
          <font size={4} face="arial">
            90% of the patients who engage in the program are able to lose 16 pounds in 6 weeks and maintain body weight for at least one year.
          </font>
        </p>
        <p>
          <br /> 
        </p>
        <p>
          <font size={4} face="arial">
            The program elements include:
          </font></p><ul><font size={4} face="arial"> 
            <li>Low Calorie Diet and Vitamins and Food Supplementation</li>
            <li>Exercise Program</li>
            <li>Sleep and rest pattern analysis and improvement</li>
          </font></ul><font size={4} face="arial">
        </font>
        <p />
        <p>
          <br /> 
        </p>
        <p>
          <font size={4} face="arial">
            In order to maintain a healthy metabolism and optimal weight  we need to get into perfect balance of sleep, diet and exercise.
          </font>
        </p>
        <p>
          <font size={4} face="arial">
            Many medical conditions and lifestyle habits may disturb the perfect balance and cause weight gain as a result.
          </font>
        </p>
      </div>
);

const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "10px",
    paddingLeft: "30px"
  }
}));


export default function Components(props) {
  const classes = useStyles();
  const gridclasses = gridStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Dorota M. Gribbin M.D."
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/final.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Virtual Medical Weight Loss</h1>
                <h3 className={classes.subtitle}>
                  Diet - Vitamins/Food Supplementation<br/>Exercise<br/>Sleep 
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <Grid container className={gridclasses.root} spacing={5}>
          <Grid item xs={12}>
          {NewComponent}
          </Grid>
        </Grid>
      </div>

    </div>
  );
}
