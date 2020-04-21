import React, { useState } from "react";
import { A4Paper } from "../Components";
import InputLabel from "../Components/InputLabel/InputLabel";
import { MdDeleteForever } from "react-icons/md";
function TemplateBasic() {
  const [skillsArray, setSkillsArray] = useState([""]);
  const [awardsArray, setAwardsArray] = useState([
    {
      company: "",
      reason: "",
      year: "",
    },
  ]);
  const [experience, setExperience] = useState([""]);
  const [educationArray, setEducationArray] = useState([
    {
      college: "",
      degree: "",
      year: "",
      percentage: "",
    },
  ]);
  console.log("re-render");
  return (
    <div className="template-basic__wrapper container">
      <A4Paper>
        <div className="left__section">
          <div className="heading">
            <div className="heading-name">
              <InputLabel className="heading-name__input" placeholder="Name" />
            </div>
            <div className="heading-position">
              <InputLabel className="heading-position__input" placeholder="Designation " />
            </div>
          </div>
          <div className="left__section-bottom">
            <div className="contact">
              <h3>Contact</h3>
              <InputLabel className="contact-details" placeholder="Mobile" />
              <InputLabel className="contact-details" placeholder="E-Mail" />
            </div>
            <div className="profile">
              <h3>Profile</h3>
              <InputLabel className="profile-summary" placeholder="Summary about your carrier" />
            </div>
            <div className="skills">
              <h3>Skills</h3>
              <div className="add__button-generic" onClick={() => setSkillsArray((prev) => [...prev, ""])}>
                Add Skills
              </div>
              {skillsArray.map((el, index) => (
                <div className="d-flex justify-content-start skill">
                  <span className="circle"></span>
                  <InputLabel
                    className="profile-summary"
                    placeholder={`Skill#${index + 1}`}
                    value={el}
                    onChange={(e) => {
                      let clonedArray = [...skillsArray];
                      clonedArray[index] = e.target.value;
                      setSkillsArray(clonedArray);
                    }}
                  />
                  <div
                    className="delete-generic"
                    onClick={() => {
                      let clonedArray = [...skillsArray];
                      clonedArray = clonedArray.filter((_, arrayIndex) => index !== arrayIndex);
                      setSkillsArray(clonedArray);
                    }}
                  >
                    <MdDeleteForever />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right__section">
          <div className="experience">
            <h3>Experience</h3>
          </div>
          <div className="education">
            <h3>Education</h3>
            <div
              className="add__button-generic"
              onClick={() =>
                setEducationArray((prev) => [
                  ...prev,
                  {
                    college: "",
                    degree: "",
                    year: "",
                    percentage: "",
                  },
                ])
              }
            >
              Add Education
            </div>
            {educationArray.map((el, index) => (
              <div className="d-flex justify-content-start skill">
                <div className="awards-section">
                  <div
                    className="delete-generic"
                    onClick={() => {
                      let clonedArray = [...awardsArray];
                      clonedArray = clonedArray.filter((_, arrayIndex) => index !== arrayIndex);
                      setEducationArray(clonedArray);
                    }}
                  >
                    <MdDeleteForever />
                  </div>
                  <InputLabel
                    placeholder="College/School"
                    className="awards-company"
                    value={el.company}
                    onChange={(e) => {
                      let clonedArray = [...educationArray];
                      clonedArray[index].College = e.target.value;
                      setEducationArray(clonedArray);
                    }}
                  />
                  <InputLabel
                    placeholder="Degree"
                    className="awards-reason"
                    value={el.reason}
                    onChange={(e) => {
                      let clonedArray = [...educationArray];
                      clonedArray[index].degree = e.target.value;
                      setEducationArray(clonedArray);
                    }}
                  />
                  <InputLabel
                    placeholder="Year"
                    className="awards-year"
                    value={el.year}
                    onChange={(e) => {
                      let clonedArray = [...educationArray];
                      clonedArray[index].year = e.target.value;
                      setEducationArray(clonedArray);
                    }}
                  />
                  <InputLabel
                    placeholder="CGPA / Percentage"
                    className="awards-year"
                    value={el.percentage}
                    onChange={(e) => {
                      let clonedArray = [...educationArray];
                      clonedArray[index].percentage = e.target.value;
                      setEducationArray(clonedArray);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="awards">
            <h3>Awards</h3>
            <div
              className="add__button-generic"
              onClick={() =>
                setAwardsArray((prev) => [
                  ...prev,
                  {
                    company: "",
                    reason: "",
                    year: "",
                  },
                ])
              }
            >
              Add Awards
            </div>
            {awardsArray.map((el, index) => (
              <div className="d-flex justify-content-start skill">
                <div className="awards-section">
                  <div
                    className="delete-generic"
                    onClick={() => {
                      let clonedArray = [...awardsArray];
                      clonedArray = clonedArray.filter((_, arrayIndex) => index !== arrayIndex);
                      setAwardsArray(clonedArray);
                    }}
                  >
                    <MdDeleteForever />
                  </div>
                  <InputLabel
                    placeholder="Company/Institute"
                    className="awards-company"
                    value={el.company}
                    onChange={(e) => {
                      let clonedArray = [...awardsArray];
                      clonedArray[index].company = e.target.value;
                      setAwardsArray(clonedArray);
                    }}
                  />
                  <InputLabel
                    placeholder="Reason"
                    className="awards-reason"
                    value={el.reason}
                    onChange={(e) => {
                      let clonedArray = [...awardsArray];
                      clonedArray[index].reason = e.target.value;
                      setAwardsArray(clonedArray);
                    }}
                  />
                  <InputLabel
                    placeholder="Year"
                    className="awards-year"
                    value={el.year}
                    onChange={(e) => {
                      let clonedArray = [...awardsArray];
                      clonedArray[index].year = e.target.value;
                      setAwardsArray(clonedArray);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </A4Paper>
    </div>
  );
}
export default React.memo(TemplateBasic);
