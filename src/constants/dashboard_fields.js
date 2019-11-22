import agencies_objects from "./agencies"
let agencies = agencies_objects.map(agency => agency.name)

/**
 * Dashboard Schema
 * 
 * screen name: [field names]
 * 
 * New fields that need to be added to data schema:
 * application_id
 * batch
 * application_submitted_on
 * united_way_case_manager_first_name
 * united_way_case_manager_middle_name
 * united_way_case_manager_last_name
 * cash_grants
 * cash_grant_id
 * cash_grant_notifications
 * cash_grant_amount
 * cash_grant_batch
 * cash_grant_card_check_number
 * cash_grant_send_date
 * cash_grant_receive_date
 * cash_grant_type
 * cash_grant_received
 * cash_grant_notifications
 * cash_grant_notification_id
 * cash_grant_notification_text
 * cash_grant_notification_date
 * dashboard_note_id
 * dashboard_note_text
 * dashboard_note_date
 * application_status
 * application_update_text
 * application_update_author
 * application_update_date
 * 
 */
 const DASHBOARD_FIELDS = {
     "header": [
         "damaged_address1",
         "damaged_address2",
         "damaged_city",
         "damaged_state"
     ],
     "general_information": [
         "survivor_phone",
         "survivor_email",
         "survivor_address1",
         "survivor_address2",
         "survivor_city",
         "survivor_state",
         "fema_number",
         "camp_number"        
        ],
    "members_of_household": [
        "members_of_household_count"
    ],
     "additional_contact": [
        "additional_contact_first_name",
        "additional_contact_middle_name",
        "additional_contact_last_name",
        "additional_contact_email",
        "additional_contact_phone",
        "additional_contact_address1",
        "additional_contact_address2",
        "additional_contact_city",
        "additional_contact_state",
        "additional_contact_zip"
    ],
    "united_way_case_manager" : [
        "united_way_case_manager_first_name",
        "united_way_case_manager_middle_name",
        "united_way_case_manager_last_name"
    ]
    ,
     "agencies": agencies,
     "document_approval": [
         "photo_id",
         "address_proof",
         "house_damage",
         "receipts",
         "can_content_release"
     ],
     "house_status": [
         "damaged_address1",
         "damaged_address2",
         "damaged_city",
         "damaged_state",
         "damaged_zip",
         "notes"
     ],
     "application_status": ["application_status"]
 }

 export default DASHBOARD_FIELDS;