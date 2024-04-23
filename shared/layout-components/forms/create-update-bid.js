import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { z } from "zod";
const today = new Date();
const isoDate = today.toISOString();
import network from "@/config";

const formDataSchema = z.object({
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
    bid_amount: "",
    bid_details: "",
    bid_inscope: [{ bidDetail: "" }],
    bid_outscope: [{ bidDetail: "" }],
    bid_payment_terms: "",
    bid_recieved_date: isoDate,
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
            bid_amount_from_sub: response.data.bid_amount_from_sub,
            bid_details_from_sub: response.data.bid_details_from_sub,
            // bid_inscope: response.data.bid_inscope,
            // bid_outscope: response.data.bid_outscope,
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

  const handleBidChange = (e, index, field) => {
    const newBids = [...formData[field]];
    newBids[index][e.target.name] = e.target.value;
    setFormData({ ...formData, [field]: newBids });
  };

  const handleAddBid = (field) => {
    setFormData({
      ...formData,
      [field]: [...formData[field], { bidDetail: "" }],
    });
  };

  const handleRemoveBid = (index, field) => {
    const newBids = [...formData[field]];
    newBids.splice(index, 1);
    setFormData({ ...formData, [field]: newBids });
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
        bid_amount: "",
        bid_details: "",
        // bid_inscope:  [],
        // bid_outscope:  [],
        bid_payment_terms: "",
        bid_recieved_date: isoDate,
        bid_notes: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
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
                <label htmlFor="bid_details" className="form-label">
                  Bid Details
                </label>
                <textarea
                  className="form-control"
                  id="bid_details"
                  rows="3"
                  cols="50"
                  value={formData.bid_details}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="bid_notes" className="form-label">
                  Bid Notes
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  cols="50"
                  id="bid_notes"
                  value={formData.bid_notes}
                  onChange={handleInputChange}
                />
              </div>

              {formData.bid_inscope.map((bid, index) => (
                <div key={index}>
                  <div className="row g-3 align-items-center">
                    <div className="col-md-5">
                      <label className="form-label">
                        Bid Inscope {index + 1}
                      </label>
                      <input
                        type="text"
                        id={`bid_inscope_${index}`}
                        name="bidDetail"
                        value={bid.bidDetail}
                        onChange={(e) =>
                          handleBidChange(e, index, "bid_inscope")
                        }
                        className="form-control"
                      />
                    </div>
                    {index > 0 && (
                      <div className="col-md-1">
                        <button
                          type="button"
                          className="ti-btn ti-btn-danger-full"
                          onClick={() => handleRemoveBid(index, "bid_inscope")}
                        >
                          -
                        </button>
                      </div>
                    )}
                  </div>
                  {index === formData.bid_inscope.length - 1 && (
                    <div className="d-flex justify-content-between mt-2">
                      <button
                        type="button"
                        className="ti-btn ti-btn-success-full"
                        onClick={() => handleAddBid("bid_inscope")}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              ))}

              {formData.bid_outscope.map((bid, index) => (
                <div key={index}>
                  <div className="row g-3 align-items-center">
                    <div className="col-md-5">
                      <label className="form-label">
                        Bid Outscope {index + 1}
                      </label>
                      <input
                        type="text"
                        id={`bid_outscope_${index}`}
                        name="bidDetail"
                        value={bid.bidDetail}
                        onChange={(e) =>
                          handleBidChange(e, index, "bid_outscope")
                        }
                        className="form-control"
                      />
                    </div>
                    {index > 0 && (
                      <div className="col-md-1">
                        <button
                          type="button"
                          className="ti-btn ti-btn-danger-full"
                          onClick={() => handleRemoveBid(index, "bid_outscope")}
                        >
                          -
                        </button>
                      </div>
                    )}
                  </div>
                  {index === formData.bid_outscope.length - 1 && (
                    <div className="d-flex justify-content-between mt-2">
                      <button
                        type="button"
                        className="ti-btn ti-btn-success-full"
                        onClick={() => handleAddBid("bid_outscope")}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              ))}

              <div className="mb-4">
                <label htmlFor="bid_amount" className="form-label">
                  Bid Amount
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="bid_amount"
                  value={formData.bid_amount}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <button className="ti-btn ti-btn-primary-full" type="submit">
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
