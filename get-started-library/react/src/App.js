import { useCallback } from 'react';

import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

// const SURVEY_ID = 1;

const surveyJson = {
  elements: [{
    type: "text",
    name: "ANTI -TERRORISM LEGISLATION - YOUR DUTY",
    state: "expanded:",
    title: "The Martyn’s Law legislation, formerly known as ‘Protect Duty’ is the result of the inquest and findings from the Manchester Arena terrorist attack enquiry. Martyn’s Law is not intended to be a financial burden to business, rather its focus is to promote and ensure the safety of people in Publicly Accessible Locations (PAL’s), or previously known as crowded places. For more information on Martyn’s please visit www……(insert link to legislation).Whilst this ISO31000 risk assessment will be conducted by a registered Counter Terrorism Security Specialists Register (CTSSR) or a Competent Person in the Workplace (CPIW), it is still your businesses risk assessment. Under Martyn’s Law your business is responsible for implementing the identified mitigation measures and you will be liable for the safety of people whilst at your place of business. Under Martyn’s Law there is an enforcement process to ensure the legislation is followed. Below are Ability to accept Enforcement Undertakings from organisations. Regulator issued Improvement/Enforcement Notices that will require organisations to take steps deemed necessary to address non- compliance. Variable monetary penalties to remove any financial benefit of non-compliance. Up to £18m or 5% of worldwide turnover for enhanced tier. Up to 10k for standard tier. Temporary restrictions or closure of a site to the public until sufficient measures can be taken to bring the risk down to an acceptable level. (enhanced tier only). Criminal sanctions for the most serious of breaches (enhanced tier only) and Obstruction related activity"
  },
  }, {
    type: "boolean",
    name: "question 1:",
    title: "I can confirm that i have read and understood the above statement",
    "isRequired": true,
    labelTrue: "Agree",
    labelFalse: "Do Not Agree"
  }, 
  {
    type: "multipletext",
    name: "question 2:",
    title: "Assessor's Details",
    description: "Please provide your name as printed on any Qualification Certidficates",
    "isRequired": true,
    items: [
      name: "First Name",
      title: "First Name",  
  }, 
  {
    name: "Second Name",
    title: " Surname or Family Name",
  }
  ],  
  colCount: 2,
  },
  {
    type: "checkbox",
    name: "question 3:",
    visibleIf: "{I confirm that I have read and agree to the above.} = true",
    title: "Qualification",
    choices: [
      "Security Specialiist (SQSS)",
      "Competent Person CIPW Level 3",
      "Other",
    ],
    maxSelectedChoices: 1,
     }
  const surveyJson = {
    elements: []
  };
      {
        type: "text",
        name: "ANTI -TERRORISM LEGISLATION - YOUR DUTY",
        state: "expanded:",
        title: "The Martyn’s Law legislation, formerly known as ‘Protect Duty’ is the result of the inquest and findings from the Manchester Arena terrorist attack enquiry. Martyn’s Law is not intended to be a financial burden to business, rather its focus is to promote and ensure the safety of people in Publicly Accessible Locations (PAL’s), or previously known as crowded places. For more information on Martyn’s please visit www……(insert link to legislation).Whilst this ISO31000 risk assessment will be conducted by a registered Counter Terrorism Security Specialists Register (CTSSR) or a Competent Person in the Workplace (CPIW), it is still your businesses risk assessment. Under Martyn’s Law your business is responsible for implementing the identified mitigation measures and you will be liable for the safety of people whilst at your place of business. Under Martyn’s Law there is an enforcement process to ensure the legislation is followed. Below are Ability to accept Enforcement Undertakings from organisations. Regulator issued Improvement/Enforcement Notices that will require organisations to take steps deemed necessary to address non- compliance. Variable monetary penalties to remove any financial benefit of non-compliance. Up to £18m or 5% of worldwide turnover for enhanced tier. Up to 10k for standard tier. Temporary restrictions or closure of a site to the public until sufficient measures can be taken to bring the risk down to an acceptable level. (enhanced tier only). Criminal sanctions for the most serious of breaches (enhanced tier only) and Obstruction related activity",
      },
      {
        type: "boolean",
        name: "question 1:",
        title: "I can confirm that I have read and understood the above statement",
        isRequired: true,
        labelTrue: "Agree",
        labelFalse: "Do Not Agree",
      },
      {
        type: "multipletext",
        name: "question 2:",
        title: "Assessor's Details",
        description: "Please provide your name as printed on any Qualification Certidficates",
        isRequired: true,
        items: [
          {
            name: "First Name",
            title: "First Name",
          },
          {
            name: "Second Name",
            title: "Surname or Family Name",
          },
        ],
      },
      {
        type: "checkbox",
        name: "question 3:",
        visibleIf: "{I confirm that I have read and agree to the above.} = true",
        title: "Qualification",
        choices: [
          "Security Specialiist (SQSS)",
          "Competent Person CIPW Level 3",
          "Other",
        ],
        maxSelectedChoices: 1,
      },
    ],
  };
function App() {
  const survey = new Model(surveyJson);
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
    // saveSurveyResults(
    //   "https://your-web-service.com/" + SURVEY_ID,
    //   sender.data
    // )
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}

// function saveSurveyResults(url, json) {
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     body: JSON.stringify(json)
//   })
//   .then(response => {
//     if (response.ok) {
//       // Handle success
//     } else {
//       // Handle error
//     }
//   })
//   .catch(error => {
//     // Handle error
//   });
// }

export default App;
