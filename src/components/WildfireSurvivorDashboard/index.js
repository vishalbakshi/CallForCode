import React, { useState } from "react";
import DATA from "../../constants/data"
/**
 * A single application has the following screens:
 * 
 * General Information
 * Agencies
 * Document Approval
 * House Status
 * Cash Grant
 * Notes Emails
*/

/** 
* A single application has the following sections:
* 
* Application (with above listed screens)
* Application Status
* Last Updates
* Menu
*/

/**
 * ALL APPLICATION SCREENS
 * first_name
 * middle_name
 * last_name
 * application_id
 * batch_number
 * date_of_application
 * damaged_house_address1
 * damaged_house_address2
 * damaged_house_city
 * damaged_house_state
 * damaged_house_zip
 
* GENERAL INFORMATION
* survivor_phone
* survivor_email
* survivor_current_address1
* survivor_current_address2
* survivor_current_city
* survivor_current_state
* survivor_current_zip
* fema_number
* camp_number
* household_member_#_first_name
* household_member_#_middle_name
* household_member_#_last_name
* household_member_#_dob
* household_member_#_relation
* additional_contact_first_name
* additional_contact_middle_name
* additional_contact_last_name
* additional_contact_phone
* additional_contact_email
* additional_contact_address1
* additional_contact_address2
* additional_contact_state
* additional_contact_city
* additional_contact_zip

* AGENCIES
* any agency-named field name selected by applicant
* case_manager_#_referring_agency
* case_manager_#_first_name
* case_manager_#_middle_name
* case_manager_#_last_name
* case_manager_#_phone
* case_manager_#_email
* 
* DOCUMENT APPROVAL
* photo_id
* address_proof
* house_damage
* receipts
* 
* HOUSE STATUS
* landlord_first_name
* landlord_middle_name
* landlord_last_name
* landlord_phone
* landlord_email
* notes
* 
* CASH GRANT
* cash_grant_id
* cash_grant_amount
* cash_grant_type
* cash_grant_received
* notification_id
* notification_date
* notification_type
* 
* NOTES
* dashboard_note_id
* dashboard_note_text
* dashboard_note_creation_date
* dashboard_note_update_date
* dashboard_note_author
* 
* EMAILS
* dashboard_note_id
* dashboard_note_text
* dashboard_note_creation_date
* dashboard_note_update_date
* dashboard_note_author
*/

/**
* Generate inputs based on SCHEMA
* Generate sections based on DASHBOARD_SCHEMA
* 
*/
import SCHEMA from "../../constants/schema";
import APPLICATION_FIELDS from "../../constants/component_fields";
import DASHBOARD_FIELDS from "../../constants/dashboard_fields";
const SectionElements = () => {
  
  const initialState = {"validation": {}, ...DATA["survivor_applications"][0] };

  // Set initial state including validation object
  Object.keys(SCHEMA).forEach(key => {
    if (SCHEMA.hasOwnProperty(key)) {
      initialState["validation"][key] = false;
    }
  }); 
  

  // Form data saved to localStorage upon setState
  // retrieve it from there on re-renders
  const [state, setState] = useState(initialState);

  /**
   * update state and localStorage
   * @param {event} e
   */
  const handleChange = e => {
    let name = e.target.name;
    let value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    let newValidation = state["validation"]
    // Update the validation for the given input using the validation function in schema.js
    // 
    newValidation[name] = SCHEMA[e.target.name].validation(value) ? '' : 'has-error';
    let newState = { ...state, [name]: value, ["validation"]: newValidation };
    localStorage.setItem("dashboardData", JSON.stringify(newState));
    setState(newState);

  };
  debugger
  const getInputElements = category => {
    return DASHBOARD_FIELDS[category].map((field, idx) => {
      switch (SCHEMA[field].input) {
        case "file":
          return (
            <input
              key={idx}
              className={category}
              type="file"
              name={field}
              accept="image/*"
              onChange={handleChange}
              multiple
            />
          );
        case "select":
          return (
            <div className={ `pt-4 col-md-${SCHEMA[field].columnSize}`}>
              <select
                key={idx}
                className={`${category} form-control`}
                name={field}
                onChange={handleChange}
              >
                {SCHEMA[field].options}
              </select>
            </div>
          );
        case "radio":
          let radio = state[field] ? (
            <div className="col-md-12 form-check pl-5 pt-3">
              <input
                key={idx}
                className={category + ' form-check-input'}
                type={SCHEMA[field].input}
                name={SCHEMA[field].name}
                placeholder={SCHEMA[field].placeholder}
                onChange={handleChange}
                checked
              />
              <label htmlFor={SCHEMA[field].name} className="form-check-label pl-3">
              {SCHEMA[field].label}
              </label>
            </div>
            ) : (
            <div className="col-md-12 form-check pl-5 pt-3">
              <input
                key={idx}
                className={category + ' form-check-input'}
                type={SCHEMA[field].input}
                name={SCHEMA[field].name}
                placeholder={SCHEMA[field].placeholder}
                onChange={handleChange}
              />
              <label htmlFor={SCHEMA[field].name} className="form-check-label pl-3">
                {SCHEMA[field].label}
              </label>
            </div>
            );
          return radio;
        case "checkbox":
          // Return checkbox as checked if user has clicked it
          let checkbox = state[field] ? (
            <div className="col-md-3">
              <div className="form-check pb-3">
                <input
                  key={idx}
                  className={`${category} form-check-input`}
                  type={SCHEMA[field].input}
                  name={field}
                  placeholder={SCHEMA[field].placeholder}
                  onChange={handleChange}
                  checked
                />
                <label htmlFor={field} className="form-check-label pl-3">
                  {SCHEMA[field].label}
                </label>
              </div>
            </div>
            ) : (
            <div className="col-md-3">
              <div className="form-check pb-3">
                <input
                  key={idx}
                  className={`${category} form-check-input`}
                  type={SCHEMA[field].input}
                  name={field}
                  placeholder={SCHEMA[field].placeholder}
                  onChange={handleChange}
                />
                <label htmlFor={field} className="form-check-label pl-3">
                  {SCHEMA[field].label}
                </label>
              </div>
            </div>
          );
          return (
            checkbox
          );
        case "textarea":
          return (
            <div className="col-md-12">
              <textarea 
                className={"form-control w-100"}
                rows="8"
                name={field}
                value={state[field]}
                placeholder={SCHEMA[field].placeholder}
                onChange={handleChange}
              />
            </div>
          );
        case null:
          break;
        case "text":
        default:
          return (
            <div className={ `pt-3 col-md-${SCHEMA[field].columnSize}`}>
              <input
                key={idx}
                className={`${category} form-control`}
                type="text"
                name={field}
                value={state[field]}
                onChange={handleChange}
              />  
            </div>
          );
      }
    });
  };
  
  
    let section_elements = Object.keys(DASHBOARD_FIELDS).map(section_name=> {
      console.log(section_name, DASHBOARD_FIELDS[section_name])
      return (<div key={section_name}><section>
        <h2>{section_name}</h2>
        
        {getInputElements(section_name)}
      </section></div>)
    })
    return section_elements;
  };

  export default SectionElements;