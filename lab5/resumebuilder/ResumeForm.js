import React, { useState } from 'react';
import './App.css';

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    professionalSummary: '',
    education: {
      tenthGrade: false,
      tenthGradeScore: '',
      twelfthGrade: false,
      twelfthGradeScore: '',
      graduation: false,
      graduationScore: '',
    },
    skills: '',
    careerObjective: '',
    experience: '',
    achievements: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      education: {
        ...formData.education,
        [name]: checked,
      },
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleScoreChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      education: {
        ...formData.education,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const renderResume = () => (
    <div className="resume-display">
      <h2>{formData.name}'s Resume</h2>
      <h3>Professional Summary</h3>
      <p>{formData.professionalSummary}</p>

      <h3>Education Qualifications</h3>
      <ul>
        {formData.education.tenthGrade && (
          <li>10th Grade - Score: {formData.education.tenthGradeScore}</li>
        )}
        {formData.education.twelfthGrade && (
          <li>12th Grade - Score: {formData.education.twelfthGradeScore}</li>
        )}
        {formData.education.graduation && (
          <li>Graduation - Score: {formData.education.graduationScore}</li>
        )}
      </ul>

      <h3>Skills</h3>
      <p>{formData.skills}</p>

      <h3>Career Objective</h3>
      <p>{formData.careerObjective}</p>

      <h3>Experience and Internships</h3>
      <p>{formData.experience}</p>

      <h3>Skills and Achievements</h3>
      <p>{formData.achievements}</p>
    </div>
  );

  return (
    <div className="resume-form-container">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Professional Summary */}
          <div className="form-group">
            <label>Professional Summary:</label>
            <textarea
              name="professionalSummary"
              value={formData.professionalSummary}
              onChange={handleChange}
              rows="4"
              placeholder="Summarize your professional experience..."
              required
            />
          </div>

          {/* Education Qualifications with Checkboxes and Scores */}
          <div className="form-group">
            <label>Education Qualifications:</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="tenthGrade"
                  checked={formData.education.tenthGrade}
                  onChange={handleCheckboxChange}
                />
                10th Grade
              </label>
              {formData.education.tenthGrade && (
                <input
                  type="text"
                  name="tenthGradeScore"
                  value={formData.education.tenthGradeScore}
                  onChange={handleScoreChange}
                  placeholder="Enter your 10th Grade score"
                  required
                />
              )}

              <label>
                <input
                  type="checkbox"
                  name="twelfthGrade"
                  checked={formData.education.twelfthGrade}
                  onChange={handleCheckboxChange}
                />
                12th Grade
              </label>
              {formData.education.twelfthGrade && (
                <input
                  type="text"
                  name="twelfthGradeScore"
                  value={formData.education.twelfthGradeScore}
                  onChange={handleScoreChange}
                  placeholder="Enter your 12th Grade score"
                  required
                />
              )}

              <label>
                <input
                  type="checkbox"
                  name="graduation"
                  checked={formData.education.graduation}
                  onChange={handleCheckboxChange}
                />
                Graduation
              </label>
              {formData.education.graduation && (
                <input
                  type="text"
                  name="graduationScore"
                  value={formData.education.graduationScore}
                  onChange={handleScoreChange}
                  placeholder="Enter your Graduation score"
                  required
                />
              )}
            </div>
          </div>

          {/* Skills */}
          <div className="form-group">
            <label>Academic and Non-Academic Skills:</label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              rows="3"
              placeholder="List your skills..."
              required
            />
          </div>

          {/* Career Objective with Dropdown */}
          <div className="form-group">
            <label>Career Objective:</label>
            <select
              name="careerObjective"
              value={formData.careerObjective}
              onChange={handleChange}
              className="dropdown"
              required
            >
              <option value="" disabled>Select your career objective...</option>
              <option value="Masters">Masters</option>
              <option value="MS">MS</option>
              <option value="PhD">PhD</option>
              <option value="Job">Job</option>
              <option value="Entrepreneurship">Entrepreneurship</option>
            </select>
          </div>

          {/* Experience and Internships */}
          <div className="form-group">
            <label>Experience and Internships:</label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              rows="4"
              placeholder="Enter details of your experience and internships..."
              required
            />
          </div>

          {/* Skills and Achievements */}
          <div className="form-group">
            <label>Skills and Achievements:</label>
            <textarea
              name="achievements"
              value={formData.achievements}
              onChange={handleChange}
              rows="3"
              placeholder="List your key achievements..."
              required
            />
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      ) : (
        renderResume()
      )}
    </div>
  );
};

export default ResumeForm;
