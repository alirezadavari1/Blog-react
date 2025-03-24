
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
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
                        <h2>مهارت ها</h2>
                        <p>در اینجا به چند تا از زبان های برنامه نویسی که من در انها مهارت دارم می پردازیم<br></br>در اینجا مهارت ها را به صورت درصد نوشته(در حدی که تا به الان یاد گرفته ام) </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                        <div className="progress-circle">
                        <div className="hs">
                          <div className="mask full">
                            <div className="fill"></div>
                          </div>
                          <div className="mask half">
                            <div className="fill"></div>
                          </div>
                          <div className="inside-circle">98%</div>
                        </div>
                        <h5>Html & Css</h5>
                      </div>



                      <div className="progress-circle">
                        <div className="circle">
                          <div className="mask full">
                            <div className="fill"></div>
                          </div>
                          <div className="mask half">
                            <div className="fill"></div>
                          </div>
                          <div className="inside-circle">82%</div>
                        </div>
                        <h5>React</h5>
                      </div>




                      <div className="progress-circle">
                        <div className="bt">
                          <div className="mask full">
                            <div className="fill"></div>
                          </div>
                          <div className="mask half">
                            <div className="fill"></div>
                          </div>
                          <div className="inside-circle">77%</div>
                        </div>
                        <h5>Bootstrap & Tailwind</h5>
                      </div>


                      <div className="progress-circle">
                        <div className="js">
                          <div className="mask full">
                            <div className="fill"></div>
                          </div>
                          <div className="mask half">
                            <div className="fill"></div>
                          </div>
                          <div className="inside-circle">80%</div>
                        </div>
                        <h5>Js</h5>
                      </div>

                      
                      <div className="progress-circle">
                        <div className="do">
                          <div className="mask full">
                            <div className="fill"></div>
                          </div>
                          <div className="mask half">
                            <div className="fill"></div>
                          </div>
                          <div className="inside-circle">50%</div>
                        </div>
                        <h5>Docker</h5>
                      </div>

                         
                      <div className="progress-circle">
                        <div className="gi">
                          <div className="mask full">
                            <div className="fill"></div>
                          </div>
                          <div className="mask half">
                            <div className="fill"></div>
                          </div>
                          <div className="inside-circle">99%</div>
                        </div>
                        <h5>Github</h5>
                      </div>

   
                      <div className="progress-circle">
                        <div className="sa">
                          <div className="mask full">
                            <div className="fill"></div>
                          </div>
                          <div className="mask half">
                            <div className="fill"></div>
                          </div>
                          <div className="inside-circle">85%</div>
                        </div>
                        <h5>Sass</h5>
                      </div>
 
 
                      <div className="progress-circle">
                        <div className="re">
                          <div className="mask full">
                            <div className="fill"></div>
                          </div>
                          <div className="mask half">
                            <div className="fill"></div>
                          </div>
                          <div className="inside-circle">70%</div>
                        </div>
                        <h5>Redux</h5>
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
