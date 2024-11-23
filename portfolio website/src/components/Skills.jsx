import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import CSS from "../assets/img/css.svg";
import html from "../assets/img/html.svg";
import Java from "../assets/img/java.svg";
import JavaScript from "../assets/img/javascript.svg";
import mongodb from "../assets/img/mongodb.svg";
import mysql from "../assets/img/mysql.svg";
import node from "../assets/img/node.svg";
import reactjs from "../assets/img/react.svg";
import Tailwind from "../assets/img/tailwind.svg";
import VScode from "../assets/img/vscode.svg";




export default function Skills(){
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <br></br><br></br> <br></br><br></br> 
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5>NodeJs</h5>
                            </div>
                            <div className="item">
                                <img src={reactjs} alt="Image" />
                                <br></br>
                                <h5>ReactJs</h5>
                            </div>
                            <div className="item">
                                <img src={JavaScript} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>Html</h5>
                            </div>
                            <div className="item">
                                <img src={CSS} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={Tailwind} alt="Image" />
                                <h5>Tailwind</h5>
                            </div>
                            <div className="item">
                                <img src={Java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Image" />
                                <h5>MySql</h5>
                            </div>
                            <div className="item">
                                <img src={VScode} alt="Image" />
                                <h5>VSCode</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}