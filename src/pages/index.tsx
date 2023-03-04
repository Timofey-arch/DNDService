import React, { useEffect } from "react";
import NavPanel from "../../components/Desktop/MainPage/NavPanel";
import MainSection from "../../components/Desktop/MainPage/MainSection";
import Footer from "components/Desktop/MainPage/Footer";

export default function Home() {
  
  useEffect(
    () => {
      document.title = 'Main';
    }
  );

  return (
    <>
      <NavPanel></NavPanel>
      <MainSection></MainSection>
      <Footer></Footer>
    </>
  );
}

