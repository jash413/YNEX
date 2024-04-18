const bidData = [
  {
    bid_id: 1000100,
    project_id: 200,
    project_name: "Jim house",
    task_id: 1000,
    task_name: "Roughin",
    cost_code_id: "RGH100",
    description: "Roughing to be done for 500 sft",
    budget_amount: 5000,
    bid_amount_from_sub: 4500,
    bid_details_from_sub: "JSONB",
    bid_inscope: "All Materials, labor, sewer",
    bid_outscope: "inspections, repair",
    bid_payment_terms:
      "35% upfront, 40% after completion, 25% after inspection",
    bid_expiration_date: "2024-04-20",
    bid_recieved_date: "2024-04-19",
    bid_document_urls: [
      { url_id: "http://www.google.com" },
      { url_id: "http://www.yahoo.com" },
    ],
    builder_markup: "400",
    builder_markup_percentage: "5.7%",
    builder_notes: "Builder want to complete this job in 2 months",
    bid_status: "Not submitted",
    subcontractor_id: {
      id: 4000,
      Name: " Jims Rough in",
      Rating: "*****",
      Builder_notes: "Excellent and on time",
    },
    bid_notes: "Cost should not exceed 4500 USD",
  },

  {
    bid_id: 1000101,
    project_id: 200,
    project_name: "Jim house",
    task_id: 1000,
    task_name: "Roughin",
    cost_code_id: "RGH100",
    description: "Roughing to be done for 500 sft",
    budget_amount: 5000,
    bid_amount_from_sub: 4500,
    bid_details_from_sub: "JSONB",
    bid_inscope: "No Materials, labor, sewer",
    bid_outscope: "No inspections, repair",
    bid_payment_terms:
      "31% upfront, 42% after completion, 27% after inspection",
    bid_expiration_date: "2024-04-20",
    bid_recieved_date: "2024-04-19",
    bid_document_urls: [
      { url_id: "http://www.foxnews.com" },
      { url_id: "http://www.cnbc.com" },
    ],
    builder_markup: "400",
    builder_markup_percentage: "5.7%",
    builder_notes: "Builder want to complete this job in 2 months",
    bid_status: "Not submitted",
    subcontractor_id: {
      id: 4001,
      Name: " Joes Rough in",
      Rating: "****",
      Builder_notes: "Good and on time",
    },
    bid_notes: "Cost should not exceed 4500 USD",
  },

  {
    bid_id: 1000103,
    project_id: 200,
    project_name: "Jim house",
    task_id: 1001,
    task_name: "Footings and foundation",
    cost_code_id: "EAF110",
    description: "Footings to be done for 500 sft",
    budget_amount: 6000,
    bid_amount_from_sub: 5500,
    bid_details_from_sub: "JSONB",
    bid_inscope: "All Materials, labor, sewer",
    bid_outscope: "inspections, repair",
    bid_payment_terms:
      "25% upfront, 45% after completion, 30% after inspection",
    bid_expiration_date: "2024-04-21",
    bid_recieved_date: "2024-04-20",
    bid_document_urls: [
      { url_id: "http://www.msn.com" },
      { url_id: "http://www.cnn.com" },
    ],
    builder_markup: "400",
    builder_markup_percentage: "5.7%",
    builder_notes: "Builder want to complete this job in 3 months",
    bid_status: "Not submitted",
    subcontractor_id: {
      id: 4002,
      Name: " John Footings",
      Rating: "***",
      Builder_notes: "ok and delayed",
    },
    bid_notes: "Cost should not exceed 4500 USD",
  },

  {
    bid_id: 1000104,
    project_id: 200,
    project_name: "Jim house",
    task_id: 1001,
    task_name: "Footings and foundation",
    cost_code_id: "EAF110",
    description: "Footings to be done for 500 sft",
    budget_amount: 6000,
    bid_amount_from_sub: 5500,
    bid_details_from_sub: "JSONB",
    bid_inscope: "No Materials, labor, sewer",
    bid_outscope: "No inspections, repair",
    bid_payment_terms:
      "30% upfront, 40% after completion, 30% after inspection",
    bid_expiration_date: "2024-04-21",
    bid_recieved_date: "2024-04-20",
    bid_document_urls: [
      { url_id: "http://www.google1.com" },
      { url_id: "http://www.yahoo1.com" },
    ],
    builder_markup: "400",
    builder_markup_percentage: "5.7%",
    builder_notes: "Builder want to complete this job in 3 months",
    bid_status: "Not submitted",
    subcontractor_id: {
      id: 4003,
      Name: " Sams foundation",
      Rating: "*****",
      Builder_notes: "Excellent and but sometimes delayed",
    },
    bid_notes: "Cost should not exceed 4500 USD",
  },

  {
    bid_id: 1000105,
    project_id: 200,
    project_name: "Jim house",
    task_id: 1002,
    task_name: "Concrete block",
    cost_code_id: "EAF120",
    description: "Concrete block to be done for 500 sft",
    budget_amount: 7000,
    bid_amount_from_sub: 6500,
    bid_details_from_sub: "JSONB",
    bid_inscope: "All Materials, labor, sewer",
    bid_outscope: "inspections, repair",
    bid_payment_terms:
      "35% upfront, 40% after completion, 25% after inspection",
    bid_expiration_date: "2024-04-22",
    bid_recieved_date: "2024-04-21",
    bid_document_urls: [
      { url_id: "http://www.google2.com" },
      { url_id: "http://www.yahoo2.com" },
    ],
    builder_markup: "400",
    builder_markup_percentage: "5.7%",
    builder_notes: "Builder want to complete this job in 2 months",
    bid_status: "Not submitted",
    subcontractor_id: {
      id: 4004,
      Name: " Alex Concrete",
      Rating: "*****",
      Builder_notes: "Excellent and on time",
    },
    bid_notes: "Cost should not exceed 6500 USD",
  },

  {
    bid_id: 1000106,
    project_id: 200,
    project_name: "Jim house",
    task_id: 1002,
    task_name: "Concrete block",
    cost_code_id: "EAF120",
    description: "Concrete block to be done for 500 sft",
    budget_amount: 7000,
    bid_amount_from_sub: 6500,
    bid_details_from_sub: "JSONB",
    bid_inscope: "All Materials, no labor, sewer",
    bid_outscope: "inspections, no repair",
    bid_payment_terms:
      "35% upfront, 40% after completion, 25% after inspection",
    bid_expiration_date: "2024-04-22",
    bid_recieved_date: "2024-04-21",
    bid_document_urls: [
      { url_id: "http://www.google3.com" },
      { url_id: "http://www.yahoo3.com" },
    ],
    builder_markup: "400",
    builder_markup_percentage: "5.7%",
    builder_notes: "Builder want to complete this job in 2 months",
    bid_status: "Not submitted",
    subcontractor_id: {
      id: 4005,
      Name: " Jones Concrete",
      Rating: "****",
      Builder_notes: "good and on time",
    },
    bid_notes: "Cost should not exceed 6500 USD",
  },

  {
    bid_id: 1000107,
    project_id: 200,
    project_name: "Jim house",
    task_id: 1003,
    task_name: "Waterproofing",
    cost_code_id: "RGH100",
    description: "Waterproofing to be done for 500 sft",
    budget_amount: 8000,
    bid_amount_from_sub: 7500,
    bid_details_from_sub: "JSONB",
    bid_inscope: "All Materials, labor, sewer",
    bid_outscope: "inspections, repair",
    bid_payment_terms:
      "33% upfront, 42% after completion, 25% after inspection",
    bid_expiration_date: "2024-04-23",
    bid_recieved_date: "2024-04-22",
    bid_document_urls: [
      { url_id: "http://www.google4.com" },
      { url_id: "http://www.yahoo4.com" },
    ],
    builder_markup: "400",
    builder_markup_percentage: "5.7%",
    builder_notes: "Builder want to complete this job in 2 months",
    bid_status: "Not submitted",
    subcontractor_id: {
      id: 4006,
      Name: " Jim water proofing in",
      Rating: "*****",
      Builder_notes: "Excellent and on time",
    },
    bid_notes: "Cost should not exceed 6500 USD",
  },

  {
    bid_id: 1000108,
    project_id: 200,
    project_name: "Jim house",
    task_id: 1003,
    task_name: "Waterproofing",
    cost_code_id: "RGH100",
    description: "Waterproofing to be done for 500 sft",
    budget_amount: 8000,
    bid_amount_from_sub: 7500,
    bid_details_from_sub: "JSONB",
    bid_inscope: "All Materials, labor, sewer",
    bid_outscope: "inspections, repair",
    bid_payment_terms:
      "33% upfront, 42% after completion, 25% after inspection",
    bid_expiration_date: "2024-04-23",
    bid_recieved_date: "2024-04-22",
    bid_document_urls: [
      { url_id: "http://www.google4.com" },
      { url_id: "http://www.yahoo4.com" },
    ],
    builder_markup: "400",
    builder_markup_percentage: "5.7%",
    builder_notes: "Builder want to complete this job in 2 months",
    bid_status: "Not submitted",
    subcontractor_id: {
      id: 4007,
      Name: " Jill water proofing in",
      Rating: "****",
      Builder_notes: "Excellent and not on time",
    },
    bid_notes: "Cost should not exceed 6500 USD",
  },

  {
    bid_id: 1000109,
    project_id: 201,
    project_name: "Jim house",
    task_id: 1004,
    task_name: "Roughin",
    cost_code_id: "RGH100",
    description: "Roughing to be done for 500 sft",
    budget_amount: 5000,
    bid_amount_from_sub: 4500,
    bid_details_from_sub: "JSONB",
    bid_inscope: "All Materials, labor, sewer",
    bid_outscope: "inspections, repair",
    bid_payment_terms:
      "35% upfront, 40% after completion, 25% after inspection",
    bid_expiration_date: "2024-04-20",
    bid_recieved_date: "2024-04-19",
    bid_document_urls: [
      { url_id: "http://www.google.com" },
      { url_id: "http://www.yahoo.com" },
    ],
    builder_markup: "400",
    builder_markup_percentage: "5.7%",
    builder_notes: "Builder want to complete this job in 2 months",
    bid_status: "Not submitted",
    subcontractor_id: {
      id: 4000,
      Name: " Jims Rough in",
      Rating: "*****",
      Builder_notes: "Excellent and on time",
    },
    bid_notes: "Cost should not exceed 4500 USD",
  },

  {
    bid_id: 1000110,
    project_id: 201,
    project_name: "Jim house",
    task_id: 1004,
    task_name: "Roughin",
    cost_code_id: "RGH100",
    description: "Roughing to be done for 500 sft",
    budget_amount: 5000,
    bid_amount_from_sub: 4500,
    bid_details_from_sub: "JSONB",
    bid_inscope: "All Materials, labor, sewer",
    bid_outscope: "inspections, repair",
    bid_payment_terms:
      "35% upfront, 40% after completion, 25% after inspection",
    bid_expiration_date: "2024-04-20",
    bid_recieved_date: "2024-04-19",
    bid_document_urls: [
      { url_id: "http://www.google.com" },
      { url_id: "http://www.yahoo.com" },
    ],
    builder_markup: "400",
    builder_markup_percentage: "5.7%",
    builder_notes: "Builder want to complete this job in 2 months",
    bid_status: "Not submitted",
    subcontractor_id: {
      id: 4000,
      Name: " Jims Rough in",
      Rating: "*****",
      Builder_notes: "Excellent and on time",
    },
    bid_notes: "Cost should not exceed 4500 USD",
  },

  {
    bid_id: 1000111,
    project_id: 201,
    project_name: "Jim house",
    task_id: 1005,
    task_name: "Roughin",
    cost_code_id: "RGH100",
    description: "Roughing to be done for 500 sft",
    budget_amount: 5000,
    bid_amount_from_sub: 4500,
    bid_details_from_sub: "JSONB",
    bid_inscope: "All Materials, labor, sewer",
    bid_outscope: "inspections, repair",
    bid_payment_terms:
      "35% upfront, 40% after completion, 25% after inspection",
    bid_expiration_date: "2024-04-20",
    bid_recieved_date: "2024-04-19",
    bid_document_urls: [
      { url_id: "http://www.google.com" },
      { url_id: "http://www.yahoo.com" },
    ],
    builder_markup: "400",
    builder_markup_percentage: "5.7%",
    builder_notes: "Builder want to complete this job in 2 months",
    bid_status: "Not submitted",
    subcontractor_id: {
      id: 4000,
      Name: " Jims Rough in",
      Rating: "*****",
      Builder_notes: "Excellent and on time",
    },
    bid_notes: "Cost should not exceed 4500 USD",
  },

  {
    bid_id: 1000112,
    project_id: 201,
    project_name: "Jim house",
    task_id: 1005,
    task_name: "Roughin",
    cost_code_id: "RGH100",
    description: "Roughing to be done for 500 sft",
    budget_amount: 5000,
    bid_amount_from_sub: 4500,
    bid_details_from_sub: "JSONB",
    bid_inscope: "All Materials, labor, sewer",
    bid_outscope: "inspections, repair",
    bid_payment_terms:
      "35% upfront, 40% after completion, 25% after inspection",
    bid_expiration_date: "2024-04-20",
    bid_recieved_date: "2024-04-19",
    bid_document_urls: [
      { url_id: "http://www.google.com" },
      { url_id: "http://www.yahoo.com" },
    ],
    builder_markup: "400",
    builder_markup_percentage: "5.7%",
    builder_notes: "Builder want to complete this job in 2 months",
    bid_status: "Not submitted",
    subcontractor_id: {
      id: 4000,
      Name: " Jims Rough in",
      Rating: "*****",
      Builder_notes: "Excellent and on time",
    },
    bid_notes: "Cost should not exceed 4500 USD",
  },

  {
    bid_id: 1000113,
    project_id: 201,
    project_name: "Jim house",
    task_id: 1006,
    task_name: "Roughin",
    cost_code_id: "RGH100",
    description: "Roughing to be done for 500 sft",
    budget_amount: 5000,
    bid_amount_from_sub: 4500,
    bid_details_from_sub: "JSONB",
    bid_inscope: "All Materials, labor, sewer",
    bid_outscope: "inspections, repair",
    bid_payment_terms:
      "35% upfront, 40% after completion, 25% after inspection",
    bid_expiration_date: "2024-04-20",
    bid_recieved_date: "2024-04-19",
    bid_document_urls: [
      { url_id: "http://www.google.com" },
      { url_id: "http://www.yahoo.com" },
    ],
    builder_markup: "400",
    builder_markup_percentage: "5.7%",
    builder_notes: "Builder want to complete this job in 2 months",
    bid_status: "Not submitted",
    subcontractor_id: {
      id: 4000,
      Name: " Jims Rough in",
      Rating: "*****",
      Builder_notes: "Excellent and on time",
    },
    bid_notes: "Cost should not exceed 4500 USD",
  },
  {
    bid_id: 1000115,
    project_id: 201,
    project_name: "Jim house",
    task_id: 1007,
    task_name: "Roughin",
    cost_code_id: "RGH100",
    description: "Roughing to be done for 500 sft",
    budget_amount: 5000,
    bid_amount_from_sub: 4500,
    bid_details_from_sub: "JSONB",
    bid_inscope: "All Materials, labor, sewer",
    bid_outscope: "inspections, repair",
    bid_payment_terms:
      "35% upfront, 40% after completion, 25% after inspection",
    bid_expiration_date: "2024-04-20",
    bid_recieved_date: "2024-04-19",
    bid_document_urls: [
      { url_id: "http://www.google.com" },
      { url_id: "http://www.yahoo.com" },
    ],
    builder_markup: "400",
    builder_markup_percentage: "5.7%",
    builder_notes: "Builder want to complete this job in 2 months",
    bid_status: "Not submitted",
    subcontractor_id: {
      id: 4000,
      Name: " Jims Rough in",
      Rating: "*****",
      Builder_notes: "Excellent and on time",
    },
    bid_notes: "Cost should not exceed 4500 USD",
  },
  {
    bid_id: 1000116,
    project_id: 201,
    project_name: "Jim house",
    task_id: 1007,
    task_name: "Roughin",
    cost_code_id: "RGH100",
    description: "Roughing to be done for 500 sft",
    budget_amount: 5000,
    bid_amount_from_sub: 4500,
    bid_details_from_sub: "JSONB",
    bid_inscope: "All Materials, labor, sewer",
    bid_outscope: "inspections, repair",
    bid_payment_terms:
      "35% upfront, 40% after completion, 25% after inspection",
    bid_expiration_date: "2024-04-20",
    bid_recieved_date: "2024-04-19",
    bid_document_urls: [
      { url_id: "http://www.google.com" },
      { url_id: "http://www.yahoo.com" },
    ],
    builder_markup: "400",
    builder_markup_percentage: "5.7%",
    builder_notes: "Builder want to complete this job in 2 months",
    bid_status: "Not submitted",
    subcontractor_id: {
      id: 4000,
      Name: " Jims Rough in",
      Rating: "*****",
      Builder_notes: "Excellent and on time",
    },
    bid_notes: "Cost should not exceed 4500 USD",
  },

  {
    bid_id: 1000117,
    project_id: 201,
    project_name: "Jim house",
    task_id: 1008,
    task_name: "Roughin",
    cost_code_id: "RGH100",
    description: "Roughing to be done for 500 sft",
    budget_amount: 5000,
    bid_amount_from_sub: 4500,
    bid_details_from_sub: "JSONB",
    bid_inscope: "All Materials, labor, sewer",
    bid_outscope: "inspections, repair",
    bid_payment_terms:
      "35% upfront, 40% after completion, 25% after inspection",
    bid_expiration_date: "2024-04-20",
    bid_recieved_date: "2024-04-19",
    bid_document_urls: [
      { url_id: "http://www.google.com" },
      { url_id: "http://www.yahoo.com" },
    ],
    builder_markup: "400",
    builder_markup_percentage: "5.7%",
    builder_notes: "Builder want to complete this job in 2 months",
    bid_status: "Not submitted",
    subcontractor_id: {
      id: 4000,
      Name: " Jims Rough in",
      Rating: "*****",
      Builder_notes: "Excellent and on time",
    },
    bid_notes: "Cost should not exceed 4500 USD",
  },

  {
    bid_id: 1000115,
    project_id: 201,
    project_name: "Jim house",
    task_id: 1008,
    task_name: "Roughin",
    cost_code_id: "RGH100",
    description: "Roughing to be done for 500 sft",
    budget_amount: 5000,
    bid_amount_from_sub: 4500,
    bid_details_from_sub: "JSONB",
    bid_inscope: "All Materials, labor, sewer",
    bid_outscope: "inspections, repair",
    bid_payment_terms:
      "35% upfront, 40% after completion, 25% after inspection",
    bid_expiration_date: "2024-04-20",
    bid_recieved_date: "2024-04-19",
    bid_document_urls: [
      { url_id: "http://www.google.com" },
      { url_id: "http://www.yahoo.com" },
    ],
    builder_markup: "400",
    builder_markup_percentage: "5.7%",
    builder_notes: "Builder want to complete this job in 2 months",
    bid_status: "Not submitted",
    subcontractor_id: {
      id: 4000,
      Name: " Jims Rough in",
      Rating: "*****",
      Builder_notes: "Excellent and on time",
    },
    bid_notes: "Cost should not exceed 4500 USD",
  },
];
export default bidData;
