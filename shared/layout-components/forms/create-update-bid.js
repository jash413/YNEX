import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { z } from "zod";
const today = new Date();
const isoDate = today.toISOString();
import network from "@/config";
import BidDetails from "@/shared/layout-components/forms/bid-details";

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

const CreateUpdateBid = (props) => {
  const formType = props.formType;
  const bidId = props.bidId;
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
  const [selectedTaskCostCodes, setSelectedTaskCostCodes] = useState([]);

  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  useEffect(() => {
    if (bidId) {
      const fetchBidDetails = async () => {
        try {
          const response = await axios.get(`${network.serverUrl}api/${bidId}`);
          setFormData({
            selectedProject: response.data.selectedProject,
            selectedTask: response.data.selectedTask,
            cost_code_id: response.data.cost_code_id,
            description: response.data.description,
            budget_amount: response.data.budget_amount,
            bid_amount_from_sub: response.data.bid_amount_from_sub,
            bid_details_from_sub: response.data.bid_details_from_sub,
            bid_inscope: response.data.bid_inscope,
            bid_outscope: response.data.bid_outscope,
            bid_payment_terms: response.data.bid_payment_terms,
            bid_recieved_date: response.data.bid_recieved_date,
            bid_status: response.data.bid_status,
            subcontractor_id: response.data.subcontractor_id["id"],
            bid_notes: response.data.bid_notes,
          });
        } catch (error) {
          console.error(error);
        }
      };
      fetchBidDetails();
    }
  }, [bidId]);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const getDataFromLocalStorage = () => {
    const selectedProject = JSON.parse(localStorage.getItem("selectedProject"));
    setSelectedProject(selectedProject);
  };

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
      <div id="hs-full-screen-modal" className="hs-overlay hidden ti-modal">
        <div className="hs-overlay-open:mt-0 ti-modal-box mt-10 !m-0 !max-w-full !w-full">
          <div className="ti-modal-content !rounded-none">
            <div className="ti-modal-header">
              <h6 className="ti-modal-title">PREVIEW BID DETAILS</h6>
              <button
                type="button"
                className="hs-dropdown-toggle ti-modal-close-btn"
                data-hs-overlay="#hs-full-screen-modal"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-3.5 h-3.5"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div className="ti-modal-body">
              <BidDetails
                bidsData={{
                  bid_amount_from_sub: formData.bid_amount_from_sub,
                  bid_details_from_sub: formData.bid_details_from_sub,
                  bid_inscope: formData.bid_inscope,
                  bid_notes: formData.bid_notes,
                  bid_outscope: formData.bid_outscope,
                  bid_payment_terms: formData.bid_payment_terms,
                  bid_recieved_date: formData.bid_recieved_date,
                  bid_status: formData.bid_status,
                  budget_amount: formData.budget_amount,
                  cost_code_id: formData.cost_code_id,
                  description: formData.description,
                  selectedProject: formData.selectedProject,
                  subcontractor_id: formData.subcontractor_id,
                  selectedTask: formData.selectedTask,
                }}
                showEditBtn={false}
              />
            </div>
            <div className="ti-modal-footer">
              <button
                type="button"
                className="hs-dropdown-toggle ti-btn ti-btn-secondary-full"
                data-hs-overlay="#hs-full-screen-modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Seo title={`${formType === "update" ? "Update Bid" : "Create Bid"}`} />
      <Pageheader
        currentpage={`${formType === "update" ? "Update Bid" : "Create Bid"}`}
        activepage="Bids"
        mainpage={`Bids ${formType === "update" ? "Update" : "Create"}`}
        loadProjectData={getDataFromLocalStorage}
      />
      <div className="flex justify-between">
        <div className="ml-auto"></div>
      </div>
      <div className="box custom-box">
        <div className="box-header">
          <div className="box-title">Select Your Task And Cost Code</div>
        </div>
        <div className="grid grid-cols-12 sm:gap-x-6 sm:gap-y-4 p-4">
          <div className="md:col-span-6 col-span-12 mb-4">
            <label className="form-label">Select Task/Trade Name</label>
            <Select
              name="task"
              className="js-example-basic-single w-full"
              isDisabled={!selectedProject}
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
              onClick={getDataFromLocalStorage}
              options={
                selectedProject &&
                selectedProject.tasks.map((task) => ({
                  value: task.task_id,
                  label: task.task_name,
                }))
              }
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
      <div className="box">
        <div className="box-header justify-between">
          <div className="box-title">{`${
            formType === "update" ? "Update Bid" : "Create A New Bid"
          }`}</div>
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
            <button
              className="ti-btn ti-btn-primary-full"
              type="submit"
              data-hs-overlay="#hs-full-screen-modal"
            >
              {formType === "update" ? "Update Bid" : "Create Bid"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
CreateUpdateBid.layout = "Contentlayout";

export default CreateUpdateBid;
