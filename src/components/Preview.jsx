import React from "react";

const Preview = ({ formData }) => {
  return (
    <div className="min-w-[50vw] bg-gray-100 shadow-lg p-6 rounded-lg m-5 overflow-y-auto max-h-[80vh]">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Resume Preview</h2>

      {/* Basic Info */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700">{formData.name}</h3>
        <p className="text-gray-600">{formData.address}</p>
        <p className="text-gray-600">{formData.phone}</p>
        <p className="text-gray-600">{formData.email}</p>
      </div>

      {/* Professional Summary */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-700">
          Professional Summary
        </h3>
        <p className="text-gray-600">{formData.summary}</p>
      </div>

      {/* Experience */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-700">Work Experience</h3>
        {formData.experience.map((exp, index) => (
          <p key={index} className="text-gray-600">
            {exp}
          </p>
        ))}
      </div>

      {/* Education */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-700">Education</h3>
        {formData.education.map((edu, index) => (
          <p key={index} className="text-gray-600">
            {edu}
          </p>
        ))}
      </div>

      {/* Skills */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-700">Skills</h3>
        <p className="text-gray-600">{formData.skills.join(", ")}</p>
      </div>
    </div>
  );
};

export default Preview;
