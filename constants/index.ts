import responsive from '../public/assets/responsive-website.png'
import ai_web from '../public/assets/automated-AI.jpg'
import user from "../public/usertesting.jpg";
import inspection from "../public/inspection.png";
import audit from "../public/auditing.png";

export const pages = {
  home: {
    title: "AccessiNor AS",
    home_intor: "Web Accessibility Checker",
    home_desc:
      "Welcome to our Web Accessibility Checker! We believe in creating an inclusive digital world, where everyone, regardless of their abilities, can access and navigate the web effortlessly. With our AI-integrated accessibility checker, we make it easy for you to ensure your website meets the highest accessibility standards.",
    img: responsive,
    about_desc: "AccessiNor is proud to introduce our primary offering, a comprehensive web accessibility checker. This innovative product has been carefully designed to assist website owners and developers in ensuring compliance with both web accessibility standards and the stringent regulations set by the Norwegian government. Our web accessibility checker goes beyond standard compliance checks by incorporating user experience and design considerations, with the ultimate aim of making the web more inclusive for all users"
  },
  AI_intro: {
    name: "Automated Accuracy Intelligence",
    title: "AI Integration for Effortless Accessibility",
    desc1: "Our website accessibility checker leverages the power of Artificial Intelligence to streamline the process of identifying and rectifying accessibility issues. With cutting-edge AI algorithms, we can quickly scan your website for potential barriers, and our intuitive reports provide clear, actionable insights. Millions of people with disabilities rely on assistive technologies to access the web, and your efforts can make a significant difference in their lives.",
    img: ai_web,
  },
};

export const serciser = [
  {
    name: "User Testing",
    desc: "Website is not just compliant but truly user-friendly by involving actual users with disabilities",
    descfull: "Dive deep into real user experiences. We provide thorough user testing to ensure your website is not just compliant but truly user-friendly. By involving actual users with disabilities, we ensure that your website's accessibility extends beyond just ticking checkboxes.",
    img: user,
    alt: "User testing with assistive technology",
  },
  {
    name: "Inspection",
    desc: "Our tools scan and inspect your website, pinpointing areas that need accessibility improvements",
    descfull: "Harness the power of advanced technology. Our tools scan and inspect your website, pinpointing areas that need accessibility improvements. With our scanning service, nothing slips through the cracks.",
    img: inspection,
    alt: "Website and code inspection",
  },
  {
    name: "Auditing",
    desc: "With our in-depth auditing service, we provide actionable feedback and counsel",
    descfull: "Elevate your web accessibility game. With our in-depth auditing service, we provide actionable feedback and counsel you on the best practices, ensuring that your site remains accessible for everyone, everywhere.",
    img: audit,
    alt: "Team analyzing website data",
  },
];