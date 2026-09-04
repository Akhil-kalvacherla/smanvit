import heroImage from "./Hero_image.png";
import heroSectionImg from "./herosection_lmg.png";
import charmainImg from "./charmain_img.png";
import heroArtwork from "./heroArtwork.png";
import itServices from "./itServices.png";
import digitalMarketing from "./digitalMarketing.png";
import questions from "./questions.png";
import logo from "./logo.jpg";
import vectorBg from "./Vector.jpg";

import businessMission from "./Business mission-amico 1.jpg";
import businessVision from "./Business mission-bro 1.jpg";
import teamWork from "./Team work-rafiki 1.jpg";
import atTheOffice from "./At the office-amico 1.png";

import landingPage from "./Landing page-rafiki 1.jpg";
import appDevelopment from "./App development-rafiki 1.jpg";
import digitalPresentation from "./Digital presentation-bro 1.jpg";
import cloudHosting from "./Cloud hosting-amico 1.jpg";
import security from "./Security-amico 1.jpg";
import qaEngineers from "./QA engineers-rafiki 1.jpg";
import activeSupport from "./Active Support-rafiki 1.jpg";
import profiling from "./Profiling-pana 1.jpg";

import capabilityConsulting from "./image 93.png";
import capabilityEngineering from "./image 92.jpg";
import capabilityAi from "./image 91.jpg";
import capabilityCloud from "./image 90.jpg";
import capabilitySecurity from "./image 89.jpg";
import capabilityMarketing from "./image 88.jpg";
import capabilityGcc from "./image 87.jpg";
import capabilityBpo from "./image 86.jpg";

export const assets = {
  heroImage,
  heroSectionImg,
  charmainImg,
  heroArtwork,
  itServices,
  digitalMarketing,
  questions,
  logo,
  vectorBg,
  about: {
    mission: businessMission,
    vision: businessVision,
    teamWork,
    atTheOffice,
  },
  itServicesPage: {
    webDevelopment: landingPage,
    mobileDevelopment: appDevelopment,
    aiMl: digitalPresentation,
    hosting: cloudHosting,
    cloud: cloudHosting,
    cybersecurity: security,
    qa: qaEngineers,
    bpo: activeSupport,
    gcc: atTheOffice,
    staffing: profiling,
  },
  capabilitiesPage: {
    consulting: capabilityConsulting,
    engineering: capabilityEngineering,
    ai: capabilityAi,
    cloud: capabilityCloud,
    security: capabilitySecurity,
    marketing: capabilityMarketing,
    gcc: capabilityGcc,
    bpo: capabilityBpo,
  },
} as const;
