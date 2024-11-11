import AboutSection from "./Components/AboutSection";
import Card from "./Components/Card";
import CardSection from "./Components/CardSection";
import ContactUs from "./Components/ContactUs";
import Feedbacks from "./Components/Feedbacks";
import Hero from "./Components/Hero";
import LogoTypes from "./Components/LogoTypes";
import ProposalSection from "./Components/ProposalSection";
import Services from "./Components/Services";
import Team from "./Components/Team";


export default function Home() {
  return (
    
    <>
    <Hero/>
    <LogoTypes/>
    <Services link="#Services" msg={"At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"} title={"Services"}/>
    <CardSection/>
    <ProposalSection/>
    <Services link="#About" msg={"Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"} title={"Case Studies"}/>
    <AboutSection/>
    <Services link="#Cards" msg={"Step-by-Step Guide to Achieving Your Business Goals"} title={"Our Working"}/>
    <Card/>
    <Team/>
    <Services link="#Feedback" msg={"Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"} title={"Testimonials"}/>
    <Feedbacks/>
    <Services link="#ContactUs" title="Contact Us" msg="Connect with Us : Lets Discuss Your Digital Marketing Needs."/>
    <ContactUs/>
    </>
  );
}
