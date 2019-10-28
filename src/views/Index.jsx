import React from "react";

// index page sections
import Heading from "../views/alter2/Heading.jsx";
//import Palette from "./index/Palette.jsx";
import FeaturesCard from "../views/alter1/FeaturesCard.jsx";
import Proposal from "../views/alter1/Proposal.jsx";
import WhyUs from "../views/shared/WhyUs.jsx";
import Faqs from "../views/shared/Faqs.jsx";
//import Selection from "./index/Selection.jsx";
//import Themeable from "./index/Themeable.jsx";
import Nwyneed from "./index/Nwyneed.jsx";
import GetStarted from "./index/GetStarted.jsx";
import Footer from "./index/Footer.jsx";

//Core components
import DefaultNavbar from "../components/Navbars/DefaultNavbar.jsx";

//import "assets/sass/laapp.scss";
import "assets/sass/demo.scss";

class Index extends React.Component {
  render() {
    return (
      <>
      <DefaultNavbar />
        <main ref="main">
          <Heading />
          <FeaturesCard />
          <Proposal />
          <WhyUs />
          <Faqs />
          <Nwyneed />
          <GetStarted />
        </main>

        <Footer />
      </>
    );
  }
}

export default Index;
