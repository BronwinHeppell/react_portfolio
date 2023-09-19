import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import meter from "../assets/img/meter.png";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>My proficiency level in various skills</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <div className="round-image-container">
                    <img src={meter} alt="Round" className="round-image" />
                    <div className="centered-text">
                      <h5>70%</h5>
                    </div>
                  </div>
                  <h5>ReactJs</h5>
                </div>
                <div className="item">
                  <div className="round-image-container">
                    <img src={meter} alt="Round" className="round-image" />
                    <div className="centered-text">
                      <h5>65%</h5>
                    </div>
                  </div>
                  <h5>VueJs</h5>
                </div>
                <div className="item">
                  <div className="round-image-container">
                    <img src={meter} alt="Round" className="round-image" />
                    <div className="centered-text">
                      <h5>70%</h5>
                    </div>
                  </div>
                  <h5>NodeJs</h5>
                </div>
                <div className="item">
                  <div className="round-image-container">
                    <img src={meter} alt="Round" className="round-image" />
                    <div className="centered-text">
                      <h5>80%</h5>
                    </div>
                  </div>
                  <h5>C#</h5>
                </div>
                <div className="item">
                  <div className="round-image-container">
                    <img src={meter} alt="Round" className="round-image" />
                    <div className="centered-text">
                      <h5>80%</h5>
                    </div>
                  </div>
                  <h5>ASP.Net</h5>
                </div>
                <div className="item">
                  <div className="round-image-container">
                    <img src={meter} alt="Round" className="round-image" />
                    <div className="centered-text">
                      <h5>90%</h5>
                    </div>
                  </div>
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <div className="round-image-container">
                    <img src={meter} alt="Round" className="round-image" />
                    <div className="centered-text">
                      <h5>80%</h5>
                    </div>
                  </div>
                  <h5>MongoDB</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
