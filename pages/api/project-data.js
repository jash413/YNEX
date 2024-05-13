export default function handler(req, res) {
    const json = {
        "jsonapi": {
            "version": "1.1"
        },
        "links": {
            "self": "http://localhostx:3000/api/project",
            "first": "http://localhostx:3000/api/project?page%5Blimit%5D=100",
            "last": "http://localhostx:3000/api/project?page%5Boffset%5D=0",
            "prev": null,
            "next": null
        },
        "data": [
            {
                "type": "project",
                "id": 800001,
                "attributes": {
                    "created_at": "2024-05-08T04:09:40.960Z",
                    "updated_at": "2024-05-08T04:09:40.960Z",
                    "active": true,
                    "home_owner_id": 100001,
                    "gc_business_id": 200002,
                    "name": "Kirk'shome",
                    "description": "Kirk'shome",
                    "address1": "8806AlbrightRd",
                    "address2": "UNIT1",
                    "state": "NC",
                    "zipcode": "27612",
                    "status": "in progress",
                    "project_type": "CustomHome",
                    "contract_type": "fixed",
                    "budget_estimated": "200000",
                    "actual_spent": "100000",
                    "percentage_complete": "60",
                    "notes": "Contractstrated",
                    "start_date": "2024-04-22T00:00:00.000Z",
                    "end_date": "2025-04-23T00:00:00.000Z",
                    "exception_notes": "exceptionnotes",
                    "exception_dates": [],
                    "document_urls": []
                },
                "links": {
                    "self": "http://localhostx:3000/api/project/800001"
                },
                "relationships": {
                    "home_owner": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800001/relationships/home_owner",
                            "related": "http://localhostx:3000/api/project/800001/home_owner"
                        },
                        "data": {
                            "type": "user",
                            "id": 100001
                        }
                    },
                    "gc_business": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800001/relationships/gc_business",
                            "related": "http://localhostx:3000/api/project/800001/gc_business"
                        },
                        "data": {
                            "type": "business",
                            "id": 200002
                        }
                    },
                    "project_assignments": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800001/relationships/project_assignments",
                            "related": "http://localhostx:3000/api/project/800001/project_assignments"
                        },
                        "data": [
                            {
                                "type": "project_Assignments",
                                "id": 130001
                            },
                            {
                                "type": "project_Assignments",
                                "id": 130009
                            }
                        ]
                    },
                    "tasks": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800001/relationships/tasks",
                            "related": "http://localhostx:3000/api/project/800001/tasks"
                        },
                        "data": []
                    },
                    "punch_list": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800001/relationships/punch_list",
                            "related": "http://localhostx:3000/api/project/800001/punch_list"
                        },
                        "data": []
                    },
                    "daily_logs": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800001/relationships/daily_logs",
                            "related": "http://localhostx:3000/api/project/800001/daily_logs"
                        },
                        "data": []
                    },
                    "progression_notes": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800001/relationships/progression_notes",
                            "related": "http://localhostx:3000/api/project/800001/progression_notes"
                        },
                        "data": []
                    },
                    "change_orders": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800001/relationships/change_orders",
                            "related": "http://localhostx:3000/api/project/800001/change_orders"
                        },
                        "data": []
                    },
                    "specications": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800001/relationships/specications",
                            "related": "http://localhostx:3000/api/project/800001/specications"
                        },
                        "data": []
                    },
                    "selections": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800001/relationships/selections",
                            "related": "http://localhostx:3000/api/project/800001/selections"
                        },
                        "data": []
                    },
                    "bids": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800001/relationships/bids",
                            "related": "http://localhostx:3000/api/project/800001/bids"
                        },
                        "data": []
                    },
                    "files": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800001/relationships/files",
                            "related": "http://localhostx:3000/api/project/800001/files"
                        },
                        "data": []
                    }
                }
            },
            {
                "type": "project",
                "id": 800002,
                "attributes": {
                    "created_at": "2024-05-08T04:09:40.960Z",
                    "updated_at": "2024-05-08T04:09:40.960Z",
                    "active": true,
                    "home_owner_id": 100002,
                    "gc_business_id": 200001,
                    "name": "HunAn'sApexhome",
                    "description": "HunAn'sApexhome",
                    "address1": "1314EdwardsPondCt",
                    "address2": "",
                    "state": "NC",
                    "zipcode": "27502",
                    "status": "not yet started",
                    "project_type": "CustomHome",
                    "contract_type": "costplus",
                    "budget_estimated": "220000",
                    "actual_spent": "110001",
                    "percentage_complete": "63",
                    "notes": "Constructionstarted-1",
                    "start_date": "2024-05-22T00:00:00.000Z",
                    "end_date": "2025-05-23T00:00:00.000Z",
                    "exception_notes": "exceptionnotes-1",
                    "exception_dates": [],
                    "document_urls": []
                },
                "links": {
                    "self": "http://localhostx:3000/api/project/800002"
                },
                "relationships": {
                    "home_owner": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800002/relationships/home_owner",
                            "related": "http://localhostx:3000/api/project/800002/home_owner"
                        },
                        "data": {
                            "type": "user",
                            "id": 100002
                        }
                    },
                    "gc_business": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800002/relationships/gc_business",
                            "related": "http://localhostx:3000/api/project/800002/gc_business"
                        },
                        "data": {
                            "type": "business",
                            "id": 200001
                        }
                    },
                    "project_assignments": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800002/relationships/project_assignments",
                            "related": "http://localhostx:3000/api/project/800002/project_assignments"
                        },
                        "data": [
                            {
                                "type": "project_Assignments",
                                "id": 130002
                            },
                            {
                                "type": "project_Assignments",
                                "id": 130010
                            }
                        ]
                    },
                    "tasks": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800002/relationships/tasks",
                            "related": "http://localhostx:3000/api/project/800002/tasks"
                        },
                        "data": []
                    },
                    "punch_list": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800002/relationships/punch_list",
                            "related": "http://localhostx:3000/api/project/800002/punch_list"
                        },
                        "data": []
                    },
                    "daily_logs": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800002/relationships/daily_logs",
                            "related": "http://localhostx:3000/api/project/800002/daily_logs"
                        },
                        "data": []
                    },
                    "progression_notes": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800002/relationships/progression_notes",
                            "related": "http://localhostx:3000/api/project/800002/progression_notes"
                        },
                        "data": []
                    },
                    "change_orders": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800002/relationships/change_orders",
                            "related": "http://localhostx:3000/api/project/800002/change_orders"
                        },
                        "data": []
                    },
                    "specications": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800002/relationships/specications",
                            "related": "http://localhostx:3000/api/project/800002/specications"
                        },
                        "data": []
                    },
                    "selections": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800002/relationships/selections",
                            "related": "http://localhostx:3000/api/project/800002/selections"
                        },
                        "data": []
                    },
                    "bids": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800002/relationships/bids",
                            "related": "http://localhostx:3000/api/project/800002/bids"
                        },
                        "data": []
                    },
                    "files": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800002/relationships/files",
                            "related": "http://localhostx:3000/api/project/800002/files"
                        },
                        "data": []
                    }
                }
            },
            {
                "type": "project",
                "id": 800003,
                "attributes": {
                    "created_at": "2024-05-08T04:09:40.960Z",
                    "updated_at": "2024-05-08T04:09:40.960Z",
                    "active": true,
                    "home_owner_id": 100003,
                    "gc_business_id": 200003,
                    "name": "Murray'shome",
                    "description": "Murray'shome",
                    "address1": "5132DaisySt",
                    "address2": "UNIT10",
                    "state": "NC",
                    "zipcode": "27526",
                    "status": "completed",
                    "project_type": "Remodel",
                    "contract_type": "costplus",
                    "budget_estimated": "240000",
                    "actual_spent": "120002",
                    "percentage_complete": "66",
                    "notes": "Constructionstarted-2",
                    "start_date": "2024-06-22T00:00:00.000Z",
                    "end_date": "2025-06-23T00:00:00.000Z",
                    "exception_notes": "exceptionnotes-2",
                    "exception_dates": [],
                    "document_urls": []
                },
                "links": {
                    "self": "http://localhostx:3000/api/project/800003"
                },
                "relationships": {
                    "home_owner": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800003/relationships/home_owner",
                            "related": "http://localhostx:3000/api/project/800003/home_owner"
                        },
                        "data": {
                            "type": "user",
                            "id": 100003
                        }
                    },
                    "gc_business": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800003/relationships/gc_business",
                            "related": "http://localhostx:3000/api/project/800003/gc_business"
                        },
                        "data": {
                            "type": "business",
                            "id": 200003
                        }
                    },
                    "project_assignments": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800003/relationships/project_assignments",
                            "related": "http://localhostx:3000/api/project/800003/project_assignments"
                        },
                        "data": [
                            {
                                "type": "project_Assignments",
                                "id": 130003
                            },
                            {
                                "type": "project_Assignments",
                                "id": 130011
                            }
                        ]
                    },
                    "tasks": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800003/relationships/tasks",
                            "related": "http://localhostx:3000/api/project/800003/tasks"
                        },
                        "data": []
                    },
                    "punch_list": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800003/relationships/punch_list",
                            "related": "http://localhostx:3000/api/project/800003/punch_list"
                        },
                        "data": []
                    },
                    "daily_logs": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800003/relationships/daily_logs",
                            "related": "http://localhostx:3000/api/project/800003/daily_logs"
                        },
                        "data": []
                    },
                    "progression_notes": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800003/relationships/progression_notes",
                            "related": "http://localhostx:3000/api/project/800003/progression_notes"
                        },
                        "data": []
                    },
                    "change_orders": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800003/relationships/change_orders",
                            "related": "http://localhostx:3000/api/project/800003/change_orders"
                        },
                        "data": []
                    },
                    "specications": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800003/relationships/specications",
                            "related": "http://localhostx:3000/api/project/800003/specications"
                        },
                        "data": []
                    },
                    "selections": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800003/relationships/selections",
                            "related": "http://localhostx:3000/api/project/800003/selections"
                        },
                        "data": []
                    },
                    "bids": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800003/relationships/bids",
                            "related": "http://localhostx:3000/api/project/800003/bids"
                        },
                        "data": []
                    },
                    "files": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800003/relationships/files",
                            "related": "http://localhostx:3000/api/project/800003/files"
                        },
                        "data": []
                    }
                }
            },
            {
                "type": "project",
                "id": 800004,
                "attributes": {
                    "created_at": "2024-05-08T04:09:40.960Z",
                    "updated_at": "2024-05-08T04:09:40.960Z",
                    "active": true,
                    "home_owner_id": 100004,
                    "gc_business_id": 200002,
                    "name": "Poston'shome",
                    "description": "Poston'shome",
                    "address1": "114DebanneRd",
                    "address2": "UNIT12",
                    "state": "NC",
                    "zipcode": "27301",
                    "status": "in progress",
                    "project_type": "CustomHome",
                    "contract_type": "costplus",
                    "budget_estimated": "260000",
                    "actual_spent": "130000",
                    "percentage_complete": "69",
                    "notes": "Constructionstarted-3",
                    "start_date": "2024-07-22T00:00:00.000Z",
                    "end_date": "2025-07-23T00:00:00.000Z",
                    "exception_notes": "exceptionnotes-3",
                    "exception_dates": [],
                    "document_urls": []
                },
                "links": {
                    "self": "http://localhostx:3000/api/project/800004"
                },
                "relationships": {
                    "home_owner": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800004/relationships/home_owner",
                            "related": "http://localhostx:3000/api/project/800004/home_owner"
                        },
                        "data": {
                            "type": "user",
                            "id": 100004
                        }
                    },
                    "gc_business": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800004/relationships/gc_business",
                            "related": "http://localhostx:3000/api/project/800004/gc_business"
                        },
                        "data": {
                            "type": "business",
                            "id": 200002
                        }
                    },
                    "project_assignments": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800004/relationships/project_assignments",
                            "related": "http://localhostx:3000/api/project/800004/project_assignments"
                        },
                        "data": [
                            {
                                "type": "project_Assignments",
                                "id": 130004
                            },
                            {
                                "type": "project_Assignments",
                                "id": 130012
                            }
                        ]
                    },
                    "tasks": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800004/relationships/tasks",
                            "related": "http://localhostx:3000/api/project/800004/tasks"
                        },
                        "data": []
                    },
                    "punch_list": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800004/relationships/punch_list",
                            "related": "http://localhostx:3000/api/project/800004/punch_list"
                        },
                        "data": []
                    },
                    "daily_logs": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800004/relationships/daily_logs",
                            "related": "http://localhostx:3000/api/project/800004/daily_logs"
                        },
                        "data": []
                    },
                    "progression_notes": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800004/relationships/progression_notes",
                            "related": "http://localhostx:3000/api/project/800004/progression_notes"
                        },
                        "data": []
                    },
                    "change_orders": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800004/relationships/change_orders",
                            "related": "http://localhostx:3000/api/project/800004/change_orders"
                        },
                        "data": []
                    },
                    "specications": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800004/relationships/specications",
                            "related": "http://localhostx:3000/api/project/800004/specications"
                        },
                        "data": []
                    },
                    "selections": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800004/relationships/selections",
                            "related": "http://localhostx:3000/api/project/800004/selections"
                        },
                        "data": []
                    },
                    "bids": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800004/relationships/bids",
                            "related": "http://localhostx:3000/api/project/800004/bids"
                        },
                        "data": []
                    },
                    "files": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800004/relationships/files",
                            "related": "http://localhostx:3000/api/project/800004/files"
                        },
                        "data": []
                    }
                }
            },
            {
                "type": "project",
                "id": 800005,
                "attributes": {
                    "created_at": "2024-05-08T04:09:40.960Z",
                    "updated_at": "2024-05-08T04:09:40.960Z",
                    "active": true,
                    "home_owner_id": 100005,
                    "gc_business_id": 200001,
                    "name": "Theegala'shome",
                    "description": "Theegala'shome",
                    "address1": "403SLongSt",
                    "address2": "",
                    "state": "NC",
                    "zipcode": "28144",
                    "status": "not yet started",
                    "project_type": "CustomHome",
                    "contract_type": "costplus",
                    "budget_estimated": "280000",
                    "actual_spent": "140003",
                    "percentage_complete": "72",
                    "notes": "Constructionstarted-4",
                    "start_date": "2024-08-22T00:00:00.000Z",
                    "end_date": "2025-07-24T00:00:00.000Z",
                    "exception_notes": "exceptionnotes-4",
                    "exception_dates": [],
                    "document_urls": []
                },
                "links": {
                    "self": "http://localhostx:3000/api/project/800005"
                },
                "relationships": {
                    "home_owner": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800005/relationships/home_owner",
                            "related": "http://localhostx:3000/api/project/800005/home_owner"
                        },
                        "data": {
                            "type": "user",
                            "id": 100005
                        }
                    },
                    "gc_business": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800005/relationships/gc_business",
                            "related": "http://localhostx:3000/api/project/800005/gc_business"
                        },
                        "data": {
                            "type": "business",
                            "id": 200001
                        }
                    },
                    "project_assignments": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800005/relationships/project_assignments",
                            "related": "http://localhostx:3000/api/project/800005/project_assignments"
                        },
                        "data": [
                            {
                                "type": "project_Assignments",
                                "id": 130005
                            },
                            {
                                "type": "project_Assignments",
                                "id": 130013
                            }
                        ]
                    },
                    "tasks": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800005/relationships/tasks",
                            "related": "http://localhostx:3000/api/project/800005/tasks"
                        },
                        "data": []
                    },
                    "punch_list": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800005/relationships/punch_list",
                            "related": "http://localhostx:3000/api/project/800005/punch_list"
                        },
                        "data": []
                    },
                    "daily_logs": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800005/relationships/daily_logs",
                            "related": "http://localhostx:3000/api/project/800005/daily_logs"
                        },
                        "data": []
                    },
                    "progression_notes": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800005/relationships/progression_notes",
                            "related": "http://localhostx:3000/api/project/800005/progression_notes"
                        },
                        "data": []
                    },
                    "change_orders": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800005/relationships/change_orders",
                            "related": "http://localhostx:3000/api/project/800005/change_orders"
                        },
                        "data": []
                    },
                    "specications": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800005/relationships/specications",
                            "related": "http://localhostx:3000/api/project/800005/specications"
                        },
                        "data": []
                    },
                    "selections": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800005/relationships/selections",
                            "related": "http://localhostx:3000/api/project/800005/selections"
                        },
                        "data": []
                    },
                    "bids": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800005/relationships/bids",
                            "related": "http://localhostx:3000/api/project/800005/bids"
                        },
                        "data": []
                    },
                    "files": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800005/relationships/files",
                            "related": "http://localhostx:3000/api/project/800005/files"
                        },
                        "data": []
                    }
                }
            },
            {
                "type": "project",
                "id": 800006,
                "attributes": {
                    "created_at": "2024-05-08T04:09:40.960Z",
                    "updated_at": "2024-05-08T04:09:40.960Z",
                    "active": true,
                    "home_owner_id": 100006,
                    "gc_business_id": 200003,
                    "name": "Spieth'shome",
                    "description": "Spieth'shome",
                    "address1": "15258HusMcGinnisRd",
                    "address2": "UNIT13",
                    "state": "NC",
                    "zipcode": "28078",
                    "status": "in progress",
                    "project_type": "CustomHome",
                    "contract_type": "costplus",
                    "budget_estimated": "300000",
                    "actual_spent": "150004",
                    "percentage_complete": "71",
                    "notes": "Constructionstarted-5",
                    "start_date": "2024-09-22T00:00:00.000Z",
                    "end_date": "2025-04-25T00:00:00.000Z",
                    "exception_notes": "exceptionnotes-5",
                    "exception_dates": [],
                    "document_urls": []
                },
                "links": {
                    "self": "http://localhostx:3000/api/project/800006"
                },
                "relationships": {
                    "home_owner": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800006/relationships/home_owner",
                            "related": "http://localhostx:3000/api/project/800006/home_owner"
                        },
                        "data": {
                            "type": "user",
                            "id": 100006
                        }
                    },
                    "gc_business": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800006/relationships/gc_business",
                            "related": "http://localhostx:3000/api/project/800006/gc_business"
                        },
                        "data": {
                            "type": "business",
                            "id": 200003
                        }
                    },
                    "project_assignments": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800006/relationships/project_assignments",
                            "related": "http://localhostx:3000/api/project/800006/project_assignments"
                        },
                        "data": [
                            {
                                "type": "project_Assignments",
                                "id": 130006
                            },
                            {
                                "type": "project_Assignments",
                                "id": 130014
                            },
                            {
                                "type": "project_Assignments",
                                "id": 130017
                            }
                        ]
                    },
                    "tasks": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800006/relationships/tasks",
                            "related": "http://localhostx:3000/api/project/800006/tasks"
                        },
                        "data": []
                    },
                    "punch_list": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800006/relationships/punch_list",
                            "related": "http://localhostx:3000/api/project/800006/punch_list"
                        },
                        "data": []
                    },
                    "daily_logs": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800006/relationships/daily_logs",
                            "related": "http://localhostx:3000/api/project/800006/daily_logs"
                        },
                        "data": []
                    },
                    "progression_notes": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800006/relationships/progression_notes",
                            "related": "http://localhostx:3000/api/project/800006/progression_notes"
                        },
                        "data": []
                    },
                    "change_orders": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800006/relationships/change_orders",
                            "related": "http://localhostx:3000/api/project/800006/change_orders"
                        },
                        "data": []
                    },
                    "specications": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800006/relationships/specications",
                            "related": "http://localhostx:3000/api/project/800006/specications"
                        },
                        "data": []
                    },
                    "selections": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800006/relationships/selections",
                            "related": "http://localhostx:3000/api/project/800006/selections"
                        },
                        "data": []
                    },
                    "bids": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800006/relationships/bids",
                            "related": "http://localhostx:3000/api/project/800006/bids"
                        },
                        "data": []
                    },
                    "files": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800006/relationships/files",
                            "related": "http://localhostx:3000/api/project/800006/files"
                        },
                        "data": []
                    }
                }
            },
            {
                "type": "project",
                "id": 800007,
                "attributes": {
                    "created_at": "2024-05-08T04:09:40.960Z",
                    "updated_at": "2024-05-08T04:09:40.960Z",
                    "active": true,
                    "home_owner_id": 100007,
                    "gc_business_id": 200004,
                    "name": "Schauffele'shome",
                    "description": "Schauffele'shome",
                    "address1": "1420E35thSt",
                    "address2": "UNIT14",
                    "state": "NC",
                    "zipcode": "28205",
                    "status": "in progress",
                    "project_type": "Remodel",
                    "contract_type": "costplus",
                    "budget_estimated": "320000",
                    "actual_spent": "160005",
                    "percentage_complete": "72",
                    "notes": "Constructionstarted-6",
                    "start_date": "2024-10-22T00:00:00.000Z",
                    "end_date": "2025-08-23T00:00:00.000Z",
                    "exception_notes": "exceptionnotes-6",
                    "exception_dates": [],
                    "document_urls": []
                },
                "links": {
                    "self": "http://localhostx:3000/api/project/800007"
                },
                "relationships": {
                    "home_owner": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800007/relationships/home_owner",
                            "related": "http://localhostx:3000/api/project/800007/home_owner"
                        },
                        "data": {
                            "type": "user",
                            "id": 100007
                        }
                    },
                    "gc_business": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800007/relationships/gc_business",
                            "related": "http://localhostx:3000/api/project/800007/gc_business"
                        },
                        "data": {
                            "type": "business",
                            "id": 200004
                        }
                    },
                    "project_assignments": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800007/relationships/project_assignments",
                            "related": "http://localhostx:3000/api/project/800007/project_assignments"
                        },
                        "data": [
                            {
                                "type": "project_Assignments",
                                "id": 130007
                            },
                            {
                                "type": "project_Assignments",
                                "id": 130015
                            }
                        ]
                    },
                    "tasks": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800007/relationships/tasks",
                            "related": "http://localhostx:3000/api/project/800007/tasks"
                        },
                        "data": []
                    },
                    "punch_list": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800007/relationships/punch_list",
                            "related": "http://localhostx:3000/api/project/800007/punch_list"
                        },
                        "data": []
                    },
                    "daily_logs": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800007/relationships/daily_logs",
                            "related": "http://localhostx:3000/api/project/800007/daily_logs"
                        },
                        "data": []
                    },
                    "progression_notes": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800007/relationships/progression_notes",
                            "related": "http://localhostx:3000/api/project/800007/progression_notes"
                        },
                        "data": []
                    },
                    "change_orders": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800007/relationships/change_orders",
                            "related": "http://localhostx:3000/api/project/800007/change_orders"
                        },
                        "data": []
                    },
                    "specications": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800007/relationships/specications",
                            "related": "http://localhostx:3000/api/project/800007/specications"
                        },
                        "data": []
                    },
                    "selections": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800007/relationships/selections",
                            "related": "http://localhostx:3000/api/project/800007/selections"
                        },
                        "data": []
                    },
                    "bids": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800007/relationships/bids",
                            "related": "http://localhostx:3000/api/project/800007/bids"
                        },
                        "data": []
                    },
                    "files": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800007/relationships/files",
                            "related": "http://localhostx:3000/api/project/800007/files"
                        },
                        "data": []
                    }
                }
            },
            {
                "type": "project",
                "id": 800008,
                "attributes": {
                    "created_at": "2024-05-08T04:09:40.960Z",
                    "updated_at": "2024-05-08T04:09:40.960Z",
                    "active": true,
                    "home_owner_id": 100008,
                    "gc_business_id": 200001,
                    "name": "Chris'shome",
                    "description": "Chris'shome",
                    "address1": "3404CampbellDr",
                    "address2": "UNIT15",
                    "state": "NC",
                    "zipcode": "28205",
                    "status": "in progress",
                    "project_type": "CustomHome",
                    "contract_type": "fixed",
                    "budget_estimated": "340000",
                    "actual_spent": "170000",
                    "percentage_complete": "81",
                    "notes": "Constructionstarted-7",
                    "start_date": "2024-11-22T00:00:00.000Z",
                    "end_date": "2025-09-23T00:00:00.000Z",
                    "exception_notes": "exceptionnotes-7",
                    "exception_dates": [],
                    "document_urls": []
                },
                "links": {
                    "self": "http://localhostx:3000/api/project/800008"
                },
                "relationships": {
                    "home_owner": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800008/relationships/home_owner",
                            "related": "http://localhostx:3000/api/project/800008/home_owner"
                        },
                        "data": {
                            "type": "user",
                            "id": 100008
                        }
                    },
                    "gc_business": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800008/relationships/gc_business",
                            "related": "http://localhostx:3000/api/project/800008/gc_business"
                        },
                        "data": {
                            "type": "business",
                            "id": 200001
                        }
                    },
                    "project_assignments": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800008/relationships/project_assignments",
                            "related": "http://localhostx:3000/api/project/800008/project_assignments"
                        },
                        "data": [
                            {
                                "type": "project_Assignments",
                                "id": 130008
                            },
                            {
                                "type": "project_Assignments",
                                "id": 130016
                            }
                        ]
                    },
                    "tasks": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800008/relationships/tasks",
                            "related": "http://localhostx:3000/api/project/800008/tasks"
                        },
                        "data": []
                    },
                    "punch_list": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800008/relationships/punch_list",
                            "related": "http://localhostx:3000/api/project/800008/punch_list"
                        },
                        "data": []
                    },
                    "daily_logs": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800008/relationships/daily_logs",
                            "related": "http://localhostx:3000/api/project/800008/daily_logs"
                        },
                        "data": []
                    },
                    "progression_notes": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800008/relationships/progression_notes",
                            "related": "http://localhostx:3000/api/project/800008/progression_notes"
                        },
                        "data": []
                    },
                    "change_orders": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800008/relationships/change_orders",
                            "related": "http://localhostx:3000/api/project/800008/change_orders"
                        },
                        "data": []
                    },
                    "specications": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800008/relationships/specications",
                            "related": "http://localhostx:3000/api/project/800008/specications"
                        },
                        "data": []
                    },
                    "selections": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800008/relationships/selections",
                            "related": "http://localhostx:3000/api/project/800008/selections"
                        },
                        "data": []
                    },
                    "bids": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800008/relationships/bids",
                            "related": "http://localhostx:3000/api/project/800008/bids"
                        },
                        "data": []
                    },
                    "files": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800008/relationships/files",
                            "related": "http://localhostx:3000/api/project/800008/files"
                        },
                        "data": []
                    }
                }
            },
            {
                "type": "project",
                "id": 800009,
                "attributes": {
                    "created_at": "2024-05-08T04:09:40.960Z",
                    "updated_at": "2024-05-08T04:09:40.960Z",
                    "active": true,
                    "home_owner_id": 100001,
                    "gc_business_id": 200003,
                    "name": "Scheffler'shome",
                    "description": "Scheffler'shome",
                    "address1": "1316GoodwinAve",
                    "address2": "UNIT16",
                    "state": "NC",
                    "zipcode": "28205",
                    "status": "in progress",
                    "project_type": "CustomHome",
                    "contract_type": "fixed",
                    "budget_estimated": "360000",
                    "actual_spent": "180006",
                    "percentage_complete": "64",
                    "notes": "Constructionstarted-8",
                    "start_date": "2024-12-22T00:00:00.000Z",
                    "end_date": "2025-10-23T00:00:00.000Z",
                    "exception_notes": "exceptionnotes-8",
                    "exception_dates": [],
                    "document_urls": []
                },
                "links": {
                    "self": "http://localhostx:3000/api/project/800009"
                },
                "relationships": {
                    "home_owner": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800009/relationships/home_owner",
                            "related": "http://localhostx:3000/api/project/800009/home_owner"
                        },
                        "data": {
                            "type": "user",
                            "id": 100001
                        }
                    },
                    "gc_business": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800009/relationships/gc_business",
                            "related": "http://localhostx:3000/api/project/800009/gc_business"
                        },
                        "data": {
                            "type": "business",
                            "id": 200003
                        }
                    },
                    "project_assignments": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800009/relationships/project_assignments",
                            "related": "http://localhostx:3000/api/project/800009/project_assignments"
                        },
                        "data": []
                    },
                    "tasks": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800009/relationships/tasks",
                            "related": "http://localhostx:3000/api/project/800009/tasks"
                        },
                        "data": []
                    },
                    "punch_list": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800009/relationships/punch_list",
                            "related": "http://localhostx:3000/api/project/800009/punch_list"
                        },
                        "data": []
                    },
                    "daily_logs": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800009/relationships/daily_logs",
                            "related": "http://localhostx:3000/api/project/800009/daily_logs"
                        },
                        "data": []
                    },
                    "progression_notes": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800009/relationships/progression_notes",
                            "related": "http://localhostx:3000/api/project/800009/progression_notes"
                        },
                        "data": []
                    },
                    "change_orders": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800009/relationships/change_orders",
                            "related": "http://localhostx:3000/api/project/800009/change_orders"
                        },
                        "data": []
                    },
                    "specications": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800009/relationships/specications",
                            "related": "http://localhostx:3000/api/project/800009/specications"
                        },
                        "data": []
                    },
                    "selections": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800009/relationships/selections",
                            "related": "http://localhostx:3000/api/project/800009/selections"
                        },
                        "data": []
                    },
                    "bids": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800009/relationships/bids",
                            "related": "http://localhostx:3000/api/project/800009/bids"
                        },
                        "data": []
                    },
                    "files": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800009/relationships/files",
                            "related": "http://localhostx:3000/api/project/800009/files"
                        },
                        "data": []
                    }
                }
            },
            {
                "type": "project",
                "id": 800010,
                "attributes": {
                    "created_at": "2024-05-08T04:09:40.960Z",
                    "updated_at": "2024-05-08T04:09:40.960Z",
                    "active": true,
                    "home_owner_id": 100002,
                    "gc_business_id": 200002,
                    "name": "Harman'scharlottehome",
                    "description": "Harman'scharlottehome",
                    "address1": "8911SummerClubRd",
                    "address2": "",
                    "state": "NC",
                    "zipcode": "28277",
                    "status": "in progress",
                    "project_type": "Remodel",
                    "contract_type": "costplus",
                    "budget_estimated": "380000",
                    "actual_spent": "190007",
                    "percentage_complete": "76",
                    "notes": "Constructionstarted-9",
                    "start_date": "2024-04-23T00:00:00.000Z",
                    "end_date": "2025-11-23T00:00:00.000Z",
                    "exception_notes": "exceptionnotes-9",
                    "exception_dates": [],
                    "document_urls": []
                },
                "links": {
                    "self": "http://localhostx:3000/api/project/800010"
                },
                "relationships": {
                    "home_owner": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800010/relationships/home_owner",
                            "related": "http://localhostx:3000/api/project/800010/home_owner"
                        },
                        "data": {
                            "type": "user",
                            "id": 100002
                        }
                    },
                    "gc_business": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800010/relationships/gc_business",
                            "related": "http://localhostx:3000/api/project/800010/gc_business"
                        },
                        "data": {
                            "type": "business",
                            "id": 200002
                        }
                    },
                    "project_assignments": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800010/relationships/project_assignments",
                            "related": "http://localhostx:3000/api/project/800010/project_assignments"
                        },
                        "data": []
                    },
                    "tasks": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800010/relationships/tasks",
                            "related": "http://localhostx:3000/api/project/800010/tasks"
                        },
                        "data": []
                    },
                    "punch_list": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800010/relationships/punch_list",
                            "related": "http://localhostx:3000/api/project/800010/punch_list"
                        },
                        "data": []
                    },
                    "daily_logs": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800010/relationships/daily_logs",
                            "related": "http://localhostx:3000/api/project/800010/daily_logs"
                        },
                        "data": []
                    },
                    "progression_notes": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800010/relationships/progression_notes",
                            "related": "http://localhostx:3000/api/project/800010/progression_notes"
                        },
                        "data": []
                    },
                    "change_orders": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800010/relationships/change_orders",
                            "related": "http://localhostx:3000/api/project/800010/change_orders"
                        },
                        "data": []
                    },
                    "specications": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800010/relationships/specications",
                            "related": "http://localhostx:3000/api/project/800010/specications"
                        },
                        "data": []
                    },
                    "selections": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800010/relationships/selections",
                            "related": "http://localhostx:3000/api/project/800010/selections"
                        },
                        "data": []
                    },
                    "bids": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800010/relationships/bids",
                            "related": "http://localhostx:3000/api/project/800010/bids"
                        },
                        "data": []
                    },
                    "files": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800010/relationships/files",
                            "related": "http://localhostx:3000/api/project/800010/files"
                        },
                        "data": []
                    }
                }
            },
            {
                "type": "project",
                "id": 800011,
                "attributes": {
                    "created_at": "2024-05-08T04:09:40.960Z",
                    "updated_at": "2024-05-08T04:09:40.960Z",
                    "active": true,
                    "home_owner_id": 100003,
                    "gc_business_id": 200001,
                    "name": "Im'shome",
                    "description": "Im'shome",
                    "address1": "205BelleMeadeCt",
                    "address2": "UNIT17",
                    "state": "NC",
                    "zipcode": "28173",
                    "status": "in progress",
                    "project_type": "CustomHome",
                    "contract_type": "costplus",
                    "budget_estimated": "400000",
                    "actual_spent": "200008",
                    "percentage_complete": "45",
                    "notes": "Constructionstarted-10",
                    "start_date": "2024-05-24T00:00:00.000Z",
                    "end_date": "2025-05-27T00:00:00.000Z",
                    "exception_notes": "exceptionnotes-10",
                    "exception_dates": [],
                    "document_urls": []
                },
                "links": {
                    "self": "http://localhostx:3000/api/project/800011"
                },
                "relationships": {
                    "home_owner": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800011/relationships/home_owner",
                            "related": "http://localhostx:3000/api/project/800011/home_owner"
                        },
                        "data": {
                            "type": "user",
                            "id": 100003
                        }
                    },
                    "gc_business": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800011/relationships/gc_business",
                            "related": "http://localhostx:3000/api/project/800011/gc_business"
                        },
                        "data": {
                            "type": "business",
                            "id": 200001
                        }
                    },
                    "project_assignments": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800011/relationships/project_assignments",
                            "related": "http://localhostx:3000/api/project/800011/project_assignments"
                        },
                        "data": []
                    },
                    "tasks": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800011/relationships/tasks",
                            "related": "http://localhostx:3000/api/project/800011/tasks"
                        },
                        "data": []
                    },
                    "punch_list": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800011/relationships/punch_list",
                            "related": "http://localhostx:3000/api/project/800011/punch_list"
                        },
                        "data": []
                    },
                    "daily_logs": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800011/relationships/daily_logs",
                            "related": "http://localhostx:3000/api/project/800011/daily_logs"
                        },
                        "data": []
                    },
                    "progression_notes": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800011/relationships/progression_notes",
                            "related": "http://localhostx:3000/api/project/800011/progression_notes"
                        },
                        "data": []
                    },
                    "change_orders": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800011/relationships/change_orders",
                            "related": "http://localhostx:3000/api/project/800011/change_orders"
                        },
                        "data": []
                    },
                    "specications": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800011/relationships/specications",
                            "related": "http://localhostx:3000/api/project/800011/specications"
                        },
                        "data": []
                    },
                    "selections": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800011/relationships/selections",
                            "related": "http://localhostx:3000/api/project/800011/selections"
                        },
                        "data": []
                    },
                    "bids": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800011/relationships/bids",
                            "related": "http://localhostx:3000/api/project/800011/bids"
                        },
                        "data": []
                    },
                    "files": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800011/relationships/files",
                            "related": "http://localhostx:3000/api/project/800011/files"
                        },
                        "data": []
                    }
                }
            },
            {
                "type": "project",
                "id": 800012,
                "attributes": {
                    "created_at": "2024-05-08T04:09:40.960Z",
                    "updated_at": "2024-05-08T04:09:40.960Z",
                    "active": true,
                    "home_owner_id": 100004,
                    "gc_business_id": 200003,
                    "name": "Harman'sfortmillhome",
                    "description": "Harman'sfortmillhome",
                    "address1": "1062OrchardCt,FortMill,SC",
                    "address2": "#64A",
                    "state": "SC",
                    "zipcode": "29715",
                    "status": "in progress",
                    "project_type": "CustomHome",
                    "contract_type": "fixed",
                    "budget_estimated": "420000",
                    "actual_spent": "210009",
                    "percentage_complete": "49",
                    "notes": "Constructionstarted-11",
                    "start_date": "2024-04-25T00:00:00.000Z",
                    "end_date": "2025-03-23T00:00:00.000Z",
                    "exception_notes": "exceptionnotes-11",
                    "exception_dates": [],
                    "document_urls": []
                },
                "links": {
                    "self": "http://localhostx:3000/api/project/800012"
                },
                "relationships": {
                    "home_owner": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800012/relationships/home_owner",
                            "related": "http://localhostx:3000/api/project/800012/home_owner"
                        },
                        "data": {
                            "type": "user",
                            "id": 100004
                        }
                    },
                    "gc_business": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800012/relationships/gc_business",
                            "related": "http://localhostx:3000/api/project/800012/gc_business"
                        },
                        "data": {
                            "type": "business",
                            "id": 200003
                        }
                    },
                    "project_assignments": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800012/relationships/project_assignments",
                            "related": "http://localhostx:3000/api/project/800012/project_assignments"
                        },
                        "data": []
                    },
                    "tasks": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800012/relationships/tasks",
                            "related": "http://localhostx:3000/api/project/800012/tasks"
                        },
                        "data": []
                    },
                    "punch_list": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800012/relationships/punch_list",
                            "related": "http://localhostx:3000/api/project/800012/punch_list"
                        },
                        "data": []
                    },
                    "daily_logs": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800012/relationships/daily_logs",
                            "related": "http://localhostx:3000/api/project/800012/daily_logs"
                        },
                        "data": []
                    },
                    "progression_notes": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800012/relationships/progression_notes",
                            "related": "http://localhostx:3000/api/project/800012/progression_notes"
                        },
                        "data": []
                    },
                    "change_orders": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800012/relationships/change_orders",
                            "related": "http://localhostx:3000/api/project/800012/change_orders"
                        },
                        "data": []
                    },
                    "specications": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800012/relationships/specications",
                            "related": "http://localhostx:3000/api/project/800012/specications"
                        },
                        "data": []
                    },
                    "selections": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800012/relationships/selections",
                            "related": "http://localhostx:3000/api/project/800012/selections"
                        },
                        "data": []
                    },
                    "bids": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800012/relationships/bids",
                            "related": "http://localhostx:3000/api/project/800012/bids"
                        },
                        "data": []
                    },
                    "files": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800012/relationships/files",
                            "related": "http://localhostx:3000/api/project/800012/files"
                        },
                        "data": []
                    }
                }
            },
            {
                "type": "project",
                "id": 800030,
                "attributes": {
                    "created_at": "2024-05-08T04:09:40.960Z",
                    "updated_at": "2024-05-08T04:09:40.960Z",
                    "active": true,
                    "home_owner_id": 100005,
                    "gc_business_id": 200001,
                    "name": "Theegala'shome",
                    "description": "Theegala'shome",
                    "address1": "403SLongSt",
                    "address2": "",
                    "state": "NC",
                    "zipcode": "28144",
                    "status": "not yet started",
                    "project_type": "CustomHome",
                    "contract_type": "costplus",
                    "budget_estimated": "280000",
                    "actual_spent": "140003",
                    "percentage_complete": "72",
                    "notes": "Constructionstarted-4",
                    "start_date": "2024-08-22T00:00:00.000Z",
                    "end_date": "2025-07-24T00:00:00.000Z",
                    "exception_notes": "exceptionnotes-4",
                    "exception_dates": [],
                    "document_urls": []
                },
                "links": {
                    "self": "http://localhostx:3000/api/project/800030"
                },
                "relationships": {
                    "home_owner": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800030/relationships/home_owner",
                            "related": "http://localhostx:3000/api/project/800030/home_owner"
                        },
                        "data": {
                            "type": "user",
                            "id": 100005
                        }
                    },
                    "gc_business": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800030/relationships/gc_business",
                            "related": "http://localhostx:3000/api/project/800030/gc_business"
                        },
                        "data": {
                            "type": "business",
                            "id": 200001
                        }
                    },
                    "project_assignments": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800030/relationships/project_assignments",
                            "related": "http://localhostx:3000/api/project/800030/project_assignments"
                        },
                        "data": []
                    },
                    "tasks": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800030/relationships/tasks",
                            "related": "http://localhostx:3000/api/project/800030/tasks"
                        },
                        "data": []
                    },
                    "punch_list": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800030/relationships/punch_list",
                            "related": "http://localhostx:3000/api/project/800030/punch_list"
                        },
                        "data": []
                    },
                    "daily_logs": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800030/relationships/daily_logs",
                            "related": "http://localhostx:3000/api/project/800030/daily_logs"
                        },
                        "data": []
                    },
                    "progression_notes": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800030/relationships/progression_notes",
                            "related": "http://localhostx:3000/api/project/800030/progression_notes"
                        },
                        "data": []
                    },
                    "change_orders": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800030/relationships/change_orders",
                            "related": "http://localhostx:3000/api/project/800030/change_orders"
                        },
                        "data": []
                    },
                    "specications": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800030/relationships/specications",
                            "related": "http://localhostx:3000/api/project/800030/specications"
                        },
                        "data": []
                    },
                    "selections": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800030/relationships/selections",
                            "related": "http://localhostx:3000/api/project/800030/selections"
                        },
                        "data": []
                    },
                    "bids": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800030/relationships/bids",
                            "related": "http://localhostx:3000/api/project/800030/bids"
                        },
                        "data": []
                    },
                    "files": {
                        "links": {
                            "self": "http://localhostx:3000/api/project/800030/relationships/files",
                            "related": "http://localhostx:3000/api/project/800030/files"
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
                    "data.0.attributes.budget_estimated": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.0.attributes.actual_spent": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.0.attributes.percentage_complete": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.0.attributes.start_date": [
                        "Date"
                    ],
                    "data.0.attributes.end_date": [
                        "Date"
                    ],
                    "data.1.attributes.created_at": [
                        "Date"
                    ],
                    "data.1.attributes.updated_at": [
                        "Date"
                    ],
                    "data.1.attributes.budget_estimated": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.1.attributes.actual_spent": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.1.attributes.percentage_complete": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.1.attributes.start_date": [
                        "Date"
                    ],
                    "data.1.attributes.end_date": [
                        "Date"
                    ],
                    "data.2.attributes.created_at": [
                        "Date"
                    ],
                    "data.2.attributes.updated_at": [
                        "Date"
                    ],
                    "data.2.attributes.budget_estimated": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.2.attributes.actual_spent": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.2.attributes.percentage_complete": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.2.attributes.start_date": [
                        "Date"
                    ],
                    "data.2.attributes.end_date": [
                        "Date"
                    ],
                    "data.3.attributes.created_at": [
                        "Date"
                    ],
                    "data.3.attributes.updated_at": [
                        "Date"
                    ],
                    "data.3.attributes.budget_estimated": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.3.attributes.actual_spent": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.3.attributes.percentage_complete": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.3.attributes.start_date": [
                        "Date"
                    ],
                    "data.3.attributes.end_date": [
                        "Date"
                    ],
                    "data.4.attributes.created_at": [
                        "Date"
                    ],
                    "data.4.attributes.updated_at": [
                        "Date"
                    ],
                    "data.4.attributes.budget_estimated": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.4.attributes.actual_spent": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.4.attributes.percentage_complete": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.4.attributes.start_date": [
                        "Date"
                    ],
                    "data.4.attributes.end_date": [
                        "Date"
                    ],
                    "data.5.attributes.created_at": [
                        "Date"
                    ],
                    "data.5.attributes.updated_at": [
                        "Date"
                    ],
                    "data.5.attributes.budget_estimated": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.5.attributes.actual_spent": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.5.attributes.percentage_complete": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.5.attributes.start_date": [
                        "Date"
                    ],
                    "data.5.attributes.end_date": [
                        "Date"
                    ],
                    "data.6.attributes.created_at": [
                        "Date"
                    ],
                    "data.6.attributes.updated_at": [
                        "Date"
                    ],
                    "data.6.attributes.budget_estimated": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.6.attributes.actual_spent": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.6.attributes.percentage_complete": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.6.attributes.start_date": [
                        "Date"
                    ],
                    "data.6.attributes.end_date": [
                        "Date"
                    ],
                    "data.7.attributes.created_at": [
                        "Date"
                    ],
                    "data.7.attributes.updated_at": [
                        "Date"
                    ],
                    "data.7.attributes.budget_estimated": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.7.attributes.actual_spent": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.7.attributes.percentage_complete": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.7.attributes.start_date": [
                        "Date"
                    ],
                    "data.7.attributes.end_date": [
                        "Date"
                    ],
                    "data.8.attributes.created_at": [
                        "Date"
                    ],
                    "data.8.attributes.updated_at": [
                        "Date"
                    ],
                    "data.8.attributes.budget_estimated": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.8.attributes.actual_spent": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.8.attributes.percentage_complete": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.8.attributes.start_date": [
                        "Date"
                    ],
                    "data.8.attributes.end_date": [
                        "Date"
                    ],
                    "data.9.attributes.created_at": [
                        "Date"
                    ],
                    "data.9.attributes.updated_at": [
                        "Date"
                    ],
                    "data.9.attributes.budget_estimated": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.9.attributes.actual_spent": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.9.attributes.percentage_complete": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.9.attributes.start_date": [
                        "Date"
                    ],
                    "data.9.attributes.end_date": [
                        "Date"
                    ],
                    "data.10.attributes.created_at": [
                        "Date"
                    ],
                    "data.10.attributes.updated_at": [
                        "Date"
                    ],
                    "data.10.attributes.budget_estimated": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.10.attributes.actual_spent": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.10.attributes.percentage_complete": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.10.attributes.start_date": [
                        "Date"
                    ],
                    "data.10.attributes.end_date": [
                        "Date"
                    ],
                    "data.11.attributes.created_at": [
                        "Date"
                    ],
                    "data.11.attributes.updated_at": [
                        "Date"
                    ],
                    "data.11.attributes.budget_estimated": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.11.attributes.actual_spent": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.11.attributes.percentage_complete": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.11.attributes.start_date": [
                        "Date"
                    ],
                    "data.11.attributes.end_date": [
                        "Date"
                    ],
                    "data.12.attributes.created_at": [
                        "Date"
                    ],
                    "data.12.attributes.updated_at": [
                        "Date"
                    ],
                    "data.12.attributes.budget_estimated": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.12.attributes.actual_spent": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.12.attributes.percentage_complete": [
                        [
                            "custom",
                            "Decimal"
                        ]
                    ],
                    "data.12.attributes.start_date": [
                        "Date"
                    ],
                    "data.12.attributes.end_date": [
                        "Date"
                    ]
                }
            },
            "total": 13
        }
    }
    res.status(200).json(json)
}