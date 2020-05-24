import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/smitsboss.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

function MakeMedList() {
    return (

      <font size={2} face="arial">
        <table style={{width: '100%'}}>
          <tbody><tr>
              <td>Neck Pain</td>
              <td>Cervical Spondylolysis</td>
              <td>Cervical Strain/Sprain</td>
              <td>Thoracic Back Pain</td>
              <td>Upper Back Pain</td>
              <td>Lower Back Pain</td>
              <td>Sciatica</td>
            </tr>
            <tr>
              <td>Spinal Stenosis</td>
              <td>Disc Herniation</td>
              <td>Disc Degeneration</td>
              <td>Shoulder Pain</td>
              <td>Rotator Cuff Tear</td>
              <td>Osteoarthritis</td>
              <td>Knee Pain</td>
            </tr>
            <tr>
              <td>Meniscus Tear</td>
              <td>Anterior Cruciate Ligament Tear</td>
              <td>Patella Discloation</td>
              <td>Patellofemoral Joint Syndrome</td>
              <td>Bursitis</td>
              <td>Pes Anserine Bursitis</td>
              <td>Lateral Trocfemoral Hip Pain</td>
            </tr>
            <tr>
              <td>Hand Pain</td>
              <td>Hand Numbness and Migraine Headaches</td>
              <td>Botox Injections for Headaches</td>
              <td>Carpal Tunnel Syndrome</td>
              <td>Cubital Tunnel Syndrome</td>
              <td>Tarsal Tunnel Syndrome</td>
              <td>Plantar Fasciitis</td>
            </tr>
            <tr>
              <td>Ankle Pain</td>
              <td>Metatarsalgia</td>
              <td>Sacroiliac Joint Pain</td>
              <td>Coccyx Pain</td>
              <td>Coccidinia</td>
              <td>Fibromyalgia</td>
              <td>Myofascial Pain</td>
            </tr>
            <tr>
              <td>Spasticity</td>
              <td>Osteoporosis</td>
              <td>Gait Abnormality</td>
              <td>Trigger Points</td>
              <td>Tendonitis</td>
              <td>De Quervain's Tendonitis</td>
              <td>Trigger Finger</td>
            </tr>
            <tr>
              <td>Contusions</td>
              <td>Sprains</td>
              <td>Strains</td>
              <td>Sports Injuries</td>
              <td>Work-Related Injuries</td>
              <td>Motor Vehicle Accidents</td>
              <td>Medical Weight Loss</td>
            </tr>
            <tr>
              <td>Regenerative Medicine</td>
              <td>Aesthetic Medicine</td>
              <td>Botox Injections</td>
              <td>Skin Resurfacing</td>
              <td>Skin Tightening</td>
              <td>Treatment of Scars</td>
              <td>Cellulite Treatment and Non-surgical Liposuction</td>
            </tr>
          </tbody></table>
      </font>
    );
}

function title(){
  return (
    <h4>Dorota M. Gribbin, M.D. in Princeton, Mercerville and Monroe NJ.</h4>
  );
}

function Descriptions(){
  return(
    <div>
    <font face="arial">
    </font>
    <p>
      <font size={3} face="arial">
        &nbsp;&nbsp;&nbsp;&nbsp; ​​Clinical Assistant Professor of Physical Medicine and Rehabilitation at Columbia college of Physicians and 
        Surgeons, Department of Rehabilitation and Regenerative Medicine. Dr. Gribbin is board certified in Physical
        Medicine and Rehabilitation and a Section Chairman of Physical Medicine and Rehabilitation at Robert
        Wood Johnson University Hospital at Hamilton (Hamilton, NJ).
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp; She is a Clinical Assistant Professor of Physical Medicine and Rehabilitation at New York Presbyterian
        Hospital, Columbia University Campus in New York. She was named one of the Best Physicians in Mercer
        County for 16 consecutive years (1999 to 2015) in the Castle Connolly Guide to the Best Physicians in the
        New York Metropolitan Area.
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp; Dr. Gribbin specializes in the diagnoses, treatment and prevention of a wide variety of musculoskeletal disorders. These include back pain and
        neck pain (spine medicine), entrapment neuropathies, radiculopathies, fibromyalgia, myofascial pain syndromes, osteoarthritis, osteoporosis,
        connective tissue diseases and post-traumatic conditions, sports medicine, pain treatment/management, regenerative medicine, anti-aging
        medicine, aesthetic medicine and medical weight loss. Diagnostic studies done in the office include electromyography and nerve conduction
        studies (EMG/NCV) to diagnose entrapment neuropathies (carpal tunnel syndrome, ulnar &amp; radial nerves entrapment, tarsal tunnel syndrome,
        meralgia paresthetica). P/VNG to diagnose peripheral and central vestibular dysfunction are performed in the office, which are treated with
        vestibular rehabilitation available on site.
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp; Treatment includes patient education, physical therapy, hand therapy, pharmacological media and interventional procedures such as trigger
        point injections, peripheral nerve blocks and intra-articular injections-with ultrasound guidance. Epidural blocks and lateral facet blocks area
        done in the office under fluoroscopic guidance.
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp; Dr. Gribbin has particular expertise in spine medicine, interventional spine treatment procedures, sports medicine and regenerative medicine.
        Her expertise in cancer rehabilitation is based on her training at Memorial-Sloan Kettering Cancer Center. This includes treatment of
        polyneuropathies, lymphaedema and chronic pain. Manual and mechanical drainage of lymphaedema is available on site. Spastic disorders,
        such as hemiparesis, multiple sclerosis or cerebral palsy, may be treated with pharmacological agents (including Botox injections), Physical
        modalities, and orthotic devices and splinting. Painful conditions associated with pregnancy and postpartum conditions (carpal tunnel
        syndrome, meralgia parasthetica, back pain, coccydynia, migraine headaches and neck pain) are addressed with minimally invasive
        modalities.
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp; She specializes in treatment without surgery and avoiding unnecessary steroid injections (unneccesary corticosteroids, cortisone). trigger point injections are performed with normal saline, sterile water or platelets rich plasma. Botox injections are used for treatment of chronic migraine headaches. The goal is to provide highly effective treatment with no side effects. Physical Therapy (exercise, massage, myofascial release, manual therapy, physical modalities and cryothreapy) is available on site.
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp; Most of the procedures are performed in our offices on an outpatient basis.
      </font>
    </p></div>
  );
}

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        href=""
        brand="Virtual Medical Weight Loss"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/ocean.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Dorota M. Gribbin, M.D.</h3>
                    <h6>Specializes in Physical Medicine and Rehabilitation</h6>
                    <Button href="https://www.youtube.com/channel/UC-Rr92C_hXeQPlkPkwKBYPA" justIcon link className={classes.margin5}>
                      <i className={"fab fa-youtube"} />
                    </Button>
                    <Button href="https://www.facebook.com/estheticregenerativeantiagingmedicine/" justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                    <Button href="https://www.instagram.com/drgribbin_dgline/" justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              {MakeMedList()}
            </div>
            <div className={classes.description}>
              {title()}
            </div>
            <div className={classes.description2}>
              {Descriptions()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
