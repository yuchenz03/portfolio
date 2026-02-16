import React from "react";
import "../assets/styles/Contact.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  const email = "yuchenzhou2006@gmail.com"; // change if needed
  const linkedinUrl = "https://www.linkedin.com/in/yuchen-zhou-58289a247/"; // TODO: replace
  const githubUrl = "https://github.com/yuchenz03"; // TODO: replace
  const resumeUrl =
    "https://drive.google.com/file/d/1RsqGCqajNlHge06aBUIBZXNlE-xTjTSK/view?usp=sharing"; // put resume.pdf in /public OR replace with a Google Drive link

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me!</h1>
          <div className="contact_links">
            <a
              className="contact_link"
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon fontSize="large" />
              <span>LinkedIn</span>
            </a>

            <a
              className="contact_link"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon fontSize="large" />
              <span>GitHub</span>
            </a>

            <a
              className="contact_link"
              href={`mailto:${email}`}
              aria-label="Email"
            >
              <EmailIcon fontSize="large" />
              <span>{email}</span>
            </a>
            <a
              className="contact_link"
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
            >
              <DescriptionIcon fontSize="large" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
