import React from 'react';
import "../../Assest/css/TopHiringCompanies.css";

// Import your logos
import CapgeminiLogo from "../../Assest/Img/CapgeminiLogo.png";
import JioLogo from "../../Assest/Img/JioLogo.png";
import ICICILogo from "../../Assest/Img/ICICILogo.jpg"; 
import SopraSteriaLogo from "../../Assest/Img/SopraSteriaLogo.jpeg";
import KotakLogo from "../../Assest/Img/Kotak.png";
import NTTDataLogo from "../../Assest/Img/NTTDataLogo.png";
import RelianceLogo from "../../Assest/Img/Reliance.jpeg";
import HPLogo from "../../Assest/Img/HPLogo.png";
import TechMahindraLogo from "../../Assest/Img/TechMahindraLogo.jpeg";
import SBILifeLogo from "../../Assest/Img/zoho.png";
import LTIMindtreeLogo from "../../Assest/Img/LTIMindtree.png";
import zoho from "../../Assest/Img/zoho.png";

const TopHiringCompanies = () => {
  return (
    <div className="top-hiring-companies">
      <h2>Top Hiring Companies</h2>
      <div className="logos">
        <img src={CapgeminiLogo} alt="Capgemini" />
        <img src={JioLogo} alt="Jio" />
        <img src={ICICILogo} alt="ICICI Bank" />
        <img src={SopraSteriaLogo} alt="Sopra Steria" />
        <img src={KotakLogo} alt="Kotak" />
        <img src={NTTDataLogo} alt="NTT Data" />
        <img src={RelianceLogo} alt="Reliance" />
        <img src={HPLogo} alt="Hewlett Packard Enterprise" />
        <img src={TechMahindraLogo} alt="Tech Mahindra" />
        <img src={SBILifeLogo} alt="SBI Life Insurance" />
        <img src={LTIMindtreeLogo} alt="LTI Mindtree" />
      </div>
      <a href="#view-all" className="view-all">View All</a>
    </div>
  );
};

export default TopHiringCompanies;
