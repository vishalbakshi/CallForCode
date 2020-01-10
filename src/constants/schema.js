import React from "react";
import states from "./states";
import fire_names from "./fire_names";
import relations from "./relations";
import agencies from "./agencies";

// Generate Array of US states as options
const stateOptions = states.map(state => (
  <option key={state.abbreviation} value={state.abbreviation}>
    {state.name}
  </option>
));

// Generate Array of fire names as options
const fireNameOptions = fire_names.map(fire_name => (
  <option key={fire_name.value} value={fire_name.value}>
    {fire_name.name}
  </option>
));

// Generate Array of relationships as options
const relationOptions = relations.map(relation => (
  <option key={relation.value} value={relation.value}>
    {relation.name}
  </option>
));

// Generate Array of agencies as options
const agencyOptions = agencies.map(agency => (
  <option key={agency.name} value={agency.name}>
    {agency.text}
  </option>
));

const placeholders = {
  first_name: "First Name",
  middle_name: "Middle Name",
  last_name: "Last Name",
  phone: "Phone Number",
  email: "Email Address",
  city: "City",
  address1: "Current Address",
  address2: "Apt.",
  zip: "Zip Code",
  dob: "MM/DD/YYYY",
  relation: "parent",
  notes: ""
};

const test_values = {
  first_name: "First Name",
  middle_name: "Middle Name",
  last_name: "Last Name",
  phone: "555-555-5555",
  email: "email@address.com",
  city: "City",
  state: "CA",
  address1: "123 Street",
  address2: "Apt 123",
  zip: "94112",
  dob: "01/01/2019",
  relation: "parent",
  notes: "Test Notes",
  fema_number: "000000000",
  fire_name: "tubbs",
  checked: true,
  notification_text: "Sample notification text",
  notification_date: "11/19/19",
  note_text: "Sample note text",
  note_date: "11/19/19",
  status: "Approved",
  update_text: "Sample update text",
  update_author: "First Last",
  update_date: "11/19/19"
}

