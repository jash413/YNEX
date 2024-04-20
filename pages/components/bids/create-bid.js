import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import network from "@/config";
import axios from "axios";
import {z} from "zod";
const CountUp = dynamic(() => import("react-countup"), { ssr: false });
const today = new Date();
const isoDate = today.toISOString();

const formDataSchema = z.object({
  budget_amount: z.string().nonempty({ message: "Budget Amount is required" }),
  bid_amount_from_sub: z
    .string()
    .nonempty({ message: "Bid Amount From Sub is required" }),
  bid_status: z.string().nonempty({ message: "Bid Status is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
  bid_details_from_sub: z
    .string()
    .nonempty({ message: "Bid Details From Sub is required" }),
  bid_outscope: z.string().nonempty({ message: "Bid Outscope is required" }),
  bid_inscope: z.string().nonempty({ message: "Bid Inscope is required" }),
  subcontractor_id: z
    .string()
    .nonempty({ message: "Subcontractor ID is required" }),
  bid_notes: z.string().nonempty({ message: "Bid Notes is required" }),
  bid_payment_terms: z
    .string()
    .nonempty({ message: "Bid Payment Terms is required" }),
});

const CreateBid = () => {
  const [formData, setFormData] = useState({
    selectedProject: "",
    selectedTask: "",
    cost_code_id: "",
    description: "",
    budget_amount: "",
    bid_amount_from_sub: "",
    bid_details_from_sub: "",
    bid_inscope: "",
    bid_outscope: "",
    bid_payment_terms: "",
    bid_recieved_date: isoDate,
    bid_status: "",
    subcontractor_id: "",
    bid_notes: "",
  });
  const [selectedProject, setSelectedProject] = useState(null);

  const [projectData, setProjectData] = useState([]);
  const [selectedTaskCostCodes, setSelectedTaskCostCodes] = useState([]);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${network.serverUrl}api/projectdata/`)
      .then((response) => {
        const data = response.data;
        console.log("data of API", data);
        setProjectData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  let project;
  if (typeof window !== "undefined") {
    project = localStorage.getItem("selectedProject");
  }
  
  useEffect(() => {
    if (project) {
      setSelectedProject(JSON.parse(project));
      setFormData((prevState) => ({
        ...prevState,
        selectedProject: project.project_name,
      }));
    }
  },[project]);

const handleSubmit = (event) => {
  event.preventDefault();

  try {
    formDataSchema.parse(formData);

    
    setFormData({
      selectedProject: "",
      selectedTask: "",
      cost_code_id: "",
      description: "",
      budget_amount: "",
      bid_amount_from_sub: "",
      bid_details_from_sub: "",
      bid_inscope: "",
      bid_outscope: "",
      bid_payment_terms: "",
      bid_recieved_date: "",
      bid_status: "",
      subcontractor_id: "",
      bid_notes: "",
    });
  } catch (error) {
    console.log(error);
  }
};
  return (
    <div>
      <Seo title={"Create Bid"} />
      <Pageheader
        currentpage="Create View"
        activepage="Bids"
        mainpage="Create View"
        projectData={projectData}
      />
      <div className="flex justify-between">
        <div className="ml-auto"></div>
      </div>
      <div className="box">
        <div className="box-body">
          <div className="box custom-box">
            <div className="box-header">
              <div className="box-title">Select Your Project and Task</div>
            </div>
            <div className="grid grid-cols-12 sm:gap-x-6 sm:gap-y-4 p-4">
              <div className="md:col-span-6 col-span-12 mb-4">
                <label className="form-label">Select Task/Trade Name</label>
                <Select
                  name="task"
                  isDisabled={! selectedProject}
                  options={
                    selectedProject
                      ? selectedProject.tasks.map((task) => ({
                          value: task.task_id,
                          label: task.task_name,
                        }))
                      : []
                  }
                  className="js-example-basic-single w-full"
                  isSearchable
                  menuPlacement="auto"
                  classNamePrefix="Select2"
                  placeholder="Select Task"
                  onChange={(e) => {
                    const selectedTask = selectedProject.tasks.find(
                      (task) => task.task_id === e.value
                    );
                    setFormData((prevState) => ({
                      ...prevState,
                      selectedTask: selectedTask.task_name,
                      selectedCostCode: selectedTask.cost_code_id,
                    }));
                    setSelectedTaskCostCodes([selectedTask.cost_code_id]);
                  }}
                />
              </div>
              <div className="md:col-span-6 col-span-12 mb-4">
                <label className="form-label">Cost Code</label>
                <Select
                  name="cost_code"
                  id="cost_code_id"
                  isDisabled={selectedTaskCostCodes.length === 0}
                  options={selectedTaskCostCodes.map((cost_code) => ({
                    value: cost_code,
                    label: cost_code,
                  }))}
                  className="js-example-basic-single w-full"
                  isSearchable
                  menuPlacement="auto"
                  classNamePrefix="Select2"
                  placeholder="Select Cost Code"
                  onChange={(e) => {
                    setFormData((prevState) => ({
                      ...prevState,
                      cost_code_id: e.value,
                    }));
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="box-header justify-between">
          <div className="box-title">Create a new Bid</div>
        </div>
        <div className="box-body">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div className="mb-4">
                <label htmlFor="budget_amount" className="form-label">
                  Budget Amount
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="budget_amount"
                  value={formData.budget_amount}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="bid_amount_from_sub" className="form-label">
                  Bid Amount From Sub
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bid_amount_from_sub"
                  value={formData.bid_amount_from_sub}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="bid_status" className="form-label">
                  Bid Status
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bid_status"
                  value={formData.bid_status}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  cols="50"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="bid_details_from_sub" className="form-label">
                  Bid Details From Sub
                </label>
                <textarea
                  className="form-control"
                  id="bid_details_from_sub"
                  rows="3"
                  cols="50"
                  value={formData.bid_details_from_sub}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="bid_outscope" className="form-label">
                  Bid Outscope
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="bid_outscope"
                    value={formData.bid_outscope}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="bid_inscope" className="form-label">
                  Bid Inscope
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="bid_inscope"
                    value={formData.bid_inscope}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subcontractor_id" className="form-label">
                  Subcontractor ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subcontractor_id"
                  value={formData.subcontractor_id}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="bid_notes" className="form-label">
                  Bid Notes
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bid_notes"
                  value={formData.bid_notes}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="bid_payment_terms" className="form-label">
                  Bid Payment Terms
                </label>
                <textarea
                  className="form-control"
                  id="bid_payment_terms"
                  rows="3"
                  cols="50"
                  value={formData.bid_payment_terms}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <button className="ti-btn ti-btn-primary-full" type="submit">
              Create Bid
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
CreateBid.layout = "Contentlayout";

export default CreateBid;
