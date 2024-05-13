import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { z } from "zod";
import { SingleButtons } from "@/shared/data/ui-elements/dropdownsdata";
import Link from "next/link";
import dynamic from "next/dynamic";
const MultiSelect = dynamic(() => import("react-multi-select-component"), {
  ssr: false,
});
const DatePicker = dynamic(() => import("react-datepicker"), { ssr: false });
const today = new Date();
const isoDate = today.toISOString();
import { FilePond } from "react-filepond";
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
  builder_notes: z.string().nonempty({ message: "Builder Notes is required" }),
  bid_payment_terms: z
    .string()
    .nonempty({ message: "Bid Payment Terms is required" }),
});

const CreateUpdateProject = (props) => {
  const formType = props.formType;
  const bidId = props.bidId;
  const [formData, setFormData] = useState({
    selectedProject: "",
    client_name: "", // Client Name
    assigned_to: [], // Assigned To
    description: "",
    project_address: "", // Job/Project address
    budget: "", // Price for customer/Budget
    start_date: "", // Start date
    customer_invite: "", // Invite customer (including setting permissions - using phone number or email or user id)
    files: [], // Files drop area → Add the ability to upload multiple files like gmail allows user to upload multiple files with drop and drag functionality
  });
  const [scopeData, setScopeData] = useState({
    bid_inscope: [{ bidDetail: "" }],
    bid_outscope: [{ bidDetail: "" }],
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectTemplate, setSelectTemplate] = useState("");
  const [multiselectdata, setMultiselectdata] = useState([]);

  useEffect(() => {
    fetch("/api/assignee")
      .then((response) => response.json())
      .then((data) => setMultiselectdata(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  useEffect(() => {
    if (
      scopeData.bid_inscope.length !== 0 &&
      scopeData.bid_outscope.length !== 0
    ) {
      const inScope = scopeData.bid_inscope
        .map((bid) => bid.bidDetail)
        .join(",");
      const outScope = scopeData.bid_outscope
        .map((bid) => bid.bidDetail)
        .join(",");
      setFormData((prevState) => ({
        ...prevState,
        bid_inscope: inScope,
        bid_outscope: outScope,
      }));
    }
  }, [scopeData]);

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
            bid_amount: response.data.bid_amount_from_sub,
            bid_details: response.data.bid_details_from_sub,
            bid_inscope: response.data.bid_inscope,
            bid_outscope: response.data.bid_outscope,
            bid_payment_terms: response.data.bid_payment_terms,
            bid_recieved_date: response.data.bid_recieved_date,
            subcontractor_id: response.data.subcontractor_id["id"],
            builder_notes: response.data.builder_notes,
            bid_warranty: response.data.warranty,
          });
          const inScope = response.data.bid_inscope.split(",").map((bid) => ({
            bidDetail: bid,
          }));
          const outScope = response.data.bid_outscope.split(",").map((bid) => ({
            bidDetail: bid,
          }));
          setScopeData({
            bid_inscope: inScope,
            bid_outscope: outScope,
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

  const handleFileChange = (event) => {
    setFormData({ ...formData, files: Array.from(event.target.files) });
  };

  const getDataFromLocalStorage = () => {
    if (
      localStorage.getItem("selectedProject") !== null &&
      localStorage.getItem("selectedProject") !== "undefined"
    ) {
      const selectedProject = JSON.parse(
        localStorage.getItem("selectedProject")
      );
      setSelectedProject(selectedProject);
    } else {
      setSelectedProject(null);
    }
  };

  const handleBidChange = (e, index, field) => {
    const newBids = [...scopeData[field]];
    newBids[index][e.target.name] = e.target.value;
    setScopeData({ ...scopeData, [field]: newBids });
  };

  const handleAddBid = (field) => {
    setScopeData({
      ...scopeData,
      [field]: [...scopeData[field], { bidDetail: "" }],
    });
  };

  const handleRemoveBid = (index, field) => {
    const newBids = [...scopeData[field]];
    if (newBids.length === 1) {
      return;
    }
    newBids.splice(index, 1);
    setScopeData({ ...scopeData, [field]: newBids });
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
        bid_inscope: "",
        bid_outscope: "",
        bid_payment_terms: "",
        bid_recieved_date: isoDate,
        builder_notes: "",
        bid_warranty: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [displayedBidAmount, setDisplayedBidAmount] = useState("");

  const handleBidAmountChange = (event) => {
    const { value } = event.target;
    const numericValue = value.replace(/,/g, "");
    if (!isNaN(numericValue)) {
      setFormData({ ...formData, bid_amount: numericValue });
      setDisplayedBidAmount(Intl.NumberFormat().format(numericValue));
    }
  };

  const [files, setFiles] = useState([]);

  return (
    <div>
      <Seo
        title={`${formType === "update" ? "Update Project" : "Create Project"}`}
      />
      <Pageheader
        activepage={`${formType === "update" ? "Update" : "Create"} Project`}
        mainpage="Projects"
        mainpageurl="/components/bids/bids"
        loadProjectData={getDataFromLocalStorage}
      />
      <div className="flex justify-between">
        <div className="ml-auto"></div>
      </div>
      <div className="hs-dropdown ti-dropdown me-2 ml-auto">
        <button
          className="ti-btn ti-btn-primary-full ti-dropdown-toggle !py-2"
          type="button"
          id="dropdownMenuButton1"
          aria-expanded="false"
        >
          {selectTemplate || "Select Template"}
          <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
        </button>
        <ul
          className="hs-dropdown-menu ti-dropdown-menu hidden"
          aria-labelledby="dropdownMenuButton1"
        >
          <li>
            <Link
              className="ti-dropdown-item"
              href="#!"
              onClick={() => setSelectTemplate("Remodel Template")}
            >
              Remodel Template
            </Link>
          </li>
          <li>
            <Link
              className="ti-dropdown-item"
              href="#!"
              onClick={() => setSelectTemplate("Custom Template")}
            >
              Custom Template
            </Link>
          </li>
        </ul>
      </div>

      <div className="box-body">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 gap-6">
            <div className="xl:col-span-12 col-span-12">
              <div className="box custom-box">
                <div className="box-header">
                  <div className="box-title">
                    {formType === "update"
                      ? "Update Project"
                      : "Create Project"}
                  </div>
                </div>
                <div className="box-body">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="xl:col-span-4 col-span-12">
                      <label htmlFor="selectedProject" className="form-label">
                        Project Name :
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="selectedProject"
                        placeholder="Enter Project Name"
                        value={formData.selectedProject}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* input field for Project address */}
                    <div className="xl:col-span-4 col-span-12">
                      <label htmlFor="project_address" className="form-label">
                        Project Address :
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="project_address"
                        placeholder="Enter Project Address"
                        value={formData.project_address}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* input field for Client Name */}
                    <div className="xl:col-span-4 col-span-12">
                      <label htmlFor="client_name" className="form-label">
                        Client Name :
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="client_name"
                        placeholder="Enter Client Name"
                        value={formData.client_name}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* input field for Budget */}
                    <div className="xl:col-span-4 col-span-12">
                      <label htmlFor="budget" className="form-label">
                        Budget :
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="budget"
                        placeholder="Enter Budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                      <label className="form-label">Assigned To</label>
                      <Select
                        isMulti
                        name="state"
                        options={multiselectdata}
                        className="js-example-placeholder-multiple w-full js-states"
                        menuPlacement="auto"
                        classNamePrefix="Select2"
                        defaultValue={[
                          multiselectdata[0],
                          multiselectdata[9],
                          multiselectdata[4],
                        ]}
                        onChange={(selectedOptions) => {
                          setFormData({
                            ...formData,
                            assignedTo: selectedOptions.map(
                              (option) => option.value
                            ),
                          });
                        }}
                      />
                    </div>
                    <div className="xl:col-span-12 col-span-12 mb-4">
                      <label htmlFor="description" className="form-label">
                        Project Description :
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

                    <div className="xl:col-span-6 col-span-12">
                      <label className="form-label">Start Date :</label>
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-text text-muted">
                            <i className="ri-calendar-line"></i>
                          </div>
                          <DatePicker
                            placeholder="Choose the date"
                            className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10"
                            selected={formData.start_date}
                            onChange={(date) =>
                              setFormData({ ...formData, start_date: date })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                      <label htmlFor="inviteCustomer" className="form-label">
                        Invite Customer :
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inviteCustomer"
                        placeholder="Enter Phone Number, Email, or User ID"
                        value={formData.customer_invite}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* Add other input fields here */}
                    <div className="xl:col-span-12 col-span-12">
                      <label htmlFor="text-area" className="form-label">
                        Attachments
                      </label>
                      <FilePond
                        files={formData.files}
                        onupdatefiles={(fileItems) => {
                          // Set current file objects to this.state
                          setFormData({
                            ...formData,
                            files: fileItems.map((fileItem) => fileItem.file),
                          });
                        }}
                        allowMultiple={true}
                        maxFiles={3}
                        server="/api"
                        name="files"
                        labelIdle="Drag & Drop your file here or click "
                      />
                    </div>
                  </div>
                </div>
                <div className="box-footer">
                  <button
                    type="submit"
                    className="ti-btn ti-btn-primary btn-wave ms-auto float-right"
                  >
                    {formType === "update"
                      ? "Update Project"
                      : "Create Project"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
CreateUpdateProject.layout = "Contentlayout";

export default CreateUpdateProject;
