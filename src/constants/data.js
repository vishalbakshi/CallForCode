const DATA = {
	"survivor_applications": [{
		"application_id": "CAMP004356",
		"batch": "1",
		"application_submitted_on": "09/12/2019",
		"survivor_first_name": "First Name",
		"survivor_middle_name": "Middle Name",
		"survivor_last_name": "Last Name",
		"survivor_phone": "555-555-5555",
		"survivor_email": "email@address.com",
		"survivor_address1": "123 Street",
		"survivor_address2": "Apt 123",
		"survivor_state": "CA",
		"survivor_city": "Santa Rosa",
		"survivor_zip": "95401",
		"members_of_household_count": 2, 
		"household_member_0_first_name": "First Name",
		"household_member_0_middle_name": "Middle Name",
		"household_member_0_last_name": "Last Name",
		"household_member_0_dob": "01/01/1990",
		"household_member_0_relation": "parent",
		"household_member_1_first_name": "First Name",
		"household_member_1_middle_name": "Middle Name",
		"household_member_1_last_name": "Last Name",
		"household_member_1_dob": "02/02/1990",
		"household_member_1_relation": "parent",
		"additional_contact_first_name": "First Name",
		"additional_contact_middle_name": "Middle Name",
		"additional_contact_last_name": "Last Name",
		"additional_contact_phone": "555-555-5555",
		"additional_contact_email": "email@address.com",
		"additional_contact_address1": "123 Street",
		"additional_contact_address2": "Apt 123",
		"additional_contact_state": "CA",
		"additional_contact_city": "Paradise",
		"fema_number": "000000000",
		"fire_name": "tubbs",
		"damaged_address1": "456 Street",
		"damaged_address2": "Apt 456",
		"damaged_city": "Santa Rosa",
		"damaged_state": "CA",
		"damaged_zip": "95401",
		"landlord_first_name": "First Name",
		"landlord_middle_name": "Middle Name",
		"landlord_last_name": "Last Name",
		"landlord_phone": "555-555-5555",
		"landlord_email": "email@address.com",
		"notes": "sample notes",
		"photo_id": "",
		"address_proof": "",
		"house_damage": "",
		"receipts": "",
		"can_content_release": "",
		"alliance_for_workplace_development": "true",
		"vet_center": "true",
		"case_manager_count": 2,
		"case_manager_0_referring_agency": "alliance_for_workplace_development",
		"case_manager_0_first_name": "First Name",
		"case_manager_0_middle_name": "Middle Name",
		"case_manager_0_last_name": "Last Name",
		"case_manager_0_phone": "555 - 555 - 5555",
		"case_manager_0_email": "email@address.com",
		"case_manager_1_referring_agency": "vet_center",
		"case_manager_1_first_name": "First Name",
		"case_manager_1_middle_name": "Middle Name",
		"case_manager_1_last_name": "Last Name",
		"case_manager_1_phone": "555 - 555 - 5555",
		"case_manager_1_email": "email@address.com",
		"sba_loan_yes": "true",
		"sba_loan_no": "false",
		"signature": "First Last Middle",
		"dashboard_notes": ["Received updated receipt for $1379. Clearly can see date and time. Receipt is approved for cash grant.", "Received updated receipt for $2330. The receipt for $1379 does not clearly show date and time. Receipt is approved for cash grant."],
		"dashboard_email_text": [{"message": "Hi First Name, Please submit your updated receipt for the amount of $1379", "date": "01/02/2020"},{"message": "Hi First Name, we have received your receipts and will review them shortly.", "date": "12/20/2019"}]
	}, {
		"survivor_first_name": "First Name",
		"survivor_middle_name": "Middle Name",
		"survivor_last_name": "Last Name",
		"survivor_phone": "555-555-5555",
		"survivor_email": "email@address.com",
		"survivor_address1": "123 Street",
		"survivor_address2": "Apt 123",
		"survivor_state": "CA",
		"survivor_city": "Santa Rosa",
		"survivor_zip": "95401",
		"household_member_0_first_name": "First Name",
		"household_member_0_middle_name": "Middle Name",
		"household_member_0_last_name": "Last Name",
		"household_member_0_dob": "01/01/1990",
		"household_member_0_relation": "parent",
		"additional_contact_first_name": "First Name",
		"additional_contact_middle_name": "Middle Name",
		"additional_contact_last_name": "Last Name",
		"additional_contact_phone": "555-555-5555",
		"additional_contact_email": "email@address.com",
		"additional_contact_address1": "123 Street",
		"additional_contact_address2": "Apt 123",
		"additional_contact_state": "CA",
		"additional_contact_city": "Paradise",
		"fema_number": "000000000",
		"fire_name": "tubbs",
		"damaged_address1": "456 Street",
		"damaged_address2": "Apt 456",
		"damaged_city": "Santa Rosa",
		"damaged_state": "CA",
		"damaged_zip": "95401",
		"landlord_first_name": "First Name",
		"landlord_middle_name": "Middle Name",
		"landlord_last_name": "Last Name",
		"landlord_phone": "555-555-5555",
		"landlord_email": "email@address.com",
		"notes": "sample notes",
		"photo_id": "",
		"address_proof": "",
		"house_damage": "",
		"receipts": "",
		"can_content_release": "",
		"alliance_for_workplace_development": "true",
		"vet_center": "true",
		"case_manager_0_referring_agency": "alliance_for_workplace_development",
		"case_manager_0_first_name": "First Name",
		"case_manager_0_middle_name": "Middle Name",
		"case_manager_0_last_name": "Last Name",
		"case_manager_0_phone": "555 - 555 - 5555",
		"case_manager_0_email": "email@address.com",
		"sba_loan_yes": "true",
		"sba_loan_no": "false",
		"signature": "First Last Middle"
	}],
	"component_fields": {
		"general_information": [
			"survivor_first_name",
			"survivor_middle_name",
			"survivor_last_name",
			"survivor_phone",
			"survivor_email",
			"survivor_address1",
			"survivor_address2",
			"survivor_city",
			"survivor_state",
			"survivor_zip"
		],
		"members_of_household": [
			"members_of_household_count",
			"household_member_0_first_name",
			"household_member_0_middle_name",
			"household_member_0_last_name",
			"household_member_0_dob",
			"household_member_0_relation"
		],
		"additional_contact_information": [
			"additional_contact_first_name",
			"additional_contact_middle_name",
			"additional_contact_last_name",
			"additional_contact_phone",
			"additional_contact_email",
			"additional_contact_address1",
			"additional_contact_address2",
			"additional_contact_city",
			"additional_contact_state",
			"additional_contact_zip"
		],
		"cash_grant_information": [
			"fema_number",
			"fire_name",
			"damaged_address1",
			"damaged_address2",
			"damaged_city",
			"damaged_state",
			"damaged_zip"
		],
		"landlord_information": [
			"landlord_first_name",
			"landlord_middle_name",
			"landlord_last_name",
			"landlord_phone",
			"landlord_email"
		],
		"notes": ["notes"],
		"photo_id": ["photo_id"],
		"address_proof": ["address_proof"],
		"house_damage": ["house_damage"],
		"receipts": ["receipts"],
		"can_content_release": ["can_content_release"],
		"agencies": [
			"alliance_for_workplace_development",
			"butte_211",
			"caring_choices",
			"chip",
			"dess",
			"fema",
			"habitat_for_humanity",
			"jesus_center",
			"lsnc",
			"ltrg_unmet_needs",
			"nvcss",
			"policy_holders_united",
			"red_cross",
			"salvation_army",
			"st_vincent_de_paul",
			"torres_shelter",
			"tzu_chi",
			"vet_center",
			"youth_for_change"
		],
		"case_managers": ["case_manager_0_referring_agency",
			"case_manager_0_first_name",
			"case_manager_0_middle_name",
			"case_manager_0_last_name",
			"case_manager_0_phone",
			"case_manager_0_email"
		],
		"sba_loan": [
			"sba_loan_yes",
			"sba_loan_no"
		],
		"signature": ["signature"]
	},
	"agencies": [
    {
        "name": "alliance_for_workplace_development",
		"text": "Alliance for Workplace Development"
    } ,
    {
        "name": "butte_211", 
        "text": "Butte 211"
    },
    {
        "name": "caring_choices", 
        "text": "Caring Choices"
    },
    {
        "name": "chip", 
        "text": "CHIP"
    },
    {
        "name": "dess", 
        "text": "DESS"
    },
    {
        "name": "fema", 
        "text": "FEMA"
    },
    {
		"name": "habitat_for_humanity", 
        "text": "Habitat for Humanity"
    },
    {
		"name": "jesus_center", 
        "text": "Jesus Center"
    },
    {
		"name": "lsnc", 
        "text": "LSNC"
    },
    {
		"name": "ltrg_unmet_needs", 
        "text": "LTRG Unmet Needs"
    },
    {
		"name": "nvcss", 
        "text": "NVCSS"
    },
    {
		"name": "policy_holders_united", 
        "text": "Policy Holders United"
    },
    {
		"name": "red_cross", 
        "text": "Red Cross"
    },
    {
		"name": "salvation_army", 
        "text": "Salvation Army"
    },
    {
		"name": "st_vincent_de_paul", 
        "text": "St. Vincent de Paul"
    },
    {
		"name": "torres_shelter", 
        "text": "Torres Shelter"
    },
    {
		"name": "tzu_chi", 
        "text": "Tzu Chi"
    },
    {
		"name": "vet_center", 
        "text": "Vet Center"
    },
    {
		"name": "youth_for_change", 
        "text": "Youth for Change"
    }
  ]
}

export default DATA;