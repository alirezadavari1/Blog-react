import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('ارسال');

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("درحال ارسال ...");

    setTimeout(() => {
      alert("اطلاعات شما با موفقیت ارسال شد!");
      setFormDetails(formInitialDetails);
      setButtonText("ارسال");
      window.location.reload();
    }, 2000); // بعد از ۲ ثانیه صفحه رفرش می‌شود
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2 dir="rtl">ارتباط با من</h2>
                <form onSubmit={handleSubmit}>
                  <Row dir="rtl">
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="نام" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="نام خانوادگی" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="آدرس ایمیل" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input dir="rtl" type="tel" value={formDetails.phone} placeholder="شماره تلفن" 
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^\d{0,11}$/.test(value)) { 
                            onFormUpdate('phone', value);
                          }
                        }}
                      />
                    </Col>

                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="متن درخواستی شما" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
  