const SCHEMA = {
  survivor_first_name: {
    input: "text",
    type: "string",
    initial_value: "",
    columnSize: 4,
    placeholder: "First Name",
    test_value: test_values.first_name,
    validation: (value) => { return false }
  },
  survivor_middle_name: {
    input: "text",
    type: "string",
    initial_value: "",
    columnSize: 4,
    placeholder: "Middle Name",
    test_value: test_values.middle_name,
    validation: (value) => { return false }
  }, 
  survivor_last_name: {
    input: "text",
    type: "string",
    initial_value: "",
    columnSize: 4,
    placeholder: "Last Name",
    test_value: test_values.last_name,
    validation: (value) => { return false }
  },
  survivor_phone: {
    input: "text",
    type: "string",
    initial_value: "",
    columnSize: 6,
    placeholder: "Phone Number",
    test_value: test_values.phone,
    validation: (value) => { return false }
  },
  survivor_email: {
    input: "text",
    type: "string",
    initial_value: "",
    columnSize: 6,
    placeholder: "Email Address",
    test_value: test_values.email,
    validation: (value) => { return false }
  },
  survivor_address1: {
    input: "text",
    type: "string",
    initial_value: "",
    columnSize: 8,
    placeholder: "Current Address",
    test_value: test_values.address1,
    validation: (value) => { return false }
  },
  survivor_address2: {
    input: "text",
    type: "string",
    initial_value: "",
    columnSize: 4,
    placeholder: "Apt.",
    test_value: test_values.address2,
    validation: (value) => { return false }
  },
  survivor_city: {
    input: "text",
    type: "string",
    initial_value: "",
    columnSize: 4,
    placeholder: "City",
    test_value: test_values.city,
    validation: (value) => { return false }
  },
  survivor_state: {
    input: "select",
    options: stateOptions,
    type: "string",
    initial_value: "",
    columnSize: 4,
    placeholder: null,
    test_value: test_values.state,
    validation: (value) => { return false }
  },
  survivor_zip: {
    input: "text",
    type: "string",
    initial_value: "",
    columnSize: 4,
    placeholder: 'Zip Code',
    test_value: test_values.zip,
    validation: (value) => { return false }
  },
  members_of_household_count: {
    input: null,
    type: "number",
    initial_value: 1,
    validation: (value) => { return false }
  },
  household_member_0_first_name: {
    input: "text",
    type: "string",
    initial_value: "",
    columnSize: 4,
    placeholder: "First Name",
    test_value: test_values.first_name,
    validation: (value) => { return false }
  },
  household_member_0_middle_name: {
    input: "text",
    type: "string",
    initial_value: "",
    columnSize: 4,
    placeholder: "Middle Name",
    test_value: test_values.middle_name,
    validation: (value) => { return false }
  },
  household_member_0_last_name: {
    input: "text",
    type: "string",
    initial_value: "",
    columnSize: 4,
    placeholder: "Last Name",
    test_value: test_values.last_name,
    validation: (value) => { return false }
  },
  household_member_0_dob: {
    input: "text",
    type: "string",
    initial_value: "",
    columnSize: 6,
    placeholder: "MM/DD/YYYY",
    test_value: test_values.dob,
    validation: (value) => { return false }
  },
  household_member_0_relation: {
    input: "select",
    type: "string",
    options: relationOptions,
    initial_value: "",
    columnSize: 6,
    test_value: test_values.relation,
    validation: (value) => { return false }
  },
  additional_contact_first_name: {
    input: "text",
    placeholder: "First Name",
    type: "string",
    initial_value: "",
    columnSize: 4,
    test_value: test_values.first_name,
    validation: (value) => { return false }
  },
  additional_contact_middle_name: {
    input: "text",
    placeholder: "Middle Name",
    type: "string",
    initial_value: "",
    columnSize: 4,
    test_value: test_values.middle_name,
    validation: (value) => { return false }
  },
  additional_contact_last_name: {
    input: "text",
    placeholder: "Last Name",
    type: "string",
    initial_value: "",
    columnSize: 4,
    test_value: test_values.last_name,
    validation: (value) => { return false }
  },
  additional_contact_phone: {
    input: "text",
    placeholder: "Phone Number",
    type: "string",
    initial_value: "",
    columnSize: 6,
    test_value: test_values.phone,
    validation: (value) => { return false }
  },
  additional_contact_email: {
    input: "text",
    placeholder: "Email Address",
    type: "string",
    initial_value: "",
    columnSize: 6,
    test_value: test_values.email,
    validation: (value) => { return false }
  },
  additional_contact_address1: {
    input: "text",
    placeholder: "Current Address",
    type: "string",
    initial_value: "",
    columnSize: 8,
    test_value: test_values.address1,
    validation: (value) => { return false }
  },
  additional_contact_address2: {
    input: "text",
    placeholder: "Apt.",
    type: "string",
    initial_value: "",
    columnSize: 4,
    test_value: test_values.address2,
    validation: (value) => { return false }
  },
  additional_contact_city: {
    input: "text",
    placeholder: "City",
    type: "string",
    initial_value: "",
    columnSize: 4,
    test_value: test_values.city,
    validation: (value) => { return false }
  },
  additional_contact_state: {
    input: "select",
    options: stateOptions,
    type: "string",
    initial_value: "",
    columnSize: 4,
    test_value: test_values.state,
    validation: (value) => { return false }
  },
  additional_contact_zip: {
    input: "text",
    placeholder: "Zip Code",
    type: "string",
    initial_value: "",
    columnSize: 4,
    test_value: test_values.zip,
    validation: (value) => { return false }
  },
  fema_number: {
    type: "string",
    placeholder: "FEMA Number",
    input: "text",
    initial_value: "",
    columnSize: 4,
    test_value: test_values.fema_number,
    validation: (value) => { return false }
  },
  camp_number: {
    type: "string",
    placeholder: "CAMP Number",
    input: "text",
    initial_value: "",
    columnSize: 4,
    test_value: test_values.camp_number,
    validation: (value) => { return false }
  },
  fire_name: {
    type: "string",
    placeholder: "Fire Name",
    input: "select",
    options: fireNameOptions,
    initial_value: "",
    columnSize: 4,
    test_value: test_values.fire_name,
    validation: (value) => { return false }
  },
  damaged_address1: {
    type: "string",
    placeholder: "Address Where the Damage Occurred",
    input: "text",
    initial_value: "",
    columnSize: 8,
    test_value: test_values.address1,
    validation: (value) => { return false }
  },
  damaged_address2: {
    type: "string",
    placeholder: "Apt.",
    input: "text",
    initial_value: "",
    columnSize: 4,
    test_value: test_values.address2,
    validation: (value) => { return false }
  },
  damaged_city: {
    type: "string",
    placeholder: "City",
    input: "text",
    initial_value: "",
    columnSize: 4,
    test_value: test_values.city,
    validation: (value) => { return false }
  },
  damaged_state: {
    type: "string",
    options: stateOptions,
    input: "select",
    initial_value: "",
    columnSize: 4,
    test_value: test_values.state,
    validation: (value) => { return false }
  },
  damaged_zip: {
    type: "string",
    placeholder: "Zip Code",
    input: "text",
    initial_value: "",
    columnSize: 4,
    test_value: test_values.zip,
    validation: (value) => { return false }
  },
  landlord_first_name: {
    input: "text",
    placeholder: "First Name",
    type: "string",
    initial_value: "",
    columnSize: 4,
    test_value: test_values.first_name,
    validation: (value) => { return false }
  },
  landlord_middle_name: {
    input: "text",
    placeholder: "Middle Name",
    type: "string",
    initial_value: "",
    columnSize: 4,
    test_value: test_values.middle_name,
    validation: (value) => { return false }
  },
  landlord_last_name: {
    input: "text",
    placeholder: "Last Name",
    type: "string",
    initial_value: "",
    columnSize: 4,
    test_value: test_values.last_name,
    validation: (value) => { return false }
  },
  landlord_phone: {
    type: "string",
    placeholder: "Phone Number",
    input: "text",
    initial_value: "",
    columnSize: 6,
    test_value: test_values.phone,
    validation: (value) => { return false }
  },
  landlord_email: {
    type: "string",
    placeholder: "Email Address",
    input: "text",
    initial_value: "",
    columnSize: 6,
    test_value: test_values.email,
    validation: (value) => { return false }
  },
  notes: {
    type: "string",
    placeholder: "Description of Wildfire Impact",
    input: "textarea",
    initial_value: "",
    test_value: test_values.notes,
    validation: (value) => { return false }
  },
  photo_id: {
    type: "Array",
    input: "file",
    initial_value: [],
    validation: (value) => { return false }
  },
  address_proof: {
    type: "Array",
    input: "file",
    initial_value: [],
    validation: (value) => { return false }
  },
  house_damage: {
    type: "Array",
    input: "file",
    initial_value: [],
    validation: (value) => { return false }
  },
  receipts: {
    type: "Array",
    input: "file",
    initial_value: [],
    validation: (value) => { return false }
  },
  can_content_release: {
    type: "Array",
    input: "file",
    initial_value: [],
    validation: (value) => { return false }
  },
  alliance_for_workplace_development: {
    input: "checkbox",
    type: "boolean",
    initial_value: false,
    name: "Alliance for Workplace Development",
    label: "Alliance for Workplace Development",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  butte_211: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Butte 211",
    label: "Butte 211",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  caring_choices: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Caring Choices",
    label: "Caring Choices",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  chip: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "CHIP",
    label: "CHIP",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  dess: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "DESS",
    label: "DESS",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  fema: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "FEMA",
    label: "FEMA",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  habitat_for_humanity: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Habitat for Humanity",
    label: "Habitat for Humanity",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  jesus_center: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Jesus Center",
    label: "Jesus Center",
    validation: (value) => { return false }
  },
  lsnc: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "LSNC",
    label: "LSNC",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  ltrg_unmet_needs: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "LTRG Unmet Needs",
    label: "LTRG Unmet Needs",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  nvcss: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "NVCSS",
    label: "NVCSS",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  policy_holders_united: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Policy Holders United",
    label: "Policy Holders United",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  red_cross: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Red Cross",
    label: "Red Cross",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  salvation_army: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Salvation Army",
    label: "Salvation Army",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  st_vincent_de_paul: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "St. Vincent de Paul",
    label: "St. Vincent de Paul",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  torres_shelter: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Torres Shelter",
    label: "Torres Shelter",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  tzu_chi: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Tzu Chi",
    label: "Tzu Chi",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  vet_center: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Vet Center",
    label: "Vet Center",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  youth_for_change: {
    input: "checkbox",
    type: "boolean",
    initial_value: "",
    name: "Youth for Change",
    label: "Youth for Change",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  case_manager_0_referring_agency: {
    input: "select",
    type: "string",
    options: agencyOptions,
    columnSize: 12,
    test_value: "youth_for_change",
    validation: (value) => { return false }
  },
  case_manager_count: {
    input: "none"
  },
  case_manager_0_first_name: {
    input: "text",
    type: "string",
    initial_value: "",
    columnSize: 4,
    placeholder: placeholders["first_name"],
    test_value: test_values.first_name,
    validation: (value) => { return false }
  },
  case_manager_0_middle_name: {
    input: "text",
    type: "string",
    initial_value: "",
    columnSize: 4,
    placeholder: placeholders["middle_name"],
    test_value: test_values.middle_name,
    validation: (value) => { return false }
  },
  case_manager_0_last_name: {
    input: "text",
    type: "string",
    initial_value: "",
    columnSize: 4,
    placeholder: placeholders["last_name"],
    test_value: test_values.last_name,
    validation: (value) => { return false }
  },
  case_manager_0_phone: {
    input: "text",
    type: "string",
    initial_value: "",
    columnSize: 6,
    placeholder: placeholders["phone"],
    test_value: test_values.phone,
    validation: (value) => { return false }
  },
  case_manager_0_email: {
    initial_value: "",
    columnSize: 6,
    placeholder: placeholders["email"],
    test_value: test_values.email,
    validation: (value) => { return false }
  },
  sba_loan_yes: {
    input: "radio",
    name: "sba_loan",
    label: "Yes",
    type: "boolean",
    placeholder: "Yes",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  sba_loan_no: {
    input: "radio",
    name: "sba_loan",
    label: "No",
    type: "boolean",
    placeholder: "No",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  signature: {
    input: "text",
    type: "string",
    test_value: "signature",
    validation: (value) => { return false }
  },
  united_way_case_manager_first_name: {
    input: "text",
    type: "string",
    initial_value: "",
    columnSize: 4,
    placeholder: "First Name",
    test_value: test_values.first_name,
    validation: (value) => { return false }
  },
  united_way_case_manager_middle_name: {
    input: "text",
    type: "string",
    initial_value: "",
    columnSize: 4,
    placeholder: "Middle Name",
    test_value: test_values.middle_name,
    validation: (value) => { return false }
  }, 
  united_way_case_manager_last_name: {
    input: "text",
    type: "string",
    initial_value: "",
    columnSize: 4,
    placeholder: "Last Name",
    test_value: test_values.last_name,
    validation: (value) => { return false }
  },
  cash_grant_id: {
    input: "none"    
  },
  cash_grant_notification_id: {
    input: "none"
  },
  cash_grant_notification_text: {
    input: "textarea",
    type: "string",
    placeholder: "Enter notification text here",
    test_value: test_values.notification_text
  },
  cash_grant_notification_date: {
    input: "none"
  },
  cash_grant_amount: {
    input: "text",
    type: "number",
    placeholder: 0,
    test_value: 0,
    validation: (value) => { return false }
  },
  cash_grant_batch: {
    input: "text",
    type: "number",
    placeholder: 0,
    test_value: 0,
    validation: (value) => { return false }
  },
  cash_grant_card_check_number: {
    type: "string",
    placeholder: "Card/check number",
    input: "text",
    columnSize: 4,
    test_value: "00000",
    validation: (value) => { return false }
  },
  cash_grant_send_date: {
    input: "text",
    type: "string",
    initial_value: "",
    columnSize: 6,
    placeholder: "MM/DD/YYYY",
    test_value: test_values.dob,
    validation: (value) => { return false }
  },
  cash_grant_receive_date: {
    input: "text",
    type: "string",
    initial_value: "",
    columnSize: 6,
    placeholder: "MM/DD/YYYY",
    test_value: test_values.dob,
    validation: (value) => { return false }
  },
  cash_grant_type_is_check: {
    input: "radio",
    name: "cash_grant_type",
    label: "Check",
    type: "boolean",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  cash_grant_type_is_card: {
    input: "radio",
    name: "cash_grant_type",
    label: "Yes",
    type: "boolean",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  cash_grant_received_yes: {
    input: "radio",
    name: "cash_grant_received",
    label: "Yes",
    type: "boolean",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  cash_grant_received_no: {
    input: "radio",
    name: "cash_grant_received",
    label: "No",
    type: "boolean",
    test_value: test_values.checked,
    validation: (value) => { return false }
  },
  dashboard_note_id: {
    input: "none"
  },
  dashboard_note_text: {
    input: "textarea",
    type: "string",
    placeholder: "Enter note text here",
    test_value: test_values.notification_text
  },
  dashboard_note_date: {
    input: "none"
  },
  application_status: {
    type: "string",
    placeholder: "Pending",
    input: "text",
    columnSize: 4,
    test_value: "Pending",
    validation: (value) => { return false }
  },
  application_updates_count: {
    input: "none"
  },
  application_update_id: {
    input: "none"
  },
  application_update_text: {
    input: "textarea",
    type: "string",
    placeholder: "Enter note text here",
    test_value: test_values.notification_text
  },
  application_update_author: {
    type: "string",
    placeholder: "Updated by",
    input: "text",
    columnSize: 4,
    test_value: "First Last",
    validation: (value) => { return false }
  },
  application_update_date: {
    input: "none"
  }
};

export default SCHEMA;
