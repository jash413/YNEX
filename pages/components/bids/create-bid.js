import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import network from "@/config";
import axios from "axios";
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

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
    bid_expiration_date: "",
    bid_recieved_date: "",
    builder_markup: "",
    builder_markup_percentage: "",
    builder_notes: "",
    bid_status: "",
    subcontractor_id: "",
    bid_notes: "",
  });
  const [selectedProject, setSelectedProject] = useState(null);

  const [projectData, setProjectData] = useState([]);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${network.serverUrl}api/projectdata/`)
      .then((response) => {
        const data = response.data;
        console.log("Data from API:", data); // This line will print the data to the console
        setProjectData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset formData state

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
      bid_expiration_date: "",
      bid_recieved_date: "",
      builder_markup: "",
      builder_markup_percentage: "",
      builder_notes: "",
      bid_status: "",
      subcontractor_id: "",
      bid_notes: "",
    });
  };

  return (
    <div>
      <Seo title={"Create Bid"} />
      <Pageheader
        currentpage="Create View"
        activepage="Bids"
        mainpage="Create View"
      />
      <div className="box">
        <div className="box-body">
          <div className="box custom-box">
            <div className="box-header">
              <div className="box-title">Select Your Project and Task</div>
            </div>
            <div className="grid grid-cols-12 sm:gap-x-6 sm:gap-y-4 p-4">
              <div className="md:col-span-6 col-span-12 mb-4">
                <label className="form-label">Select Project</label>
                <Select
                  name="project"
                  options={projectData.map((project) => ({
                    value: project.project_id,
                    label: project.project_name,
                  }))}
                  className="js-example-basic-single w-full"
                  isSearchable
                  menuPlacement="auto"
                  classNamePrefix="Select2"
                  placeholder="Select Project"
                  onChange={(e) => {
                    const selectedProject = projectData.find(
                      (project) => project.project_id === e.value
                    );
                    setSelectedProject(selectedProject);
                    setFormData((prevState) => ({
                      ...prevState,
                      selectedProject: selectedProject.project_name,
                    }));
                  }}
                />
              </div>
              <div className="md:col-span-6 col-span-12 mb-4">
                <label className="form-label">Select Task/Trade Name</label>
                <Select
                  name="task"
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
                <label htmlFor="cost_code_id" className="form-label">
                  Cost Code ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cost_code_id"
                  value={formData.cost_code_id}
                  onChange={handleInputChange}
                />
              </div>

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
                <label htmlFor="bid_expiration_date" className="form-label">
                  Bid Expiration Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="bid_expiration_date"
                  value={formData.bid_expiration_date}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="bid_recieved_date" className="form-label">
                  Bid Received Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="bid_recieved_date"
                  value={formData.bid_recieved_date}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="builder_markup" className="form-label">
                  Builder Markup
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="builder_markup"
                  value={formData.builder_markup}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="builder_markup_percentage"
                  className="form-label"
                >
                  Builder Markup Percentage
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="builder_markup_percentage"
                  value={formData.builder_markup_percentage}
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

              <div className="mb-4">
                <label htmlFor="builder_notes" className="form-label">
                  Builder Notes
                </label>
                <textarea
                  className="form-control"
                  id="builder_notes"
                  rows="3"
                  cols="50"
                  value={formData.builder_notes}
                  onChange={handleInputChange}
                />
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
