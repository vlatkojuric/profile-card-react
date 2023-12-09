import "./App.css";
import React from "react";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
    id: 1,
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
    id: 2,
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
    id: 3,
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
    id: 4,
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
    id: 5,
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
    id: 6,
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro name="Vlatko Juric" />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img
        src="https://media.npr.org/assets/img/2017/09/12/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8-s1100-c50.jpg"
        alt="avatar"
        className="avatar"
      />
    </div>
  );
}

function Intro({ name }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, harum
        velit earum itaque dolor veritatis consectetur dignissimos ex ipsam ad
        alias, laboriosam illum et! In distinctio itaque earum aspernatur
        temporibus.
      </p>
    </div>
  );
}

function SkillList() {
  const skillData = skills;
  return (
    <div className="skill-list">
      {skillData.map((skill) => (
        <Skill
          skillObject={skill}
          // skilly={skill.skill}
          // color={skill.color}
          // emoji={skill.level}
          // key={skill.id}
        />
      ))}
    </div>
  );
}

function Skill({ skillObject }) {
  console.log(skillObject);
  return (
    <div className="skill" style={{ backgroundColor: skillObject.color }}>
      <span>{skillObject.skill}</span>
      <span>
        {skillObject.level === "beginner" && "👶"}
        {skillObject.level === "advanced" && "👊"}
        {skillObject.level === "intermediate" && "💪"}
      </span>
    </div>
  );
}
export default App;
