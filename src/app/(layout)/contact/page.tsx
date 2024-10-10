import ContactForm from "@/components/contact/form/Form";
import Advantages from "@/components/feature/advantages/Advantages";
import Hero from "@/components/feature/hero/Hero";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Hero title="Contact" />
      <ContactForm />
      <Advantages />
    </div>
  );
};

export default Contact;
