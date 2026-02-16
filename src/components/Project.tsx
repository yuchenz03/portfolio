import React from "react";
import swimjournal from "../assets/images/swimjournal.jpg";
import cmubulletin from "../assets/images/cmubulletin.jpg";
import bias_lens from "../assets/images/bias_lens.jpg";
import "../assets/styles/Project.scss";

type ProjectItem = {
  title: string;
  description: string;
  img: string;
  href?: string; // optional for projects without a public link
  cta?: string;
};

function Project() {
  // Projects pulled from your resume :contentReference[oaicite:0]{index=0}
  const projects: ProjectItem[] = [
    {
      title: "The Bias Lens",
      href: "https://github.com/laasyaaki/steelhacks25",
      cta: "View on GitHub",
      img: bias_lens,
      description:
        "Proudly a 3x winner at SteelHacks XII — Best Use of Gemini API, Women in CS Award, and 3rd Place in Product Design!! \n The Bias Lens is a web app that analyzes medical research papers for gender bias from a link or uploaded document. It generates a bias score and highlights gaps in representation, analysis, methodology, and conclusions. \n We built it to address a critical gap in medicine: studies often underrepresent certain populations, yet their findings guide care for all patients. By making bias detection fast and accessible, The Bias Lens helps clinicians and researchers quickly evaluate the data behind important medical decisions.",
    },
    {
      title: "CMU Bulletin (ScottyLabs)",
      href: "https://cmubulletin.com",
      cta: "Check it out!",
      img: cmubulletin,
      description:
        "CMU Bulletin is a centralized digital event platform that modernizes how students discover what's happening on campus. My co-founder, Hana Benko, and I built it out of frustration with messy, outdated physical bulletin boards and overly logistics-focused platforms like TartanConnect that don't prioritize discovery. CMU Bulletin is a clean, searchable digital space that combines the best of both worlds: organizations can post and advertize events, students can filter by interest, and outdated posts are automatically regulated.",
    },
    {
      title: "The Swim Journal",
      href: "https://github.com/yuchenz03/TheSwimJournal",
      cta: "View on GitHub",
      img: swimjournal,
      description:
        "My first large-scale project! The Swim Journal is a specialized digital sports journal built for competitive swimmers and coaches. Existing digital sports journals don't have a structure that is friendly and usable to competitive swimming, which has a lot of sport-specific jargon and workouts, and paper journalling is long outdated. This web app demonstrates a swim-focused system for logging workouts, tracking time trials, monitoring strength sessions, and recording performance metrics. By combining athlete reflections with coach insights, the platform enables smarter, data-driven decisions throughout a season. ",
    },
  ];

  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project" key={p.title}>
            {p.href ? (
              <a href={p.href} target="_blank" rel="noreferrer">
                <img
                  src={p.img}
                  className="zoom"
                  alt={`${p.title} thumbnail`}
                  width="100%"
                />
              </a>
            ) : (
              <img
                src={p.img}
                className="zoom"
                alt={`${p.title} thumbnail`}
                width="100%"
              />
            )}

            {p.href ? (
              <a href={p.href} target="_blank" rel="noreferrer">
                <h2>{p.title}</h2>
              </a>
            ) : (
              <h2>{p.title}</h2>
            )}

            <p>{p.description}</p>

            {p.href && p.cta ? (
              <a href={p.href} target="_blank" rel="noreferrer">
                <p style={{ marginTop: 8 }}>{p.cta} →</p>
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
