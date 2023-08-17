import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services bg-services">
      <h2 className="services-h2">Our Services</h2>
      <p className="services-p">
        We offer a range of fitness services to cater to your needs and help you
        achieve your fitness goals. Our team of experts is here to support you
        every step of the way.
      </p>
      <h3 className="services-h3">Personal Training</h3>
      <p className="services-p">
        Our certified personal trainers will create customized workout plans
        tailored to your goals, ensuring you get the most out of your training
        sessions.
      </p>
      <h3 className="services-h3">Group Classes</h3>
      <p className="services-p">
        Join our group fitness classes led by experienced instructors. Whether
        you're into cardio, strength training, or yoga, we have a class for you.
      </p>
      <h3 className="services-h3">Nutritional Guidance</h3>
      <p className="services-p">
        Achieving your fitness goals goes hand in hand with proper nutrition.
        Our nutritionists will provide guidance to help you maintain a balanced
        diet.
      </p>
    </div>
  );
}

export default Services;
