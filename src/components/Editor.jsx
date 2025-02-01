import React, { useState } from "react";

const Editor = ({ formData, handleInputChange, addItem }) => {
  const [experience, setExperience] = useState({
    institution: "",
    startDate: "",
    endDate: "",
  });
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    year: "",
  });
  const [skill, setSkill] = useState("");
  const [project, setProject] = useState({ title: "", description: "" });
  const [social, setSocial] = useState({ platform: "", link: "" });

  return (
    <div className="min-w-[50vw] text-left m-[1rem] justify-center items-center overflow-auto">
      <div className="p-[1rem] flex flex-col">
        {/* Basic Information */}
        <form className="info-section">
          <p className="text-3xl">Basic Information</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Address"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
        </form>

        {/* Social Media Links */}
        <form className="info-section">
          <p className="text-3xl">Socials</p>
          <input
            type="text"
            placeholder="Platform (e.g., LinkedIn, Twitter)"
            value={social.platform}
            onChange={(e) => setSocial({ ...social, platform: e.target.value })}
          />
          <input
            type="text"
            placeholder="Profile Link"
            value={social.link}
            onChange={(e) => setSocial({ ...social, link: e.target.value })}
          />
          <button type="button" onClick={() => addItem("socials", social)}>
            Add Social
          </button>
        </form>

        {/* Experience */}
        <form className="info-section">
          <p className="text-3xl">Experience</p>
          <input
            type="text"
            placeholder="Institution"
            value={experience.institution}
            onChange={(e) =>
              setExperience({ ...experience, institution: e.target.value })
            }
          />
          <input
            type="date"
            value={experience.startDate}
            onChange={(e) =>
              setExperience({ ...experience, startDate: e.target.value })
            }
          />
          <input
            type="date"
            value={experience.endDate}
            onChange={(e) =>
              setExperience({ ...experience, endDate: e.target.value })
            }
          />
          <button
            type="button"
            onClick={() => addItem("experience", experience)}
          >
            Add Experience
          </button>
        </form>

        {/* Education */}
        <form className="info-section">
          <p className="text-3xl">Education</p>
          <input
            type="text"
            placeholder="School"
            value={education.school}
            onChange={(e) =>
              setEducation({ ...education, school: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Degree"
            value={education.degree}
            onChange={(e) =>
              setEducation({ ...education, degree: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Year"
            value={education.year}
            onChange={(e) =>
              setEducation({ ...education, year: e.target.value })
            }
          />
          <button type="button" onClick={() => addItem("education", education)}>
            Add Education
          </button>
        </form>

        {/* Skills */}
        <form className="info-section">
          <p className="text-3xl">Skills</p>
          <input
            type="text"
            placeholder="Skill"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />
          <button type="button" onClick={() => addItem("skills", skill)}>
            Add Skill
          </button>
        </form>

        {/* Projects */}
        <form className="info-section">
          <p className="text-3xl">Projects</p>
          <input
            type="text"
            placeholder="Project Title"
            value={project.title}
            onChange={(e) => setProject({ ...project, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Project Description"
            value={project.description}
            onChange={(e) =>
              setProject({ ...project, description: e.target.value })
            }
          />
          <button type="button" onClick={() => addItem("projects", project)}>
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default Editor;
