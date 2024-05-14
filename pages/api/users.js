export default function handler(req, res) {
  res.status(200).json({
    "jsonapi": {
        "version": "1.1"
    },
    "links": {
        "self": "http://localhostx:3000/api/user",
        "first": "http://localhostx:3000/api/user?page%5Blimit%5D=100",
        "last": "http://localhostx:3000/api/user?page%5Boffset%5D=0",
        "prev": null,
        "next": null
    },
    "data": [
        {
            "type": "user",
            "id": 4,
            "attributes": {
                "created_at": "2024-05-03T23:34:52.967Z",
                "updated_at": "2024-05-03T23:34:52.967Z",
                "active": true,
                "username": "test@test.com",
                "email": "test@test.com",
                "first_name": null,
                "middle_name": null,
                "last_name": null,
                "phone_number_mobile": null,
                "text_enabled": false,
                "phone_verified": false,
                "phone_number_home": null,
                "email_verified": false,
                "last_login": null,
                "last_failed_login": null,
                "admin": false,
                "status": "active",
                "language": [],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "123 Main st ",
                "address2": null,
                "state": null,
                "zipcode": null,
                "profile_picture_url": null,
                "referral_code": null,
                "referred_by": null,
                "date_of_birth": null,
                "user_fully_onboarded": false,
                "user_type": null
            },
            "links": {
                "self": "http://localhostx:3000/api/user/4"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/4/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/4/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 200025
                    }
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/4/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/4/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/4/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/4/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/4/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/4/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/4/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/4/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/4/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/4/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/4/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/4/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/4/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/4/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/4/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/4/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/4/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/4/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/4/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/4/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/4/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/4/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/4/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/4/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/4/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/4/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/4/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/4/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/4/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/4/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/4/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/4/files_owned"
                    },
                    "data": [
                        {
                            "type": "file",
                            "id": 3
                        },
                        {
                            "type": "file",
                            "id": 4
                        },
                        {
                            "type": "file",
                            "id": 5
                        },
                        {
                            "type": "file",
                            "id": 6
                        },
                        {
                            "type": "file",
                            "id": 7
                        },
                        {
                            "type": "file",
                            "id": 8
                        },
                        {
                            "type": "file",
                            "id": 9
                        },
                        {
                            "type": "file",
                            "id": 10
                        },
                        {
                            "type": "file",
                            "id": 11
                        }
                    ]
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/4/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/4/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/4/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/4/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/4/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/4/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100001,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "john.doe",
                "email": "jonh.doe@yahoo.com",
                "first_name": "John",
                "middle_name": "a",
                "last_name": "Doe",
                "phone_number_mobile": "2345678901",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "2345678902",
                "email_verified": true,
                "last_login": "2024-04-23T00:00:00.000Z",
                "last_failed_login": "2024-04-22T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 4,
                "address1": "1096",
                "address2": "JamesSt",
                "state": "NC",
                "zipcode": "28211",
                "profile_picture_url": "http://www.cnn.com",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-03-02T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "homeowner"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100001"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100001/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100001/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 400001
                        }
                    ]
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100001/business_documents"
                    },
                    "data": [
                        {
                            "type": "business_Document",
                            "id": 700001
                        }
                    ]
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100001/home_owner_projects"
                    },
                    "data": [
                        {
                            "type": "project",
                            "id": 800001
                        },
                        {
                            "type": "project",
                            "id": 800009
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100001/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100001/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100001/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100001/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100001/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100001/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100001/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100001/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100001/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100001/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100001/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100001/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100001/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100001/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100001/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100001/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100001/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100002,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "jim.watson",
                "email": "jim.watson@gmail.com",
                "first_name": "Jim",
                "middle_name": "b",
                "last_name": "Watson",
                "phone_number_mobile": "3456789012",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "3456789013",
                "email_verified": true,
                "last_login": "2024-04-23T00:00:00.000Z",
                "last_failed_login": "2024-04-22T00:00:00.000Z",
                "admin": true,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 3,
                "address1": "2789",
                "address2": "JohnsCircle",
                "state": "SC",
                "zipcode": "28212",
                "profile_picture_url": "http://www.cnbc.com",
                "referral_code": "BCDE",
                "referred_by": "WEB",
                "date_of_birth": "2000-03-01T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "homeowner"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100002"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100002/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100002/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 400002
                        }
                    ]
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100002/business_documents"
                    },
                    "data": [
                        {
                            "type": "business_Document",
                            "id": 700002
                        }
                    ]
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100002/home_owner_projects"
                    },
                    "data": [
                        {
                            "type": "project",
                            "id": 800002
                        },
                        {
                            "type": "project",
                            "id": 800010
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100002/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100002/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100002/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100002/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100002/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100002/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100002/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100002/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100002/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100002/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100002/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100002/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100002/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100002/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100002/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100002/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100002/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100003,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sherry.english",
                "email": "sherry.english@outlook.com",
                "first_name": "Sherry",
                "middle_name": "c",
                "last_name": "English",
                "phone_number_mobile": "4567890123",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "4567890124",
                "email_verified": true,
                "last_login": "2024-04-23T00:00:00.000Z",
                "last_failed_login": "2024-04-22T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 5,
                "address1": "2345",
                "address2": "wendwoodst",
                "state": "NC",
                "zipcode": "28213",
                "profile_picture_url": "http://www.msn.com",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-03-03T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "homeowner"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100003"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100003/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100003/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 400003
                        }
                    ]
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100003/business_documents"
                    },
                    "data": [
                        {
                            "type": "business_Document",
                            "id": 700003
                        }
                    ]
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100003/home_owner_projects"
                    },
                    "data": [
                        {
                            "type": "project",
                            "id": 800003
                        },
                        {
                            "type": "project",
                            "id": 800011
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100003/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100003/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100003/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100003/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100003/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100003/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100003/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100003/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100003/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100003/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100003/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100003/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100003/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100003/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100003/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100003/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100003/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100004,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "tony.guterz",
                "email": "tony.guterz@hotmail.com",
                "first_name": "Tony",
                "middle_name": "d",
                "last_name": "Guterz",
                "phone_number_mobile": "5678901234",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "5678901235",
                "email_verified": false,
                "last_login": "2024-04-23T00:00:00.000Z",
                "last_failed_login": "2024-04-22T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "Spanish"
                ],
                "forced_login": false,
                "failed_login_count": 6,
                "address1": "5345",
                "address2": "peachblvd",
                "state": "GA",
                "zipcode": "28214",
                "profile_picture_url": "http://www.foxnews.com",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-03-04T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "homeowner"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100004"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100004/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100004/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 400004
                        }
                    ]
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100004/business_documents"
                    },
                    "data": [
                        {
                            "type": "business_Document",
                            "id": 700004
                        }
                    ]
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100004/home_owner_projects"
                    },
                    "data": [
                        {
                            "type": "project",
                            "id": 800004
                        },
                        {
                            "type": "project",
                            "id": 800012
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100004/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100004/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100004/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100004/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100004/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100004/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100004/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100004/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100004/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100004/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100004/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100004/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100004/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100004/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100004/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100004/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100004/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100005,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "vickey.swanson",
                "email": "vickey.swanson@mail.com",
                "first_name": "Vicky",
                "middle_name": "e",
                "last_name": "Swanson",
                "phone_number_mobile": "6789012345",
                "text_enabled": false,
                "phone_verified": false,
                "phone_number_home": "6789012346",
                "email_verified": true,
                "last_login": "2024-04-23T00:00:00.000Z",
                "last_failed_login": "2024-04-22T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 7,
                "address1": "6345",
                "address2": "charleecir",
                "state": "AL",
                "zipcode": "38211",
                "profile_picture_url": "http://www.google.com",
                "referral_code": "DABC",
                "referred_by": "WEB",
                "date_of_birth": "2000-03-05T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "homeowner"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100005"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100005/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100005/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 400005
                        }
                    ]
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100005/business_documents"
                    },
                    "data": [
                        {
                            "type": "business_Document",
                            "id": 700005
                        }
                    ]
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100005/home_owner_projects"
                    },
                    "data": [
                        {
                            "type": "project",
                            "id": 800005
                        },
                        {
                            "type": "project",
                            "id": 800030
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100005/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100005/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100005/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100005/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100005/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100005/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100005/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100005/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100005/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100005/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100005/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100005/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100005/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100005/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100005/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100005/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100005/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100006,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "stephanie.johnson",
                "email": "stephanie.johnson@gmail.com",
                "first_name": "Stephanie",
                "middle_name": "f",
                "last_name": "Johnson",
                "phone_number_mobile": "7890123456",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "7890123457",
                "email_verified": false,
                "last_login": "2024-04-23T00:00:00.000Z",
                "last_failed_login": "2024-04-22T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 1,
                "address1": "9345",
                "address2": "mainstreet",
                "state": "NC",
                "zipcode": "48211",
                "profile_picture_url": "http://www.yahoo.com",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-04-02T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "homeowner"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100006"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100006/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100006/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 400006
                        }
                    ]
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100006/business_documents"
                    },
                    "data": [
                        {
                            "type": "business_Document",
                            "id": 700006
                        }
                    ]
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100006/home_owner_projects"
                    },
                    "data": [
                        {
                            "type": "project",
                            "id": 800006
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100006/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100006/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100006/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100006/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100006/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100006/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100006/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100006/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100006/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100006/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100006/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100006/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100006/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100006/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100006/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100006/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100006/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100007,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "megan.smith",
                "email": "megan.smith@yahoo.com",
                "first_name": "Megan",
                "middle_name": "g",
                "last_name": "Smith",
                "phone_number_mobile": "8901234567",
                "text_enabled": false,
                "phone_verified": false,
                "phone_number_home": "8901234568",
                "email_verified": true,
                "last_login": "2024-04-23T00:00:00.000Z",
                "last_failed_login": "2024-04-22T00:00:00.000Z",
                "admin": true,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 2,
                "address1": "1349",
                "address2": "subcircle",
                "state": "SC",
                "zipcode": "58211",
                "profile_picture_url": "http://www.mail.com",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-04-02T00:00:00.000Z",
                "user_fully_onboarded": false,
                "user_type": "homeowner"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100007"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100007/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100007/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 400007
                        }
                    ]
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100007/business_documents"
                    },
                    "data": [
                        {
                            "type": "business_Document",
                            "id": 700007
                        }
                    ]
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100007/home_owner_projects"
                    },
                    "data": [
                        {
                            "type": "project",
                            "id": 800007
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100007/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100007/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100007/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100007/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100007/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100007/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100007/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100007/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100007/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100007/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100007/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100007/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100007/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100007/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100007/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100007/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100007/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100008,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "jack.maxwell",
                "email": "jack.maxwell@mail.com",
                "first_name": "Jack",
                "middle_name": "h",
                "last_name": "Maxwell",
                "phone_number_mobile": "9012345678",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "9012345679",
                "email_verified": true,
                "last_login": "2024-04-23T00:00:00.000Z",
                "last_failed_login": "2024-04-22T00:00:00.000Z",
                "admin": false,
                "status": "inactive",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 3,
                "address1": "6340",
                "address2": "wendwood",
                "state": "NC",
                "zipcode": "68211",
                "profile_picture_url": "http://www.bloomberg.com",
                "referral_code": "DABC",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-03T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "homeowner"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100008"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100008/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100008/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 400008
                        }
                    ]
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100008/business_documents"
                    },
                    "data": [
                        {
                            "type": "business_Document",
                            "id": 700008
                        }
                    ]
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100008/home_owner_projects"
                    },
                    "data": [
                        {
                            "type": "project",
                            "id": 800008
                        }
                    ]
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100008/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100008/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100008/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100008/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100008/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100008/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100008/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100008/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100008/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100008/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100008/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100008/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100008/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100008/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100008/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100008/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100008/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100009,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "marc.mcdonald",
                "email": "marc.mcdonald@outlook.com",
                "first_name": "Marc",
                "middle_name": "i",
                "last_name": "McDonald",
                "phone_number_mobile": "7012345679",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345679",
                "email_verified": true,
                "last_login": "2024-04-23T00:00:00.000Z",
                "last_failed_login": "2024-04-22T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "French"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "http://www.usnews.com",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-04T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "homeowner"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100009"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100009/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100009/business_user_roles"
                    },
                    "data": [
                        {
                            "type": "business_User_Roles",
                            "id": 400009
                        }
                    ]
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100009/business_documents"
                    },
                    "data": [
                        {
                            "type": "business_Document",
                            "id": 700009
                        }
                    ]
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100009/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100009/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100009/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100009/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100009/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100009/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100009/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100009/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100009/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100009/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100009/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100009/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100009/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100009/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100009/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100009/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100009/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100009/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100010,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "gc1.generalcontractor",
                "email": "gc1.generalcontractor@outlook.com",
                "first_name": "gc1",
                "middle_name": "",
                "last_name": "generalcontractor",
                "phone_number_mobile": "7012345680",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345680",
                "email_verified": true,
                "last_login": "2024-04-24T00:00:00.000Z",
                "last_failed_login": "2024-04-23T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/gc1/.jpg",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-05T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "generalcontractor"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100010"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100010/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 200001
                    }
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100010/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100010/business_documents"
                    },
                    "data": [
                        {
                            "type": "business_Document",
                            "id": 700010
                        }
                    ]
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100010/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100010/project_assignments"
                    },
                    "data": [
                        {
                            "type": "project_Assignments",
                            "id": 130012
                        }
                    ]
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100010/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100010/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100010/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100010/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100010/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100010/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100010/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100010/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100010/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100010/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100010/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100010/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100010/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100010/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100010/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100010/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100011,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "gc2.generalcontractor",
                "email": "gc2.generalcontractor@outlook.com",
                "first_name": "gc2",
                "middle_name": "",
                "last_name": "generalcontractor",
                "phone_number_mobile": "7012345681",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345681",
                "email_verified": true,
                "last_login": "2024-04-25T00:00:00.000Z",
                "last_failed_login": "2024-04-24T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/gc2/.jpg",
                "referral_code": "BCDE",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-06T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "generalcontractor"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100011"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100011/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 200002
                    }
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100011/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100011/business_documents"
                    },
                    "data": [
                        {
                            "type": "business_Document",
                            "id": 700011
                        }
                    ]
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100011/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100011/project_assignments"
                    },
                    "data": [
                        {
                            "type": "project_Assignments",
                            "id": 130013
                        }
                    ]
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100011/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100011/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100011/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100011/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100011/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100011/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100011/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100011/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100011/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100011/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100011/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100011/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100011/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100011/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100011/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100011/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100012,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "gc3.generalcontractor",
                "email": "gc3.generalcontractor@outlook.com",
                "first_name": "gc3",
                "middle_name": "",
                "last_name": "generalcontractor",
                "phone_number_mobile": "7012345682",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345682",
                "email_verified": true,
                "last_login": "2024-04-26T00:00:00.000Z",
                "last_failed_login": "2024-04-25T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/gc3/.jpg",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-07T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "generalcontractor"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100012"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100012/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 200003
                    }
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100012/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100012/business_documents"
                    },
                    "data": [
                        {
                            "type": "business_Document",
                            "id": 700012
                        }
                    ]
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100012/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100012/project_assignments"
                    },
                    "data": [
                        {
                            "type": "project_Assignments",
                            "id": 130014
                        }
                    ]
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100012/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100012/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100012/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100012/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100012/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100012/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100012/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100012/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100012/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100012/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100012/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100012/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100012/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100012/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100012/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100012/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100013,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "gc4.generalcontractor",
                "email": "gc4.generalcontractor@outlook.com",
                "first_name": "gc4",
                "middle_name": "",
                "last_name": "generalcontractor",
                "phone_number_mobile": "7012345683",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345683",
                "email_verified": true,
                "last_login": "2024-04-27T00:00:00.000Z",
                "last_failed_login": "2024-04-26T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/gc4/.jpg",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-08T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "generalcontractor"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100013"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100013/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 200004
                    }
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100013/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100013/business_documents"
                    },
                    "data": [
                        {
                            "type": "business_Document",
                            "id": 700013
                        }
                    ]
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100013/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100013/project_assignments"
                    },
                    "data": [
                        {
                            "type": "project_Assignments",
                            "id": 130015
                        }
                    ]
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100013/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100013/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100013/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100013/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100013/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100013/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100013/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100013/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100013/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100013/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100013/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100013/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100013/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100013/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100013/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100013/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100014,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "gc1emp1.gc_employee",
                "email": "gc1emp1.gc_employee@outlook.com",
                "first_name": "gc1emp1",
                "middle_name": "",
                "last_name": "gc_employee",
                "phone_number_mobile": "7012345684",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345684",
                "email_verified": true,
                "last_login": "2024-04-28T00:00:00.000Z",
                "last_failed_login": "2024-04-27T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/gc1emp1/.jpg",
                "referral_code": "DABC",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-09T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "gc_employee"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100014"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100014/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100014/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100014/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100014/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100014/project_assignments"
                    },
                    "data": [
                        {
                            "type": "project_Assignments",
                            "id": 130001
                        },
                        {
                            "type": "project_Assignments",
                            "id": 130010
                        }
                    ]
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100014/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100014/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100014/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100014/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100014/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100014/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100014/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100014/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100014/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100014/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100014/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100014/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100014/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100014/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100014/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100014/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100015,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "gc1emp2.gc_employee",
                "email": "gc1emp2.gc_employee@outlook.com",
                "first_name": "gc1emp2",
                "middle_name": "",
                "last_name": "gc_employee",
                "phone_number_mobile": "7012345685",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345685",
                "email_verified": true,
                "last_login": "2024-04-29T00:00:00.000Z",
                "last_failed_login": "2024-04-28T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/gc1emp2/.jpg",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-10T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "gc_employee"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100015"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100015/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100015/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100015/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100015/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100015/project_assignments"
                    },
                    "data": [
                        {
                            "type": "project_Assignments",
                            "id": 130011
                        }
                    ]
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100015/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100015/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100015/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100015/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100015/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100015/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100015/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100015/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100015/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100015/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100015/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100015/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100015/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100015/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100015/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100015/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100016,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "gc1emp3.gc_employee",
                "email": "gc1emp3.gc_employee@outlook.com",
                "first_name": "gc1emp3",
                "middle_name": "",
                "last_name": "gc_employee",
                "phone_number_mobile": "7012345686",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345686",
                "email_verified": true,
                "last_login": "2024-04-30T00:00:00.000Z",
                "last_failed_login": "2024-04-29T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/gc1emp3/.jpg",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-11T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "gc_employee"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100016"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100016/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100016/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100016/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100016/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100016/project_assignments"
                    },
                    "data": [
                        {
                            "type": "project_Assignments",
                            "id": 130006
                        }
                    ]
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100016/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100016/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100016/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100016/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100016/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100016/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100016/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100016/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100016/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100016/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100016/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100016/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100016/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100016/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100016/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100016/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100017,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "gc1emp4.gc_employee",
                "email": "gc1emp4.gc_employee@outlook.com",
                "first_name": "gc1emp4",
                "middle_name": "",
                "last_name": "gc_employee",
                "phone_number_mobile": "7012345687",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345687",
                "email_verified": true,
                "last_login": "2024-05-01T00:00:00.000Z",
                "last_failed_login": "2024-04-30T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/gc1emp3/.jpg",
                "referral_code": "DABC",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-12T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "gc_employee"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100017"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100017/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100017/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100017/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100017/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100017/project_assignments"
                    },
                    "data": [
                        {
                            "type": "project_Assignments",
                            "id": 130007
                        }
                    ]
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100017/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100017/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100017/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100017/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100017/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100017/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100017/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100017/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100017/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100017/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100017/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100017/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100017/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100017/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100017/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100017/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100018,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "gc2emp1.gc_employee",
                "email": "gc2emp1.gc_employee@outlook.com",
                "first_name": "gc2emp1",
                "middle_name": "",
                "last_name": "gc_employee",
                "phone_number_mobile": "7012345688",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345688",
                "email_verified": true,
                "last_login": "2024-05-02T00:00:00.000Z",
                "last_failed_login": "2024-05-01T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/gc2emp1/.jpg",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-13T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "gc_employee"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100018"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100018/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100018/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100018/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100018/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100018/project_assignments"
                    },
                    "data": [
                        {
                            "type": "project_Assignments",
                            "id": 130008
                        }
                    ]
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100018/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100018/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100018/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100018/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100018/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100018/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100018/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100018/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100018/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100018/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100018/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100018/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100018/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100018/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100018/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100018/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100019,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "gc2emp2.gc_employee",
                "email": "gc2emp2.gc_employee@outlook.com",
                "first_name": "gc2emp2",
                "middle_name": "",
                "last_name": "gc_employee",
                "phone_number_mobile": "7012345689",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345689",
                "email_verified": true,
                "last_login": "2024-05-03T00:00:00.000Z",
                "last_failed_login": "2024-05-02T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/gc2emp2/.jpg",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-14T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "gc_employee"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100019"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100019/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100019/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100019/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100019/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100019/project_assignments"
                    },
                    "data": [
                        {
                            "type": "project_Assignments",
                            "id": 130009
                        }
                    ]
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100019/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100019/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100019/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100019/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100019/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100019/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100019/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100019/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100019/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100019/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100019/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100019/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100019/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100019/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100019/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100019/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100020,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "gc2emp3.gc_employee",
                "email": "gc2emp3.gc_employee@outlook.com",
                "first_name": "gc2emp3",
                "middle_name": "",
                "last_name": "gc_employee",
                "phone_number_mobile": "7012345690",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345690",
                "email_verified": true,
                "last_login": "2024-05-04T00:00:00.000Z",
                "last_failed_login": "2024-05-03T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/gc2emp3/.jpg",
                "referral_code": "BCDE",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-15T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "gc_employee"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100020"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100020/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100020/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100020/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100020/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100020/project_assignments"
                    },
                    "data": [
                        {
                            "type": "project_Assignments",
                            "id": 130002
                        }
                    ]
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100020/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100020/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100020/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100020/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100020/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100020/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100020/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100020/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100020/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100020/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100020/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100020/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100020/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100020/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100020/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100020/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100021,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "gc2emp4.gc_employee",
                "email": "gc2emp4.gc_employee@outlook.com",
                "first_name": "gc2emp4",
                "middle_name": "",
                "last_name": "gc_employee",
                "phone_number_mobile": "7012345691",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345691",
                "email_verified": true,
                "last_login": "2024-05-05T00:00:00.000Z",
                "last_failed_login": "2024-05-04T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/gc2emp3/.jpg",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-16T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "gc_employee"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100021"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100021/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100021/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100021/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100021/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100021/project_assignments"
                    },
                    "data": [
                        {
                            "type": "project_Assignments",
                            "id": 130016
                        }
                    ]
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100021/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100021/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100021/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100021/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100021/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100021/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100021/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100021/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100021/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100021/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100021/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100021/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100021/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100021/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100021/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100021/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100022,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "gc3emp1.gc_employee",
                "email": "gc3emp1.gc_employee@outlook.com",
                "first_name": "gc3emp1",
                "middle_name": "",
                "last_name": "gc_employee",
                "phone_number_mobile": "7012345692",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345692",
                "email_verified": true,
                "last_login": "2024-05-06T00:00:00.000Z",
                "last_failed_login": "2024-05-05T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/gc3emp1/.jpg",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-17T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "gc_employee"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100022"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100022/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100022/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100022/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100022/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100022/project_assignments"
                    },
                    "data": [
                        {
                            "type": "project_Assignments",
                            "id": 130017
                        }
                    ]
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100022/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100022/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100022/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100022/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100022/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100022/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100022/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100022/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100022/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100022/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100022/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100022/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100022/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100022/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100022/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100022/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100023,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "gc3emp2.gc_employee",
                "email": "gc3emp2.gc_employee@outlook.com",
                "first_name": "gc3emp2",
                "middle_name": "",
                "last_name": "gc_employee",
                "phone_number_mobile": "7012345693",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345693",
                "email_verified": true,
                "last_login": "2024-05-07T00:00:00.000Z",
                "last_failed_login": "2024-05-06T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/gc3emp2/.jpg",
                "referral_code": "DABC",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-18T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "gc_employee"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100023"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100023/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100023/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100023/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100023/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100023/project_assignments"
                    },
                    "data": [
                        {
                            "type": "project_Assignments",
                            "id": 130003
                        }
                    ]
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100023/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100023/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100023/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100023/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100023/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100023/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100023/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100023/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100023/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100023/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100023/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100023/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100023/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100023/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100023/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100023/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100024,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "gc3emp3.gc_employee",
                "email": "gc3emp3.gc_employee@outlook.com",
                "first_name": "gc3emp3",
                "middle_name": "",
                "last_name": "gc_employee",
                "phone_number_mobile": "7012345694",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345694",
                "email_verified": true,
                "last_login": "2024-05-08T00:00:00.000Z",
                "last_failed_login": "2024-05-07T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/gc3emp3/.jpg",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-19T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "gc_employee"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100024"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100024/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100024/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100024/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100024/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100024/project_assignments"
                    },
                    "data": [
                        {
                            "type": "project_Assignments",
                            "id": 130004
                        }
                    ]
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100024/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100024/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100024/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100024/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100024/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100024/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100024/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100024/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100024/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100024/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100024/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100024/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100024/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100024/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100024/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100024/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100025,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "gc3emp4.gc_employee",
                "email": "gc3emp4.gc_employee@outlook.com",
                "first_name": "gc3emp4",
                "middle_name": "",
                "last_name": "gc_employee",
                "phone_number_mobile": "7012345695",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345695",
                "email_verified": true,
                "last_login": "2024-05-09T00:00:00.000Z",
                "last_failed_login": "2024-05-08T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/gc3emp3/.jpg",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-20T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "gc_employee"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100025"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100025/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100025/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100025/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100025/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100025/project_assignments"
                    },
                    "data": [
                        {
                            "type": "project_Assignments",
                            "id": 130005
                        }
                    ]
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100025/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100025/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100025/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100025/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100025/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100025/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100025/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100025/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100025/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100025/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100025/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100025/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100025/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100025/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100025/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100025/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100026,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "gc4emp1.gc_employee",
                "email": "gc4emp1.gc_employee@outlook.com",
                "first_name": "gc4emp1",
                "middle_name": "",
                "last_name": "gc_employee",
                "phone_number_mobile": "7012345696",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345696",
                "email_verified": true,
                "last_login": "2024-05-10T00:00:00.000Z",
                "last_failed_login": "2024-05-09T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/gc4emp1/.jpg",
                "referral_code": "DABC",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-21T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "gc_employee"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100026"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100026/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100026/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100026/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100026/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100026/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100026/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100026/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100026/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100026/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100026/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100026/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100026/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100026/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100026/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100026/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100026/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100026/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100026/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100026/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100026/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100026/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100027,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "gc4emp2.gc_employee",
                "email": "gc4emp2.gc_employee@outlook.com",
                "first_name": "gc4emp2",
                "middle_name": "",
                "last_name": "gc_employee",
                "phone_number_mobile": "7012345697",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345697",
                "email_verified": true,
                "last_login": "2024-05-11T00:00:00.000Z",
                "last_failed_login": "2024-05-10T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/gc4emp2/.jpg",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-22T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "gc_employee"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100027"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100027/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100027/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100027/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100027/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100027/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100027/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100027/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100027/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100027/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100027/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100027/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100027/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100027/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100027/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100027/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100027/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100027/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100027/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100027/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100027/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100027/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100028,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "gc4emp3.gc_employee",
                "email": "gc4emp3.gc_employee@outlook.com",
                "first_name": "gc4emp3",
                "middle_name": "",
                "last_name": "gc_employee",
                "phone_number_mobile": "7012345698",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345698",
                "email_verified": true,
                "last_login": "2024-05-12T00:00:00.000Z",
                "last_failed_login": "2024-05-11T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/gc4emp3/.jpg",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-23T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "gc_employee"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100028"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100028/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100028/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100028/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100028/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100028/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100028/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100028/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100028/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100028/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100028/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100028/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100028/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100028/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100028/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100028/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100028/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100028/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100028/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100028/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100028/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100028/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100029,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "gc4emp4.gc_employee",
                "email": "gc4emp4.gc_employee@outlook.com",
                "first_name": "gc4emp4",
                "middle_name": "",
                "last_name": "gc_employee",
                "phone_number_mobile": "7012345699",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345699",
                "email_verified": true,
                "last_login": "2024-05-13T00:00:00.000Z",
                "last_failed_login": "2024-05-12T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/gc4emp3/.jpg",
                "referral_code": "BCDE",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-24T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "gc_employee"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100029"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100029/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100029/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100029/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100029/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100029/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100029/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100029/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100029/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100029/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100029/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100029/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100029/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100029/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100029/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100029/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100029/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100029/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100029/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100029/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100029/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100029/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100030,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub1_arch1.sub_arch",
                "email": "sub1_arch1.sub_arch@outlook.com",
                "first_name": "sub1_arch1",
                "middle_name": "",
                "last_name": "sub_arch",
                "phone_number_mobile": "7012345700",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345700",
                "email_verified": true,
                "last_login": "2024-05-14T00:00:00.000Z",
                "last_failed_login": "2024-05-13T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub1_arch1/.jpg",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-25T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_arch"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100030"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100030/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 200005
                    }
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100030/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100030/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100030/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100030/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100030/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100030/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100030/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100030/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100030/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100030/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100030/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100030/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100030/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100030/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100030/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100030/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100030/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100030/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100030/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100030/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100031,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub2_arch1.sub_arch",
                "email": "sub2_arch1.sub_arch@outlook.com",
                "first_name": "sub2_arch1",
                "middle_name": "",
                "last_name": "sub_arch",
                "phone_number_mobile": "7012345701",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345701",
                "email_verified": true,
                "last_login": "2024-05-15T00:00:00.000Z",
                "last_failed_login": "2024-05-14T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub2_arch1/.jpg",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-26T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_arch"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100031"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100031/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 200006
                    }
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100031/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100031/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100031/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100031/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100031/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100031/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100031/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100031/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100031/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100031/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100031/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100031/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100031/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100031/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100031/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100031/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100031/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100031/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100031/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100031/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100032,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub1_cef1.sub_cef",
                "email": "sub1_cef1.sub_cef@outlook.com",
                "first_name": "sub1_cef1",
                "middle_name": "",
                "last_name": "sub_cef",
                "phone_number_mobile": "7012345702",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345702",
                "email_verified": true,
                "last_login": "2024-05-16T00:00:00.000Z",
                "last_failed_login": "2024-05-15T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub1_cef1/.jpg",
                "referral_code": "DABC",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-27T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_cef"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100032"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100032/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 200007
                    }
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100032/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100032/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100032/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100032/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100032/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100032/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100032/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100032/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100032/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100032/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100032/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100032/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100032/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100032/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100032/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100032/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100032/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100032/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100032/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100032/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100033,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub2_cef1.sub_cef",
                "email": "sub2_cef1.sub_cef@outlook.com",
                "first_name": "sub2_cef1",
                "middle_name": "",
                "last_name": "sub_cef",
                "phone_number_mobile": "7012345703",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345703",
                "email_verified": true,
                "last_login": "2024-05-17T00:00:00.000Z",
                "last_failed_login": "2024-05-16T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub2_cef1/.jpg",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-28T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_cef"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100033"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100033/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 200008
                    }
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100033/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100033/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100033/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100033/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100033/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100033/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100033/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100033/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100033/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100033/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100033/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100033/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100033/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100033/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100033/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100033/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100033/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100033/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100033/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100033/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100034,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub1_plumb1.sub_plumb",
                "email": "sub1_plumb1.sub_plumb@outlook.com",
                "first_name": "sub1_plumb1",
                "middle_name": "",
                "last_name": "sub_plumb",
                "phone_number_mobile": "7012345704",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345704",
                "email_verified": true,
                "last_login": "2024-05-18T00:00:00.000Z",
                "last_failed_login": "2024-05-17T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub1_plumb1/.jpg",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-29T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_plumb"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100034"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100034/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 200009
                    }
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100034/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100034/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100034/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100034/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100034/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100034/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100034/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100034/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100034/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100034/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100034/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100034/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100034/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100034/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100034/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100034/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100034/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100034/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100034/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100034/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100035,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub2_plumb1.sub_plumb",
                "email": "sub2_plumb1.sub_plumb@outlook.com",
                "first_name": "sub2_plumb1",
                "middle_name": "",
                "last_name": "sub_plumb",
                "phone_number_mobile": "7012345705",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345705",
                "email_verified": true,
                "last_login": "2024-05-19T00:00:00.000Z",
                "last_failed_login": "2024-05-18T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub2_plumb1/.jpg",
                "referral_code": "DABC",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-30T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_plumb"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100035"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100035/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 200010
                    }
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100035/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100035/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100035/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100035/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100035/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100035/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100035/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100035/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100035/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100035/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100035/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100035/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100035/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100035/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100035/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100035/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100035/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100035/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100035/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100035/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100036,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub1_elec1.sub_elec",
                "email": "sub1_elec1.sub_elec@outlook.com",
                "first_name": "sub1_elec1",
                "middle_name": "",
                "last_name": "sub_elec",
                "phone_number_mobile": "7012345706",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345706",
                "email_verified": true,
                "last_login": "2024-05-20T00:00:00.000Z",
                "last_failed_login": "2024-05-19T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub1_elec1/.jpg",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-05-31T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_elec"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100036"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100036/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 200011
                    }
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100036/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100036/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100036/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100036/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100036/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100036/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100036/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100036/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100036/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100036/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100036/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100036/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100036/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100036/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100036/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100036/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100036/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100036/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100036/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100036/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100037,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub2_elec1.sub_elec",
                "email": "sub2_elec1.sub_elec@outlook.com",
                "first_name": "sub2_elec1",
                "middle_name": "",
                "last_name": "sub_elec",
                "phone_number_mobile": "7012345707",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345707",
                "email_verified": true,
                "last_login": "2024-05-21T00:00:00.000Z",
                "last_failed_login": "2024-05-20T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub2_elec1/.jpg",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-01T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_elec"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100037"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100037/business_creator"
                    },
                    "data": {
                        "type": "business",
                        "id": 200012
                    }
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100037/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100037/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100037/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100037/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100037/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100037/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100037/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100037/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100037/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100037/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100037/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100037/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100037/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100037/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100037/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100037/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100037/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100037/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100037/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100037/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100038,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub1_framing1.sub_framing",
                "email": "sub1_framing1.sub_framing@outlook.com",
                "first_name": "sub1_framing1",
                "middle_name": "",
                "last_name": "sub_framing",
                "phone_number_mobile": "7012345708",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345708",
                "email_verified": true,
                "last_login": "2024-05-22T00:00:00.000Z",
                "last_failed_login": "2024-05-21T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub1_framing1/.jpg",
                "referral_code": "BCDE",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-02T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_framing"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100038"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100038/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100038/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100038/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100038/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100038/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100038/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100038/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100038/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100038/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100038/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100038/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100038/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100038/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100038/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100038/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100038/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100038/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100038/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100038/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100038/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100038/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100039,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub2_framing1.sub_framing",
                "email": "sub2_framing1.sub_framing@outlook.com",
                "first_name": "sub2_framing1",
                "middle_name": "",
                "last_name": "sub_framing",
                "phone_number_mobile": "7012345709",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345709",
                "email_verified": true,
                "last_login": "2024-05-23T00:00:00.000Z",
                "last_failed_login": "2024-05-22T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub2_framing1/.jpg",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-03T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_framing"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100039"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100039/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100039/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100039/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100039/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100039/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100039/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100039/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100039/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100039/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100039/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100039/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100039/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100039/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100039/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100039/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100039/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100039/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100039/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100039/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100039/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100039/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100040,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub1_hvac1.sub_hvac",
                "email": "sub1_hvac1.sub_hvac@outlook.com",
                "first_name": "sub1_hvac1",
                "middle_name": "",
                "last_name": "sub_hvac",
                "phone_number_mobile": "7012345710",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345710",
                "email_verified": true,
                "last_login": "2024-05-24T00:00:00.000Z",
                "last_failed_login": "2024-05-23T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub1_hvac1/.jpg",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-04T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_hvac"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100040"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100040/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100040/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100040/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100040/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100040/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100040/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100040/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100040/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100040/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100040/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100040/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100040/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100040/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100040/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100040/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100040/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100040/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100040/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100040/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100040/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100040/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100041,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub2_hvac1.sub_hvac",
                "email": "sub2_hvac1.sub_hvac@outlook.com",
                "first_name": "sub2_hvac1",
                "middle_name": "",
                "last_name": "sub_hvac",
                "phone_number_mobile": "7012345711",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345711",
                "email_verified": true,
                "last_login": "2024-05-25T00:00:00.000Z",
                "last_failed_login": "2024-05-24T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub2_hvac1/.jpg",
                "referral_code": "DABC",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-05T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_hvac"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100041"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100041/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100041/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100041/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100041/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100041/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100041/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100041/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100041/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100041/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100041/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100041/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100041/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100041/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100041/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100041/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100041/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100041/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100041/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100041/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100041/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100041/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100042,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub1_roof1.sub_roof",
                "email": "sub1_roof1.sub_roof@outlook.com",
                "first_name": "sub1_roof1",
                "middle_name": "",
                "last_name": "sub_roof",
                "phone_number_mobile": "7012345712",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345712",
                "email_verified": true,
                "last_login": "2024-05-26T00:00:00.000Z",
                "last_failed_login": "2024-05-25T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub1_roof1/.jpg",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-06T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_roof"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100042"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100042/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100042/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100042/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100042/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100042/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100042/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100042/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100042/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100042/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100042/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100042/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100042/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100042/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100042/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100042/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100042/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100042/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100042/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100042/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100042/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100042/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100043,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub2_roof1.sub_roof",
                "email": "sub2_roof1.sub_roof@outlook.com",
                "first_name": "sub2_roof1",
                "middle_name": "",
                "last_name": "sub_roof",
                "phone_number_mobile": "7012345713",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345713",
                "email_verified": true,
                "last_login": "2024-05-27T00:00:00.000Z",
                "last_failed_login": "2024-05-26T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub2_roof1/.jpg",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-07T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_roof"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100043"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100043/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100043/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100043/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100043/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100043/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100043/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100043/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100043/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100043/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100043/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100043/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100043/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100043/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100043/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100043/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100043/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100043/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100043/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100043/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100043/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100043/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100044,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub1_doorswindows1.sub_doorswindows",
                "email": "sub1_doorswindows1.sub_doorswindows@outlook.com",
                "first_name": "sub1_doorswindows1",
                "middle_name": "",
                "last_name": "sub_doorswindows",
                "phone_number_mobile": "7012345714",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345714",
                "email_verified": true,
                "last_login": "2024-05-28T00:00:00.000Z",
                "last_failed_login": "2024-05-27T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub1_doorswindows1/.jpg",
                "referral_code": "DABC",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-08T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_doorswindows"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100044"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100044/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100044/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100044/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100044/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100044/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100044/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100044/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100044/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100044/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100044/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100044/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100044/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100044/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100044/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100044/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100044/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100044/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100044/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100044/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100044/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100044/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100045,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub2_doorswindows1.sub_doorswindows",
                "email": "sub2_doorswindows1.sub_doorswindows@outlook.com",
                "first_name": "sub2_doorswindows1",
                "middle_name": "",
                "last_name": "sub_doorswindows",
                "phone_number_mobile": "7012345715",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345715",
                "email_verified": true,
                "last_login": "2024-05-29T00:00:00.000Z",
                "last_failed_login": "2024-05-28T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub2_doorswindows1/.jpg",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-09T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_doorswindows"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100045"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100045/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100045/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100045/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100045/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100045/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100045/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100045/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100045/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100045/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100045/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100045/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100045/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100045/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100045/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100045/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100045/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100045/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100045/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100045/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100045/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100045/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100046,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub1_masonry1.sub_masonry",
                "email": "sub1_masonry1.sub_masonry@outlook.com",
                "first_name": "sub1_masonry1",
                "middle_name": "",
                "last_name": "sub_masonry",
                "phone_number_mobile": "7012345716",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345716",
                "email_verified": true,
                "last_login": "2024-05-30T00:00:00.000Z",
                "last_failed_login": "2024-05-29T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub1_masonry1/.jpg",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-10T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_masonry"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100046"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100046/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100046/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100046/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100046/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100046/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100046/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100046/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100046/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100046/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100046/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100046/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100046/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100046/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100046/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100046/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100046/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100046/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100046/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100046/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100046/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100046/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100047,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub2_masonry1.sub_masonry",
                "email": "sub2_masonry1.sub_masonry@outlook.com",
                "first_name": "sub2_masonry1",
                "middle_name": "",
                "last_name": "sub_masonry",
                "phone_number_mobile": "7012345717",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345717",
                "email_verified": true,
                "last_login": "2024-05-31T00:00:00.000Z",
                "last_failed_login": "2024-05-30T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub2_masonry1/.jpg",
                "referral_code": "BCDE",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-11T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_masonry"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100047"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100047/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100047/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100047/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100047/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100047/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100047/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100047/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100047/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100047/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100047/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100047/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100047/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100047/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100047/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100047/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100047/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100047/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100047/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100047/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100047/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100047/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100048,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub1_siding1.sub_siding",
                "email": "sub1_siding1.sub_siding@outlook.com",
                "first_name": "sub1_siding1",
                "middle_name": "",
                "last_name": "sub_siding",
                "phone_number_mobile": "7012345718",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345718",
                "email_verified": true,
                "last_login": "2024-06-01T00:00:00.000Z",
                "last_failed_login": "2024-05-31T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub1_siding1/.jpg",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-12T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_siding"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100048"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100048/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100048/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100048/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100048/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100048/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100048/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100048/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100048/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100048/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100048/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100048/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100048/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100048/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100048/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100048/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100048/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100048/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100048/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100048/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100048/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100048/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100049,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub2_siding1.sub_siding",
                "email": "sub2_siding1.sub_siding@outlook.com",
                "first_name": "sub2_siding1",
                "middle_name": "",
                "last_name": "sub_siding",
                "phone_number_mobile": "7012345719",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345719",
                "email_verified": true,
                "last_login": "2024-06-02T00:00:00.000Z",
                "last_failed_login": "2024-06-01T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub2_siding1/.jpg",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-13T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_siding"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100049"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100049/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100049/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100049/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100049/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100049/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100049/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100049/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100049/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100049/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100049/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100049/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100049/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100049/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100049/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100049/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100049/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100049/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100049/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100049/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100049/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100049/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100050,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub1_insulation1.sub_insulation",
                "email": "sub1_insulation1.sub_insulation@outlook.com",
                "first_name": "sub1_insulation1",
                "middle_name": "",
                "last_name": "sub_insulation",
                "phone_number_mobile": "7012345720",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345720",
                "email_verified": true,
                "last_login": "2024-06-03T00:00:00.000Z",
                "last_failed_login": "2024-06-02T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub1_insulation1/.jpg",
                "referral_code": "DABC",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-14T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_insulation"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100050"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100050/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100050/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100050/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100050/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100050/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100050/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100050/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100050/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100050/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100050/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100050/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100050/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100050/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100050/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100050/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100050/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100050/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100050/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100050/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100050/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100050/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100051,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub2_insulation1.sub_insulation",
                "email": "sub2_insulation1.sub_insulation@outlook.com",
                "first_name": "sub2_insulation1",
                "middle_name": "",
                "last_name": "sub_insulation",
                "phone_number_mobile": "7012345721",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345721",
                "email_verified": true,
                "last_login": "2024-06-04T00:00:00.000Z",
                "last_failed_login": "2024-06-03T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub2_insulation1/.jpg",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-15T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_insulation"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100051"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100051/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100051/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100051/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100051/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100051/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100051/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100051/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100051/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100051/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100051/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100051/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100051/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100051/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100051/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100051/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100051/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100051/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100051/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100051/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100051/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100051/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100052,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub1_drywall1.sub_drywall",
                "email": "sub1_drywall1.sub_drywall@outlook.com",
                "first_name": "sub1_drywall1",
                "middle_name": "",
                "last_name": "sub_drywall",
                "phone_number_mobile": "7012345722",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345722",
                "email_verified": true,
                "last_login": "2024-06-05T00:00:00.000Z",
                "last_failed_login": "2024-06-04T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub1_drywall1/.jpg",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-16T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_drywall"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100052"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100052/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100052/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100052/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100052/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100052/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100052/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100052/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100052/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100052/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100052/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100052/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100052/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100052/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100052/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100052/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100052/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100052/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100052/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100052/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100052/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100052/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100053,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub2_drywall1.sub_drywall",
                "email": "sub2_drywall1.sub_drywall@outlook.com",
                "first_name": "sub2_drywall1",
                "middle_name": "",
                "last_name": "sub_drywall",
                "phone_number_mobile": "7012345723",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345723",
                "email_verified": true,
                "last_login": "2024-06-06T00:00:00.000Z",
                "last_failed_login": "2024-06-05T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub2_drywall1/.jpg",
                "referral_code": "DABC",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-17T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_drywall"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100053"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100053/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100053/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100053/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100053/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100053/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100053/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100053/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100053/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100053/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100053/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100053/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100053/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100053/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100053/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100053/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100053/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100053/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100053/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100053/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100053/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100053/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100054,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub1_painter1.sub_painter",
                "email": "sub1_painter1.sub_painter@outlook.com",
                "first_name": "sub1_painter1",
                "middle_name": "",
                "last_name": "sub_painter",
                "phone_number_mobile": "7012345724",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345724",
                "email_verified": true,
                "last_login": "2024-06-07T00:00:00.000Z",
                "last_failed_login": "2024-06-06T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub1_painter1/.jpg",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-18T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_painter"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100054"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100054/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100054/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100054/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100054/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100054/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100054/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100054/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100054/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100054/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100054/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100054/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100054/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100054/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100054/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100054/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100054/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100054/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100054/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100054/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100054/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100054/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100055,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub2_painter1.sub_painter",
                "email": "sub2_painter1.sub_painter@outlook.com",
                "first_name": "sub2_painter1",
                "middle_name": "",
                "last_name": "sub_painter",
                "phone_number_mobile": "7012345725",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345725",
                "email_verified": true,
                "last_login": "2024-06-08T00:00:00.000Z",
                "last_failed_login": "2024-06-07T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub2_painter1/.jpg",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-19T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_painter"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100055"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100055/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100055/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100055/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100055/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100055/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100055/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100055/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100055/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100055/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100055/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100055/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100055/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100055/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100055/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100055/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100055/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100055/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100055/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100055/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100055/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100055/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100056,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub1_cabinet1.sub_cabinet",
                "email": "sub1_cabinet1.sub_cabinet@outlook.com",
                "first_name": "sub1_cabinet1",
                "middle_name": "",
                "last_name": "sub_cabinet",
                "phone_number_mobile": "7012345726",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345726",
                "email_verified": true,
                "last_login": "2024-06-09T00:00:00.000Z",
                "last_failed_login": "2024-06-08T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub1_cabinet1/.jpg",
                "referral_code": "BCDE",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-20T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_cabinet"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100056"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100056/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100056/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100056/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100056/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100056/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100056/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100056/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100056/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100056/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100056/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100056/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100056/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100056/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100056/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100056/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100056/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100056/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100056/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100056/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100056/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100056/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100057,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub2_cabinet1.sub_cabinet",
                "email": "sub2_cabinet1.sub_cabinet@outlook.com",
                "first_name": "sub2_cabinet1",
                "middle_name": "",
                "last_name": "sub_cabinet",
                "phone_number_mobile": "7012345727",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345727",
                "email_verified": true,
                "last_login": "2024-06-10T00:00:00.000Z",
                "last_failed_login": "2024-06-09T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub2_cabinet1/.jpg",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-21T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_cabinet"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100057"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100057/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100057/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100057/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100057/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100057/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100057/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100057/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100057/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100057/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100057/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100057/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100057/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100057/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100057/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100057/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100057/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100057/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100057/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100057/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100057/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100057/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100058,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub1_trimmer1.sub_trimmer",
                "email": "sub1_trimmer1.sub_trimmer@outlook.com",
                "first_name": "sub1_trimmer1",
                "middle_name": "",
                "last_name": "sub_trimmer",
                "phone_number_mobile": "7012345728",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345728",
                "email_verified": true,
                "last_login": "2024-06-11T00:00:00.000Z",
                "last_failed_login": "2024-06-10T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub1_trimmer1/.jpg",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-22T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_trimmer"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100058"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100058/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100058/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100058/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100058/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100058/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100058/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100058/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100058/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100058/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100058/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100058/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100058/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100058/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100058/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100058/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100058/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100058/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100058/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100058/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100058/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100058/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100059,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub2_trimmer1.sub_trimmer",
                "email": "sub2_trimmer1.sub_trimmer@outlook.com",
                "first_name": "sub2_trimmer1",
                "middle_name": "",
                "last_name": "sub_trimmer",
                "phone_number_mobile": "7012345729",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345729",
                "email_verified": true,
                "last_login": "2024-06-12T00:00:00.000Z",
                "last_failed_login": "2024-06-11T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub2_trimmer1/.jpg",
                "referral_code": "DABC",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-23T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_trimmer"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100059"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100059/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100059/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100059/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100059/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100059/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100059/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100059/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100059/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100059/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100059/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100059/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100059/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100059/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100059/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100059/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100059/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100059/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100059/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100059/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100059/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100059/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100060,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub1_flooring1.sub_flooring",
                "email": "sub1_flooring1.sub_flooring@outlook.com",
                "first_name": "sub1_flooring1",
                "middle_name": "",
                "last_name": "sub_flooring",
                "phone_number_mobile": "7012345730",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345730",
                "email_verified": true,
                "last_login": "2024-06-13T00:00:00.000Z",
                "last_failed_login": "2024-06-12T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub1_flooring1/.jpg",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-24T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_flooring"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100060"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100060/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100060/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100060/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100060/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100060/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100060/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100060/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100060/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100060/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100060/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100060/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100060/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100060/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100060/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100060/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100060/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100060/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100060/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100060/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100060/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100060/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100061,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub2_flooring1.sub_flooring",
                "email": "sub2_flooring1.sub_flooring@outlook.com",
                "first_name": "sub2_flooring1",
                "middle_name": "",
                "last_name": "sub_flooring",
                "phone_number_mobile": "7012345731",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345731",
                "email_verified": true,
                "last_login": "2024-06-14T00:00:00.000Z",
                "last_failed_login": "2024-06-13T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub2_flooring1/.jpg",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-25T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_flooring"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100061"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100061/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100061/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100061/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100061/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100061/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100061/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100061/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100061/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100061/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100061/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100061/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100061/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100061/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100061/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100061/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100061/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100061/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100061/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100061/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100061/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100061/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100062,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub1_landscaper1.sub_landscaper",
                "email": "sub1_landscaper1.sub_landscaper@outlook.com",
                "first_name": "sub1_landscaper1",
                "middle_name": "",
                "last_name": "sub_landscaper",
                "phone_number_mobile": "7012345732",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345732",
                "email_verified": true,
                "last_login": "2024-06-15T00:00:00.000Z",
                "last_failed_login": "2024-06-14T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub1_landscaper1/.jpg",
                "referral_code": "DABC",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-26T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_landscaper"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100062"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100062/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100062/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100062/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100062/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100062/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100062/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100062/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100062/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100062/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100062/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100062/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100062/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100062/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100062/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100062/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100062/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100062/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100062/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100062/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100062/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100062/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100063,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub2_landscaper1.sub_landscaper",
                "email": "sub2_landscaper1.sub_landscaper@outlook.com",
                "first_name": "sub2_landscaper1",
                "middle_name": "",
                "last_name": "sub_landscaper",
                "phone_number_mobile": "7012345733",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345733",
                "email_verified": true,
                "last_login": "2024-06-16T00:00:00.000Z",
                "last_failed_login": "2024-06-15T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub2_landscaper1/.jpg",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-27T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_landscaper"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100063"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100063/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100063/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100063/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100063/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100063/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100063/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100063/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100063/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100063/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100063/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100063/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100063/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100063/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100063/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100063/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100063/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100063/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100063/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100063/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100063/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100063/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100064,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub1_countertop1.sub_countertop",
                "email": "sub1_countertop1.sub_countertop@outlook.com",
                "first_name": "sub1_countertop1",
                "middle_name": "",
                "last_name": "sub_countertop",
                "phone_number_mobile": "7012345734",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345734",
                "email_verified": true,
                "last_login": "2024-06-17T00:00:00.000Z",
                "last_failed_login": "2024-06-16T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub1_countertop1/.jpg",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-28T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_countertop"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100064"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100064/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100064/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100064/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100064/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100064/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100064/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100064/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100064/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100064/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100064/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100064/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100064/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100064/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100064/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100064/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100064/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100064/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100064/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100064/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100064/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100064/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100065,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub2_countertop1.sub_countertop",
                "email": "sub2_countertop1.sub_countertop@outlook.com",
                "first_name": "sub2_countertop1",
                "middle_name": "",
                "last_name": "sub_countertop",
                "phone_number_mobile": "7012345735",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345735",
                "email_verified": true,
                "last_login": "2024-06-18T00:00:00.000Z",
                "last_failed_login": "2024-06-17T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub2_countertop1/.jpg",
                "referral_code": "BCDE",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-29T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_countertop"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100065"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100065/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100065/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100065/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100065/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100065/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100065/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100065/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100065/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100065/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100065/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100065/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100065/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100065/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100065/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100065/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100065/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100065/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100065/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100065/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100065/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100065/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100066,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub1_handyman1.sub_handyman",
                "email": "sub1_handyman1.sub_handyman@outlook.com",
                "first_name": "sub1_handyman1",
                "middle_name": "",
                "last_name": "sub_handyman",
                "phone_number_mobile": "7012345736",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345736",
                "email_verified": true,
                "last_login": "2024-06-19T00:00:00.000Z",
                "last_failed_login": "2024-06-18T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub1_handyman1/.jpg",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-06-30T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_handyman"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100066"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100066/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100066/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100066/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100066/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100066/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100066/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100066/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100066/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100066/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100066/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100066/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100066/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100066/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100066/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100066/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100066/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100066/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100066/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100066/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100066/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100066/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100067,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub2_handyman1.sub_handyman",
                "email": "sub2_handyman1.sub_handyman@outlook.com",
                "first_name": "sub2_handyman1",
                "middle_name": "",
                "last_name": "sub_handyman",
                "phone_number_mobile": "7012345737",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345737",
                "email_verified": true,
                "last_login": "2024-06-20T00:00:00.000Z",
                "last_failed_login": "2024-06-19T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub2_handyman1/.jpg",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-07-01T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_handyman"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100067"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100067/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100067/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100067/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100067/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100067/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100067/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100067/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100067/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100067/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100067/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100067/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100067/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100067/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100067/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100067/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100067/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100067/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100067/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100067/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100067/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100067/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100068,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub1_fence1.sub_fence",
                "email": "sub1_fence1.sub_fence@outlook.com",
                "first_name": "sub1_fence1",
                "middle_name": "",
                "last_name": "sub_fence",
                "phone_number_mobile": "7012345738",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345738",
                "email_verified": true,
                "last_login": "2024-06-21T00:00:00.000Z",
                "last_failed_login": "2024-06-20T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub1_fence1/.jpg",
                "referral_code": "DABC",
                "referred_by": "WEB",
                "date_of_birth": "2000-07-02T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_fence"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100068"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100068/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100068/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100068/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100068/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100068/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100068/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100068/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100068/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100068/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100068/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100068/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100068/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100068/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100068/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100068/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100068/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100068/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100068/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100068/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100068/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100068/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100069,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub2_fence1.sub_fence",
                "email": "sub2_fence1.sub_fence@outlook.com",
                "first_name": "sub2_fence1",
                "middle_name": "",
                "last_name": "sub_fence",
                "phone_number_mobile": "7012345739",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345739",
                "email_verified": true,
                "last_login": "2024-06-22T00:00:00.000Z",
                "last_failed_login": "2024-06-21T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub2_fence1/.jpg",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-07-03T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_fence"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100069"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100069/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100069/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100069/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100069/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100069/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100069/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100069/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100069/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100069/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100069/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100069/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100069/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100069/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100069/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100069/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100069/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100069/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100069/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100069/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100069/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100069/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100070,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub1_mirror1.sub_mirror",
                "email": "sub1_mirror1.sub_mirror@outlook.com",
                "first_name": "sub1_mirror1",
                "middle_name": "",
                "last_name": "sub_mirror",
                "phone_number_mobile": "7012345742",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345742",
                "email_verified": true,
                "last_login": "2024-06-25T00:00:00.000Z",
                "last_failed_login": "2024-06-24T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub1_mirror1/.jpg",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-07-06T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_mirror"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100070"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100070/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100070/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100070/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100070/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100070/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100070/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100070/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100070/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100070/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100070/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100070/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100070/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100070/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100070/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100070/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100070/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100070/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100070/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100070/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100070/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100070/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100071,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub2_mirror2.sub_mirror",
                "email": "sub2_mirror2.sub_mirror@outlook.com",
                "first_name": "sub2_mirror2",
                "middle_name": "",
                "last_name": "sub_mirror",
                "phone_number_mobile": "7012345743",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345743",
                "email_verified": true,
                "last_login": "2024-06-26T00:00:00.000Z",
                "last_failed_login": "2024-06-25T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub2_mirror2/.jpg",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-07-07T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_mirror"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100071"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100071/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100071/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100071/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100071/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100071/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100071/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100071/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100071/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100071/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100071/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100071/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100071/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100071/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100071/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100071/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100071/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100071/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100071/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100071/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100071/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100071/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100072,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub1_sepctic1.sub_sepctic",
                "email": "sub1_sepctic1.sub_sepctic@outlook.com",
                "first_name": "sub1_sepctic1",
                "middle_name": "",
                "last_name": "sub_sepctic",
                "phone_number_mobile": "7012345744",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345744",
                "email_verified": true,
                "last_login": "2024-06-27T00:00:00.000Z",
                "last_failed_login": "2024-06-26T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub1_sepctic1/.jpg",
                "referral_code": "BCDE",
                "referred_by": "WEB",
                "date_of_birth": "2000-07-08T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_sepctic"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100072"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100072/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100072/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100072/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100072/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100072/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100072/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100072/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100072/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100072/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100072/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100072/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100072/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100072/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100072/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100072/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100072/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100072/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100072/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100072/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100072/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100072/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100073,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub2_sepctic1.sub_sepctic",
                "email": "sub2_sepctic1.sub_sepctic@outlook.com",
                "first_name": "sub2_sepctic1",
                "middle_name": "",
                "last_name": "sub_sepctic",
                "phone_number_mobile": "7012345745",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345745",
                "email_verified": true,
                "last_login": "2024-06-28T00:00:00.000Z",
                "last_failed_login": "2024-06-27T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub2_sepctic1/.jpg",
                "referral_code": "ABCD",
                "referred_by": "WEB",
                "date_of_birth": "2000-07-09T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_sepctic"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100073"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100073/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100073/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100073/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100073/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100073/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100073/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100073/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100073/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100073/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100073/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100073/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100073/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100073/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100073/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100073/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100073/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100073/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100073/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100073/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100073/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100073/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100074,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub1_well1.sub_well",
                "email": "sub1_well1.sub_well@outlook.com",
                "first_name": "sub1_well1",
                "middle_name": "",
                "last_name": "sub_well",
                "phone_number_mobile": "7012345746",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345746",
                "email_verified": true,
                "last_login": "2024-06-29T00:00:00.000Z",
                "last_failed_login": "2024-06-28T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub1_well1/.jpg",
                "referral_code": "CDAB",
                "referred_by": "WEB",
                "date_of_birth": "2000-07-10T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_well"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100074"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100074/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100074/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100074/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100074/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100074/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100074/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100074/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100074/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100074/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100074/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100074/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100074/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100074/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100074/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100074/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100074/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100074/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100074/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100074/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100074/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100074/clicks_activity"
                    },
                    "data": []
                }
            }
        },
        {
            "type": "user",
            "id": 100075,
            "attributes": {
                "created_at": "2024-05-03T23:30:36.669Z",
                "updated_at": "2024-05-03T23:30:36.669Z",
                "active": true,
                "username": "sub2_well1.sub_well",
                "email": "sub2_well1.sub_well@outlook.com",
                "first_name": "sub2_well1",
                "middle_name": "",
                "last_name": "sub_well",
                "phone_number_mobile": "7012345747",
                "text_enabled": true,
                "phone_verified": false,
                "phone_number_home": "8012345747",
                "email_verified": true,
                "last_login": "2024-06-30T00:00:00.000Z",
                "last_failed_login": "2024-06-29T00:00:00.000Z",
                "admin": false,
                "status": "active",
                "language": [
                    "English"
                ],
                "forced_login": false,
                "failed_login_count": 0,
                "address1": "8345",
                "address2": "peachtreeblvs",
                "state": "NC",
                "zipcode": "28217",
                "profile_picture_url": "/profilepic/sub2_well1/.jpg",
                "referral_code": "DABC",
                "referred_by": "WEB",
                "date_of_birth": "2000-07-11T00:00:00.000Z",
                "user_fully_onboarded": true,
                "user_type": "sub_well"
            },
            "links": {
                "self": "http://localhostx:3000/api/user/100075"
            },
            "relationships": {
                "business_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/business_creator",
                        "related": "http://localhostx:3000/api/user/100075/business_creator"
                    },
                    "data": null
                },
                "business_user_roles": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/business_user_roles",
                        "related": "http://localhostx:3000/api/user/100075/business_user_roles"
                    },
                    "data": []
                },
                "business_documents": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/business_documents",
                        "related": "http://localhostx:3000/api/user/100075/business_documents"
                    },
                    "data": []
                },
                "home_owner_projects": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/home_owner_projects",
                        "related": "http://localhostx:3000/api/user/100075/home_owner_projects"
                    },
                    "data": []
                },
                "project_assignments": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/project_assignments",
                        "related": "http://localhostx:3000/api/user/100075/project_assignments"
                    },
                    "data": []
                },
                "tasks": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/tasks",
                        "related": "http://localhostx:3000/api/user/100075/tasks"
                    },
                    "data": []
                },
                "punch_list": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/punch_list",
                        "related": "http://localhostx:3000/api/user/100075/punch_list"
                    },
                    "data": []
                },
                "daily_logs": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/daily_logs",
                        "related": "http://localhostx:3000/api/user/100075/daily_logs"
                    },
                    "data": []
                },
                "progression_notes": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/progression_notes",
                        "related": "http://localhostx:3000/api/user/100075/progression_notes"
                    },
                    "data": []
                },
                "change_orders_creator": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/change_orders_creator",
                        "related": "http://localhostx:3000/api/user/100075/change_orders_creator"
                    },
                    "data": []
                },
                "change_orders_reviewer": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/change_orders_reviewer",
                        "related": "http://localhostx:3000/api/user/100075/change_orders_reviewer"
                    },
                    "data": []
                },
                "change_orders_approver": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/change_orders_approver",
                        "related": "http://localhostx:3000/api/user/100075/change_orders_approver"
                    },
                    "data": []
                },
                "bids_requested": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/bids_requested",
                        "related": "http://localhostx:3000/api/user/100075/bids_requested"
                    },
                    "data": []
                },
                "bids_created": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/bids_created",
                        "related": "http://localhostx:3000/api/user/100075/bids_created"
                    },
                    "data": []
                },
                "bids_reviewed": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/bids_reviewed",
                        "related": "http://localhostx:3000/api/user/100075/bids_reviewed"
                    },
                    "data": []
                },
                "bids_approved": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/bids_approved",
                        "related": "http://localhostx:3000/api/user/100075/bids_approved"
                    },
                    "data": []
                },
                "files_owned": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/files_owned",
                        "related": "http://localhostx:3000/api/user/100075/files_owned"
                    },
                    "data": []
                },
                "file_permissions": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/file_permissions",
                        "related": "http://localhostx:3000/api/user/100075/file_permissions"
                    },
                    "data": []
                },
                "api_log": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/api_log",
                        "related": "http://localhostx:3000/api/user/100075/api_log"
                    },
                    "data": []
                },
                "clicks_activity": {
                    "links": {
                        "self": "http://localhostx:3000/api/user/100075/relationships/clicks_activity",
                        "related": "http://localhostx:3000/api/user/100075/clicks_activity"
                    },
                    "data": []
                }
            }
        }
    ],
    "meta": {
        "serialization": {
            "values": {
                "data.0.attributes.created_at": [
                    "Date"
                ],
                "data.0.attributes.updated_at": [
                    "Date"
                ],
                "data.1.attributes.created_at": [
                    "Date"
                ],
                "data.1.attributes.updated_at": [
                    "Date"
                ],
                "data.1.attributes.last_login": [
                    "Date"
                ],
                "data.1.attributes.last_failed_login": [
                    "Date"
                ],
                "data.1.attributes.date_of_birth": [
                    "Date"
                ],
                "data.2.attributes.created_at": [
                    "Date"
                ],
                "data.2.attributes.updated_at": [
                    "Date"
                ],
                "data.2.attributes.last_login": [
                    "Date"
                ],
                "data.2.attributes.last_failed_login": [
                    "Date"
                ],
                "data.2.attributes.date_of_birth": [
                    "Date"
                ],
                "data.3.attributes.created_at": [
                    "Date"
                ],
                "data.3.attributes.updated_at": [
                    "Date"
                ],
                "data.3.attributes.last_login": [
                    "Date"
                ],
                "data.3.attributes.last_failed_login": [
                    "Date"
                ],
                "data.3.attributes.date_of_birth": [
                    "Date"
                ],
                "data.4.attributes.created_at": [
                    "Date"
                ],
                "data.4.attributes.updated_at": [
                    "Date"
                ],
                "data.4.attributes.last_login": [
                    "Date"
                ],
                "data.4.attributes.last_failed_login": [
                    "Date"
                ],
                "data.4.attributes.date_of_birth": [
                    "Date"
                ],
                "data.5.attributes.created_at": [
                    "Date"
                ],
                "data.5.attributes.updated_at": [
                    "Date"
                ],
                "data.5.attributes.last_login": [
                    "Date"
                ],
                "data.5.attributes.last_failed_login": [
                    "Date"
                ],
                "data.5.attributes.date_of_birth": [
                    "Date"
                ],
                "data.6.attributes.created_at": [
                    "Date"
                ],
                "data.6.attributes.updated_at": [
                    "Date"
                ],
                "data.6.attributes.last_login": [
                    "Date"
                ],
                "data.6.attributes.last_failed_login": [
                    "Date"
                ],
                "data.6.attributes.date_of_birth": [
                    "Date"
                ],
                "data.7.attributes.created_at": [
                    "Date"
                ],
                "data.7.attributes.updated_at": [
                    "Date"
                ],
                "data.7.attributes.last_login": [
                    "Date"
                ],
                "data.7.attributes.last_failed_login": [
                    "Date"
                ],
                "data.7.attributes.date_of_birth": [
                    "Date"
                ],
                "data.8.attributes.created_at": [
                    "Date"
                ],
                "data.8.attributes.updated_at": [
                    "Date"
                ],
                "data.8.attributes.last_login": [
                    "Date"
                ],
                "data.8.attributes.last_failed_login": [
                    "Date"
                ],
                "data.8.attributes.date_of_birth": [
                    "Date"
                ],
                "data.9.attributes.created_at": [
                    "Date"
                ],
                "data.9.attributes.updated_at": [
                    "Date"
                ],
                "data.9.attributes.last_login": [
                    "Date"
                ],
                "data.9.attributes.last_failed_login": [
                    "Date"
                ],
                "data.9.attributes.date_of_birth": [
                    "Date"
                ],
                "data.10.attributes.created_at": [
                    "Date"
                ],
                "data.10.attributes.updated_at": [
                    "Date"
                ],
                "data.10.attributes.last_login": [
                    "Date"
                ],
                "data.10.attributes.last_failed_login": [
                    "Date"
                ],
                "data.10.attributes.date_of_birth": [
                    "Date"
                ],
                "data.11.attributes.created_at": [
                    "Date"
                ],
                "data.11.attributes.updated_at": [
                    "Date"
                ],
                "data.11.attributes.last_login": [
                    "Date"
                ],
                "data.11.attributes.last_failed_login": [
                    "Date"
                ],
                "data.11.attributes.date_of_birth": [
                    "Date"
                ],
                "data.12.attributes.created_at": [
                    "Date"
                ],
                "data.12.attributes.updated_at": [
                    "Date"
                ],
                "data.12.attributes.last_login": [
                    "Date"
                ],
                "data.12.attributes.last_failed_login": [
                    "Date"
                ],
                "data.12.attributes.date_of_birth": [
                    "Date"
                ],
                "data.13.attributes.created_at": [
                    "Date"
                ],
                "data.13.attributes.updated_at": [
                    "Date"
                ],
                "data.13.attributes.last_login": [
                    "Date"
                ],
                "data.13.attributes.last_failed_login": [
                    "Date"
                ],
                "data.13.attributes.date_of_birth": [
                    "Date"
                ],
                "data.14.attributes.created_at": [
                    "Date"
                ],
                "data.14.attributes.updated_at": [
                    "Date"
                ],
                "data.14.attributes.last_login": [
                    "Date"
                ],
                "data.14.attributes.last_failed_login": [
                    "Date"
                ],
                "data.14.attributes.date_of_birth": [
                    "Date"
                ],
                "data.15.attributes.created_at": [
                    "Date"
                ],
                "data.15.attributes.updated_at": [
                    "Date"
                ],
                "data.15.attributes.last_login": [
                    "Date"
                ],
                "data.15.attributes.last_failed_login": [
                    "Date"
                ],
                "data.15.attributes.date_of_birth": [
                    "Date"
                ],
                "data.16.attributes.created_at": [
                    "Date"
                ],
                "data.16.attributes.updated_at": [
                    "Date"
                ],
                "data.16.attributes.last_login": [
                    "Date"
                ],
                "data.16.attributes.last_failed_login": [
                    "Date"
                ],
                "data.16.attributes.date_of_birth": [
                    "Date"
                ],
                "data.17.attributes.created_at": [
                    "Date"
                ],
                "data.17.attributes.updated_at": [
                    "Date"
                ],
                "data.17.attributes.last_login": [
                    "Date"
                ],
                "data.17.attributes.last_failed_login": [
                    "Date"
                ],
                "data.17.attributes.date_of_birth": [
                    "Date"
                ],
                "data.18.attributes.created_at": [
                    "Date"
                ],
                "data.18.attributes.updated_at": [
                    "Date"
                ],
                "data.18.attributes.last_login": [
                    "Date"
                ],
                "data.18.attributes.last_failed_login": [
                    "Date"
                ],
                "data.18.attributes.date_of_birth": [
                    "Date"
                ],
                "data.19.attributes.created_at": [
                    "Date"
                ],
                "data.19.attributes.updated_at": [
                    "Date"
                ],
                "data.19.attributes.last_login": [
                    "Date"
                ],
                "data.19.attributes.last_failed_login": [
                    "Date"
                ],
                "data.19.attributes.date_of_birth": [
                    "Date"
                ],
                "data.20.attributes.created_at": [
                    "Date"
                ],
                "data.20.attributes.updated_at": [
                    "Date"
                ],
                "data.20.attributes.last_login": [
                    "Date"
                ],
                "data.20.attributes.last_failed_login": [
                    "Date"
                ],
                "data.20.attributes.date_of_birth": [
                    "Date"
                ],
                "data.21.attributes.created_at": [
                    "Date"
                ],
                "data.21.attributes.updated_at": [
                    "Date"
                ],
                "data.21.attributes.last_login": [
                    "Date"
                ],
                "data.21.attributes.last_failed_login": [
                    "Date"
                ],
                "data.21.attributes.date_of_birth": [
                    "Date"
                ],
                "data.22.attributes.created_at": [
                    "Date"
                ],
                "data.22.attributes.updated_at": [
                    "Date"
                ],
                "data.22.attributes.last_login": [
                    "Date"
                ],
                "data.22.attributes.last_failed_login": [
                    "Date"
                ],
                "data.22.attributes.date_of_birth": [
                    "Date"
                ],
                "data.23.attributes.created_at": [
                    "Date"
                ],
                "data.23.attributes.updated_at": [
                    "Date"
                ],
                "data.23.attributes.last_login": [
                    "Date"
                ],
                "data.23.attributes.last_failed_login": [
                    "Date"
                ],
                "data.23.attributes.date_of_birth": [
                    "Date"
                ],
                "data.24.attributes.created_at": [
                    "Date"
                ],
                "data.24.attributes.updated_at": [
                    "Date"
                ],
                "data.24.attributes.last_login": [
                    "Date"
                ],
                "data.24.attributes.last_failed_login": [
                    "Date"
                ],
                "data.24.attributes.date_of_birth": [
                    "Date"
                ],
                "data.25.attributes.created_at": [
                    "Date"
                ],
                "data.25.attributes.updated_at": [
                    "Date"
                ],
                "data.25.attributes.last_login": [
                    "Date"
                ],
                "data.25.attributes.last_failed_login": [
                    "Date"
                ],
                "data.25.attributes.date_of_birth": [
                    "Date"
                ],
                "data.26.attributes.created_at": [
                    "Date"
                ],
                "data.26.attributes.updated_at": [
                    "Date"
                ],
                "data.26.attributes.last_login": [
                    "Date"
                ],
                "data.26.attributes.last_failed_login": [
                    "Date"
                ],
                "data.26.attributes.date_of_birth": [
                    "Date"
                ],
                "data.27.attributes.created_at": [
                    "Date"
                ],
                "data.27.attributes.updated_at": [
                    "Date"
                ],
                "data.27.attributes.last_login": [
                    "Date"
                ],
                "data.27.attributes.last_failed_login": [
                    "Date"
                ],
                "data.27.attributes.date_of_birth": [
                    "Date"
                ],
                "data.28.attributes.created_at": [
                    "Date"
                ],
                "data.28.attributes.updated_at": [
                    "Date"
                ],
                "data.28.attributes.last_login": [
                    "Date"
                ],
                "data.28.attributes.last_failed_login": [
                    "Date"
                ],
                "data.28.attributes.date_of_birth": [
                    "Date"
                ],
                "data.29.attributes.created_at": [
                    "Date"
                ],
                "data.29.attributes.updated_at": [
                    "Date"
                ],
                "data.29.attributes.last_login": [
                    "Date"
                ],
                "data.29.attributes.last_failed_login": [
                    "Date"
                ],
                "data.29.attributes.date_of_birth": [
                    "Date"
                ],
                "data.30.attributes.created_at": [
                    "Date"
                ],
                "data.30.attributes.updated_at": [
                    "Date"
                ],
                "data.30.attributes.last_login": [
                    "Date"
                ],
                "data.30.attributes.last_failed_login": [
                    "Date"
                ],
                "data.30.attributes.date_of_birth": [
                    "Date"
                ],
                "data.31.attributes.created_at": [
                    "Date"
                ],
                "data.31.attributes.updated_at": [
                    "Date"
                ],
                "data.31.attributes.last_login": [
                    "Date"
                ],
                "data.31.attributes.last_failed_login": [
                    "Date"
                ],
                "data.31.attributes.date_of_birth": [
                    "Date"
                ],
                "data.32.attributes.created_at": [
                    "Date"
                ],
                "data.32.attributes.updated_at": [
                    "Date"
                ],
                "data.32.attributes.last_login": [
                    "Date"
                ],
                "data.32.attributes.last_failed_login": [
                    "Date"
                ],
                "data.32.attributes.date_of_birth": [
                    "Date"
                ],
                "data.33.attributes.created_at": [
                    "Date"
                ],
                "data.33.attributes.updated_at": [
                    "Date"
                ],
                "data.33.attributes.last_login": [
                    "Date"
                ],
                "data.33.attributes.last_failed_login": [
                    "Date"
                ],
                "data.33.attributes.date_of_birth": [
                    "Date"
                ],
                "data.34.attributes.created_at": [
                    "Date"
                ],
                "data.34.attributes.updated_at": [
                    "Date"
                ],
                "data.34.attributes.last_login": [
                    "Date"
                ],
                "data.34.attributes.last_failed_login": [
                    "Date"
                ],
                "data.34.attributes.date_of_birth": [
                    "Date"
                ],
                "data.35.attributes.created_at": [
                    "Date"
                ],
                "data.35.attributes.updated_at": [
                    "Date"
                ],
                "data.35.attributes.last_login": [
                    "Date"
                ],
                "data.35.attributes.last_failed_login": [
                    "Date"
                ],
                "data.35.attributes.date_of_birth": [
                    "Date"
                ],
                "data.36.attributes.created_at": [
                    "Date"
                ],
                "data.36.attributes.updated_at": [
                    "Date"
                ],
                "data.36.attributes.last_login": [
                    "Date"
                ],
                "data.36.attributes.last_failed_login": [
                    "Date"
                ],
                "data.36.attributes.date_of_birth": [
                    "Date"
                ],
                "data.37.attributes.created_at": [
                    "Date"
                ],
                "data.37.attributes.updated_at": [
                    "Date"
                ],
                "data.37.attributes.last_login": [
                    "Date"
                ],
                "data.37.attributes.last_failed_login": [
                    "Date"
                ],
                "data.37.attributes.date_of_birth": [
                    "Date"
                ],
                "data.38.attributes.created_at": [
                    "Date"
                ],
                "data.38.attributes.updated_at": [
                    "Date"
                ],
                "data.38.attributes.last_login": [
                    "Date"
                ],
                "data.38.attributes.last_failed_login": [
                    "Date"
                ],
                "data.38.attributes.date_of_birth": [
                    "Date"
                ],
                "data.39.attributes.created_at": [
                    "Date"
                ],
                "data.39.attributes.updated_at": [
                    "Date"
                ],
                "data.39.attributes.last_login": [
                    "Date"
                ],
                "data.39.attributes.last_failed_login": [
                    "Date"
                ],
                "data.39.attributes.date_of_birth": [
                    "Date"
                ],
                "data.40.attributes.created_at": [
                    "Date"
                ],
                "data.40.attributes.updated_at": [
                    "Date"
                ],
                "data.40.attributes.last_login": [
                    "Date"
                ],
                "data.40.attributes.last_failed_login": [
                    "Date"
                ],
                "data.40.attributes.date_of_birth": [
                    "Date"
                ],
                "data.41.attributes.created_at": [
                    "Date"
                ],
                "data.41.attributes.updated_at": [
                    "Date"
                ],
                "data.41.attributes.last_login": [
                    "Date"
                ],
                "data.41.attributes.last_failed_login": [
                    "Date"
                ],
                "data.41.attributes.date_of_birth": [
                    "Date"
                ],
                "data.42.attributes.created_at": [
                    "Date"
                ],
                "data.42.attributes.updated_at": [
                    "Date"
                ],
                "data.42.attributes.last_login": [
                    "Date"
                ],
                "data.42.attributes.last_failed_login": [
                    "Date"
                ],
                "data.42.attributes.date_of_birth": [
                    "Date"
                ],
                "data.43.attributes.created_at": [
                    "Date"
                ],
                "data.43.attributes.updated_at": [
                    "Date"
                ],
                "data.43.attributes.last_login": [
                    "Date"
                ],
                "data.43.attributes.last_failed_login": [
                    "Date"
                ],
                "data.43.attributes.date_of_birth": [
                    "Date"
                ],
                "data.44.attributes.created_at": [
                    "Date"
                ],
                "data.44.attributes.updated_at": [
                    "Date"
                ],
                "data.44.attributes.last_login": [
                    "Date"
                ],
                "data.44.attributes.last_failed_login": [
                    "Date"
                ],
                "data.44.attributes.date_of_birth": [
                    "Date"
                ],
                "data.45.attributes.created_at": [
                    "Date"
                ],
                "data.45.attributes.updated_at": [
                    "Date"
                ],
                "data.45.attributes.last_login": [
                    "Date"
                ],
                "data.45.attributes.last_failed_login": [
                    "Date"
                ],
                "data.45.attributes.date_of_birth": [
                    "Date"
                ],
                "data.46.attributes.created_at": [
                    "Date"
                ],
                "data.46.attributes.updated_at": [
                    "Date"
                ],
                "data.46.attributes.last_login": [
                    "Date"
                ],
                "data.46.attributes.last_failed_login": [
                    "Date"
                ],
                "data.46.attributes.date_of_birth": [
                    "Date"
                ],
                "data.47.attributes.created_at": [
                    "Date"
                ],
                "data.47.attributes.updated_at": [
                    "Date"
                ],
                "data.47.attributes.last_login": [
                    "Date"
                ],
                "data.47.attributes.last_failed_login": [
                    "Date"
                ],
                "data.47.attributes.date_of_birth": [
                    "Date"
                ],
                "data.48.attributes.created_at": [
                    "Date"
                ],
                "data.48.attributes.updated_at": [
                    "Date"
                ],
                "data.48.attributes.last_login": [
                    "Date"
                ],
                "data.48.attributes.last_failed_login": [
                    "Date"
                ],
                "data.48.attributes.date_of_birth": [
                    "Date"
                ],
                "data.49.attributes.created_at": [
                    "Date"
                ],
                "data.49.attributes.updated_at": [
                    "Date"
                ],
                "data.49.attributes.last_login": [
                    "Date"
                ],
                "data.49.attributes.last_failed_login": [
                    "Date"
                ],
                "data.49.attributes.date_of_birth": [
                    "Date"
                ],
                "data.50.attributes.created_at": [
                    "Date"
                ],
                "data.50.attributes.updated_at": [
                    "Date"
                ],
                "data.50.attributes.last_login": [
                    "Date"
                ],
                "data.50.attributes.last_failed_login": [
                    "Date"
                ],
                "data.50.attributes.date_of_birth": [
                    "Date"
                ],
                "data.51.attributes.created_at": [
                    "Date"
                ],
                "data.51.attributes.updated_at": [
                    "Date"
                ],
                "data.51.attributes.last_login": [
                    "Date"
                ],
                "data.51.attributes.last_failed_login": [
                    "Date"
                ],
                "data.51.attributes.date_of_birth": [
                    "Date"
                ],
                "data.52.attributes.created_at": [
                    "Date"
                ],
                "data.52.attributes.updated_at": [
                    "Date"
                ],
                "data.52.attributes.last_login": [
                    "Date"
                ],
                "data.52.attributes.last_failed_login": [
                    "Date"
                ],
                "data.52.attributes.date_of_birth": [
                    "Date"
                ],
                "data.53.attributes.created_at": [
                    "Date"
                ],
                "data.53.attributes.updated_at": [
                    "Date"
                ],
                "data.53.attributes.last_login": [
                    "Date"
                ],
                "data.53.attributes.last_failed_login": [
                    "Date"
                ],
                "data.53.attributes.date_of_birth": [
                    "Date"
                ],
                "data.54.attributes.created_at": [
                    "Date"
                ],
                "data.54.attributes.updated_at": [
                    "Date"
                ],
                "data.54.attributes.last_login": [
                    "Date"
                ],
                "data.54.attributes.last_failed_login": [
                    "Date"
                ],
                "data.54.attributes.date_of_birth": [
                    "Date"
                ],
                "data.55.attributes.created_at": [
                    "Date"
                ],
                "data.55.attributes.updated_at": [
                    "Date"
                ],
                "data.55.attributes.last_login": [
                    "Date"
                ],
                "data.55.attributes.last_failed_login": [
                    "Date"
                ],
                "data.55.attributes.date_of_birth": [
                    "Date"
                ],
                "data.56.attributes.created_at": [
                    "Date"
                ],
                "data.56.attributes.updated_at": [
                    "Date"
                ],
                "data.56.attributes.last_login": [
                    "Date"
                ],
                "data.56.attributes.last_failed_login": [
                    "Date"
                ],
                "data.56.attributes.date_of_birth": [
                    "Date"
                ],
                "data.57.attributes.created_at": [
                    "Date"
                ],
                "data.57.attributes.updated_at": [
                    "Date"
                ],
                "data.57.attributes.last_login": [
                    "Date"
                ],
                "data.57.attributes.last_failed_login": [
                    "Date"
                ],
                "data.57.attributes.date_of_birth": [
                    "Date"
                ],
                "data.58.attributes.created_at": [
                    "Date"
                ],
                "data.58.attributes.updated_at": [
                    "Date"
                ],
                "data.58.attributes.last_login": [
                    "Date"
                ],
                "data.58.attributes.last_failed_login": [
                    "Date"
                ],
                "data.58.attributes.date_of_birth": [
                    "Date"
                ],
                "data.59.attributes.created_at": [
                    "Date"
                ],
                "data.59.attributes.updated_at": [
                    "Date"
                ],
                "data.59.attributes.last_login": [
                    "Date"
                ],
                "data.59.attributes.last_failed_login": [
                    "Date"
                ],
                "data.59.attributes.date_of_birth": [
                    "Date"
                ],
                "data.60.attributes.created_at": [
                    "Date"
                ],
                "data.60.attributes.updated_at": [
                    "Date"
                ],
                "data.60.attributes.last_login": [
                    "Date"
                ],
                "data.60.attributes.last_failed_login": [
                    "Date"
                ],
                "data.60.attributes.date_of_birth": [
                    "Date"
                ],
                "data.61.attributes.created_at": [
                    "Date"
                ],
                "data.61.attributes.updated_at": [
                    "Date"
                ],
                "data.61.attributes.last_login": [
                    "Date"
                ],
                "data.61.attributes.last_failed_login": [
                    "Date"
                ],
                "data.61.attributes.date_of_birth": [
                    "Date"
                ],
                "data.62.attributes.created_at": [
                    "Date"
                ],
                "data.62.attributes.updated_at": [
                    "Date"
                ],
                "data.62.attributes.last_login": [
                    "Date"
                ],
                "data.62.attributes.last_failed_login": [
                    "Date"
                ],
                "data.62.attributes.date_of_birth": [
                    "Date"
                ],
                "data.63.attributes.created_at": [
                    "Date"
                ],
                "data.63.attributes.updated_at": [
                    "Date"
                ],
                "data.63.attributes.last_login": [
                    "Date"
                ],
                "data.63.attributes.last_failed_login": [
                    "Date"
                ],
                "data.63.attributes.date_of_birth": [
                    "Date"
                ],
                "data.64.attributes.created_at": [
                    "Date"
                ],
                "data.64.attributes.updated_at": [
                    "Date"
                ],
                "data.64.attributes.last_login": [
                    "Date"
                ],
                "data.64.attributes.last_failed_login": [
                    "Date"
                ],
                "data.64.attributes.date_of_birth": [
                    "Date"
                ],
                "data.65.attributes.created_at": [
                    "Date"
                ],
                "data.65.attributes.updated_at": [
                    "Date"
                ],
                "data.65.attributes.last_login": [
                    "Date"
                ],
                "data.65.attributes.last_failed_login": [
                    "Date"
                ],
                "data.65.attributes.date_of_birth": [
                    "Date"
                ],
                "data.66.attributes.created_at": [
                    "Date"
                ],
                "data.66.attributes.updated_at": [
                    "Date"
                ],
                "data.66.attributes.last_login": [
                    "Date"
                ],
                "data.66.attributes.last_failed_login": [
                    "Date"
                ],
                "data.66.attributes.date_of_birth": [
                    "Date"
                ],
                "data.67.attributes.created_at": [
                    "Date"
                ],
                "data.67.attributes.updated_at": [
                    "Date"
                ],
                "data.67.attributes.last_login": [
                    "Date"
                ],
                "data.67.attributes.last_failed_login": [
                    "Date"
                ],
                "data.67.attributes.date_of_birth": [
                    "Date"
                ],
                "data.68.attributes.created_at": [
                    "Date"
                ],
                "data.68.attributes.updated_at": [
                    "Date"
                ],
                "data.68.attributes.last_login": [
                    "Date"
                ],
                "data.68.attributes.last_failed_login": [
                    "Date"
                ],
                "data.68.attributes.date_of_birth": [
                    "Date"
                ],
                "data.69.attributes.created_at": [
                    "Date"
                ],
                "data.69.attributes.updated_at": [
                    "Date"
                ],
                "data.69.attributes.last_login": [
                    "Date"
                ],
                "data.69.attributes.last_failed_login": [
                    "Date"
                ],
                "data.69.attributes.date_of_birth": [
                    "Date"
                ],
                "data.70.attributes.created_at": [
                    "Date"
                ],
                "data.70.attributes.updated_at": [
                    "Date"
                ],
                "data.70.attributes.last_login": [
                    "Date"
                ],
                "data.70.attributes.last_failed_login": [
                    "Date"
                ],
                "data.70.attributes.date_of_birth": [
                    "Date"
                ],
                "data.71.attributes.created_at": [
                    "Date"
                ],
                "data.71.attributes.updated_at": [
                    "Date"
                ],
                "data.71.attributes.last_login": [
                    "Date"
                ],
                "data.71.attributes.last_failed_login": [
                    "Date"
                ],
                "data.71.attributes.date_of_birth": [
                    "Date"
                ],
                "data.72.attributes.created_at": [
                    "Date"
                ],
                "data.72.attributes.updated_at": [
                    "Date"
                ],
                "data.72.attributes.last_login": [
                    "Date"
                ],
                "data.72.attributes.last_failed_login": [
                    "Date"
                ],
                "data.72.attributes.date_of_birth": [
                    "Date"
                ],
                "data.73.attributes.created_at": [
                    "Date"
                ],
                "data.73.attributes.updated_at": [
                    "Date"
                ],
                "data.73.attributes.last_login": [
                    "Date"
                ],
                "data.73.attributes.last_failed_login": [
                    "Date"
                ],
                "data.73.attributes.date_of_birth": [
                    "Date"
                ],
                "data.74.attributes.created_at": [
                    "Date"
                ],
                "data.74.attributes.updated_at": [
                    "Date"
                ],
                "data.74.attributes.last_login": [
                    "Date"
                ],
                "data.74.attributes.last_failed_login": [
                    "Date"
                ],
                "data.74.attributes.date_of_birth": [
                    "Date"
                ],
                "data.75.attributes.created_at": [
                    "Date"
                ],
                "data.75.attributes.updated_at": [
                    "Date"
                ],
                "data.75.attributes.last_login": [
                    "Date"
                ],
                "data.75.attributes.last_failed_login": [
                    "Date"
                ],
                "data.75.attributes.date_of_birth": [
                    "Date"
                ]
            }
        },
        "total": 76
    }
})
}