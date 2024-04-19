import { Selectoption1, Selectoption2 } from "@/shared/data/forms/select2data";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
const Select = dynamic(() => import("react-select"), { ssr: false });
import DatePicker from "react-datepicker";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { addDays, setHours, setMinutes } from "date-fns";
import network from "@/config";
//filepond
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

const CompareBids = () => {
  const leftContainerRef = useRef(null);
  const rightContainerRef = useRef(null);
  const topContainerRef = useRef(null);
  const bottomContainerRef = useRef(null);
  const lastContainerRef = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const dragula = require("dragula");
      const windowElement = window;

      if (leftContainerRef.current && rightContainerRef.current) {
        const containers = [
          leftContainerRef.current,
          rightContainerRef.current,
          topContainerRef.current,
          bottomContainerRef.current,
          lastContainerRef.current,
        ];
        const drake = dragula(containers);

        // Your other dragula-related logic here...

        if (
          document.querySelector(".firstdrag")?.classList.contains("task-Null")
        ) {
          console.log("aaa");
          document.querySelector(".view-more-button")?.classList.add("d-none");
        }
      }

      OnDivChange();
    }
  }, []);

  const [bidsData, setBidsData] = useState([]);
  const [bidsDataTradeType, setBidsDataTradeType] = useState([]);
  const [compareBids, setCompareBids] = useState([]);
  const [selectedTask, setSelectedTask] = useState("");
  const [selectedBids, setSelectedBids] = useState([]);

  useEffect(() => {
    const addToCompareBidValue = JSON.parse(
      localStorage.getItem("addToCompareBid")
    );
    if (addToCompareBidValue !== null && addToCompareBidValue.length > 0) {
      const tradeType = new Set(
        JSON.parse(localStorage.getItem("addToCompareBid")).map(
          (item) => item.task_name
        )
      );
      setBidsData(JSON.parse(localStorage.getItem("addToCompareBid")));
      setBidsDataTradeType(
        Array.from(tradeType).filter((item) => item !== undefined)
      );
    } else {
      axios
        .get(`${network.serverUrl}api/bidData/`)
        .then((response) => {
          const tradeType = new Set(
            response.data.map((item) => item.task_name)
          );
          setBidsData(response.data);
          setBidsDataTradeType(Array.from(tradeType));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const elementsToModify = [
    leftContainerRef,
    rightContainerRef,
    topContainerRef,
    bottomContainerRef,
    lastContainerRef,
  ];

  const OnDivChange = () => {
    elementsToModify.forEach((elementId) => {
      const element = elementId.current;
      if (element?.children.length <= 0) {
        element?.classList.add("task-Null");
        element?.parentNode.parentElement.parentElement
          .querySelector(".view-more-button")
          ?.classList.add("d-none");
      } else {
        element?.classList.remove("task-Null");
        element?.parentNode.parentElement.parentElement
          .querySelector(".view-more-button")
          ?.classList.remove("d-none");
      }
    });
  };

  const Option2 = [
    { value: "Angelina May", label: "Angelina May" },
    { value: "Kiara advain", label: "Kiara advain" },
    { value: "Hercules Jhon", label: "Hercules Jhon" },
    { value: "Mayor Kim", label: "Mayor Kim" },
  ];
  const Option3 = [
    { value: "Select Tag", label: "Select Tag" },
    { value: "UI/UX", label: "UI/UX" },
    { value: "Marketing", label: "Marketing" },
    { value: "Finance", label: "Finance" },
    { value: "Designing", label: "Designing" },
    { value: "Admin", label: "Admin" },
    { value: "Authentication", label: "Authentication" },
    { value: "Product", label: "Product" },
    { value: "Development", label: "Development" },
  ];

  //Specific time range

  const [startTime, setStartTime] = useState(
    setHours(setMinutes(new Date(), 30), 17)
  );

  const statusColor = (status) => {
    if (status === "New") {
      return "badge bg-secondary/10 text-secondary";
    } else if (status === "Completed") {
      return "badge bg-success/10 text-success";
    } else if (status === "Inprogress") {
      return "badge bg-warning/10 text-warning";
    } else if (status === "Pending") {
      return "badge bg-danger/10 text-danger";
    }
  };

  //filepond
  const [files, setFiles] = useState([]);

  return (
    <div>
      <Seo title={"Compare Bids"} />
      <Pageheader
        currentpage="Compare Bids"
        activepage="Bids"
        mainpage="Compare Bids"
      />
      <div className="box">
        <div className="box-body">
          <h1 className="box-title font-semibold !mb-1 !text-[1rem]">
            {" "}
            Project/Job Name :
          </h1>
          <h1 className="box-title font-semibold !mb-1 !text-[1rem]">
            Task/Trade Name :
          </h1>
          <h1 className="box-title font-semibold !mb-1 !text-[1rem]">
            Due Date :
          </h1>
        </div>
      </div>
      <div className="box custom-box">
        <div className="box-header">
          <div className="box-title">Fill the form below to compare bids</div>
        </div>
        <div className="grid grid-cols-12 sm:gap-x-6 sm:gap-y-4 p-4">
          <div className="md:col-span-6 col-span-12 mb-4">
            <label className="form-label">Select Task</label>
            <Select
              name="state"
              options={bidsDataTradeType.map((tradeType) => {
                return {
                  value: tradeType,
                  label: tradeType,
                };
              })}
              className="js-example-basic-single w-full"
              isSearchable
              menuPlacement="auto"
              classNamePrefix="Select2"
              placeholder="Select Task"
              onChange={(e) => {
                const selectedTask = e.value;
                setCompareBids(
                  bidsData.filter((bid) => {
                    setSelectedTask(selectedTask);
                    return bid.task_name === selectedTask;
                  })
                );
              }}
            />
          </div>
          <div className="md:col-span-6 col-span-12 mb-4">
            <label className="form-label">Select Bids</label>
            <Select
              isMulti
              name="states[]"
              options={compareBids?.map((bid) => {
                return {
                  value: bid,
                  label: bid.bid_id,
                };
              })}
              className="js-example-basic-multiple w-full"
              isSearchable
              menuPlacement="auto"
              classNamePrefix="Select2"
              placeholder="Select Bids"
              isDisabled={compareBids.length === 0}
              onChange={(e) => {
                setSelectedBids(
                  e.map((selectedBid) => {
                    return selectedBid.value;
                  })
                );
              }}
            />
          </div>
        </div>
      </div>
      <div className="ynex-kanban-board text-defaulttextcolor dark:text-defaulttextcolor/70 text-defaultsize">
        {selectedBids.length > 0 &&
          selectedBids.map((bid) => (
            <div className="kanban-tasks-type new">
              <div className="mb-4">
                <div className="flex justify-between items-center">
                  <span className="block font-semibold text-[.9375rem]">
                    {selectedTask}
                  </span>
                </div>
              </div>
              <div className="kanban-tasks " id="new-tasks">
                <PerfectScrollbar style={{ height: "560px" }}>
                  <div
                    ref={leftContainerRef}
                    onMouseEnter={OnDivChange}
                    className="firstdrag"
                    data-view-btn="new-tasks"
                  >
                    <div className="box kanban-tasks new">
                      <div className="box-body !p-0">
                        <div className="p-4 kanban-board-head">
                          <div className="flex justify-between mb-1 text-[.75rem] font-semibold">
                            <div className="inline-flex">
                              <h6 className="mb-1 text-[.9375rem]">
                                {bid.task_name}
                              </h6>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="task-badges">
                              <span className="badge bg-light text-default">
                                {bid.bid_id}
                              </span>
                              {/* <span className="ms-1 badge bg-primary/10 text-primary">
                                    {bid.tradeType}
                                  </span> */}
                            </div>
                            {/* <div className="hs-dropdown ti-dropdown ltr:[--placement:bottom-right] rtl:[--placement:bottom-left]">
                                  <Link
                                    aria-label="anchor"
                                    href="#!"
                                    className="ti-btn ti-btn-icon ti-btn-sm ti-btn-light"
                                    aria-expanded="false"
                                  >
                                    <i className="fe fe-more-vertical"></i>
                                  </Link>
                                  <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li>
                                      <Link
                                        className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium !inline-flex"
                                        href="#!"
                                      >
                                        <i className="ri-eye-line me-1 align-middle"></i>
                                        View
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium !inline-flex"
                                        href="#!"
                                      >
                                        <i className="ri-delete-bin-line me-1 align-middle"></i>
                                        Delete
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium !inline-flex"
                                        href="#!"
                                      >
                                        <i className="ri-edit-line me-1 align-middle"></i>
                                        Edit
                                      </Link>
                                    </li>
                                  </ul>
                                </div> */}
                          </div>
                          <div className="kanban-content !mt-1">
                            <h6 className="mb-1 text-[.9375rem]">
                              <span className="font-semibold">
                                Subcontractor:
                              </span>{" "}
                              {bid.subcontractor_id["Name"]}
                            </h6>
                            {/* <h6 className="mb-1 text-[.9375rem]">
                                  <span className="font-semibold">
                                    Bid Name:
                                  </span>{" "}
                                  {bid.bidName}
                                </h6> */}
                            <h6 className="mb-1 text-[.9375rem]">
                              <span className="font-semibold">
                                Price Quoted:
                              </span>{" "}
                              ${bid.bid_amount_from_sub}
                            </h6>
                            {/* <h6 className="mb-1 text-[.9375rem]">
                                  <span className="font-semibold">Status:</span>{" "}
                                  <span className={statusColor(bid.status)}>
                                    {bid.status}
                                  </span>
                                </h6> */}
                            <h6 className="mb-1 text-[.9375rem]">
                              <span className="font-semibold">In Scope:</span>{" "}
                              {bid.bid_inscope}
                            </h6>
                            <h6 className="mb-1 text-[.9375rem]">
                              <span className="font-semibold">
                                Out of Scope:
                              </span>{" "}
                              {bid.bid_outscope}
                            </h6>
                            <h6 className="mb-1 text-[.9375rem]">
                              <span className="font-semibold">
                                Payment Terms:
                              </span>{" "}
                              {bid.bid_payment_terms}
                            </h6>
                            {/* <h6 className="mb-1 text-[.9375rem]">
                                  <span className="font-semibold">
                                    Reviews:
                                  </span>{" "}
                                  {bid.reviews.length > 0 &&
                                    bid.reviews.map((review) => (
                                      // New line for each review
                                      <div key={review}>
                                        <i className="angle fe fe-chevron-right side-menu__angle"></i>{" "}
                                        {review}
                                        <br />
                                      </div>
                                    ))}
                                </h6> */}
                            {/* <h6 className="mb-1 text-[.9375rem]">
                                  <span className="font-semibold">
                                    Comments:
                                  </span>{" "}
                                  {bid.comments}
                                </h6> */}
                            <div id="stars-unlimited">
                              <Stack
                                spacing={1}
                                className="rating-stars block my-rating-7"
                              >
                                <Rating
                                  name="half-rating-read"
                                  value={bid.subcontractor_id["Rating"].length}
                                  max={5}
                                  size="medium"
                                  readOnly
                                />
                              </Stack>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 border-t dark:border-defaultborder/10 border-dashed">
                          <div className="hs-dropdown ti-dropdown">
                            <Link
                              href="#!"
                              className="ti-btn ti-btn-primary !bg-primary !text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"
                              aria-expanded="false"
                            >
                              Actions
                              <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                            </Link>
                            <ul
                              className="hs-dropdown-menu ti-dropdown-menu !-mt-2 hidden"
                              role="menu"
                            >
                              <li>
                                <Link
                                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                  href={`/components/bids/${bid.bid_id}`}
                                >
                                  View Bid
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                  href={`/components/bids/${bid.bid_id}`}
                                >
                                  Accept Bid
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                  href={`/components/bids/${bid.bid_id}`}
                                >
                                  Decline bid
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                  href={`/components/bids/${bid.bid_id}`}
                                >
                                  Ask Question
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                  href={`/components/bids/${bid.bid_id}`}
                                >
                                  Send Reminder
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </PerfectScrollbar>
              </div>
            </div>
          ))}
      </div>
      <div id="add-board" className="hs-overlay hidden ti-modal">
        <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
          <div className="ti-modal-content">
            <div className="ti-modal-header">
              <h6 className="modal-title text-[1rem] !text-default dark:text-defaulttextcolor/70 font-semibold">
                Add Board
              </h6>
              <button
                type="button"
                className="hs-dropdown-toggle !text-[1rem] !font-semibold"
                data-hs-overlay="#add-board"
              >
                <span className="sr-only">Close</span>
                <i className="ri-close-line"></i>
              </button>
            </div>
            <div className="ti-modal-body px-6">
              <div className="grid grid-cols-12 gy-2">
                <div className="xl:col-span-12 col-span-12">
                  <label htmlFor="task-name" className="form-label">
                    Task Name
                  </label>
                  <input
                    type="text"
                    className="form-control w-full !rounded-md"
                    id="task-name"
                    placeholder="Task Name"
                  />
                </div>
              </div>
            </div>
            <div className="ti-modal-footer">
              <button
                type="button"
                className="hs-dropdown-toggle ti-btn  ti-btn-light align-middle"
                data-hs-overlay="#add-board"
              >
                Cancel
              </button>
              <button
                type="button"
                className="ti-btn bg-primary text-white !font-medium"
              >
                Add Bid
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="add-task" className="hs-overlay hidden ti-modal">
        <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
          <div className="ti-modal-content">
            <div className="ti-modal-header">
              <h6
                className="modal-title text-[1rem] font-semibold text-default dark:text-defaulttextcolor/70"
                id="mail-ComposeLabel"
              >
                Add Bid
              </h6>
              <button
                type="button"
                className="hs-dropdown-toggle !text-[1rem] !font-semibold"
                data-hs-overlay="#add-task"
              >
                <span className="sr-only">Close</span>
                <i className="ri-close-line"></i>
              </button>
            </div>
            <div className="ti-modal-body px-4 !overflow-visible">
              <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                  <label htmlFor="task-name" className="form-label">
                    Task Name
                  </label>
                  <input
                    type="text"
                    className="form-control w-full !rounded-md"
                    id="task-name2"
                    placeholder="Task Name"
                  />
                </div>
                <div className="xl:col-span-6 col-span-12">
                  <label htmlFor="task-id" className="form-label">
                    Task ID
                  </label>
                  <input
                    type="text"
                    className="form-control w-full !rounded-md"
                    id="task-id"
                    placeholder="Task ID"
                  />
                </div>
                <div className="xl:col-span-12 col-span-12">
                  <label htmlFor="text-area" className="form-label">
                    Task Description
                  </label>
                  <textarea
                    className="form-control w-full !rounded-md"
                    id="text-area"
                    rows="2"
                    placeholder="Write Description"
                  ></textarea>
                </div>
                <div className="xl:col-span-12 col-span-12">
                  <label htmlFor="text-area" className="form-label">
                    Task Images
                  </label>
                  <FilePond
                    files={files}
                    onupdatefiles={setFiles}
                    allowMultiple={true}
                    maxFiles={3}
                    server="/api"
                    name="files" /* sets the file input name, it's filepond by default */
                    labelIdle="Drag & Drop your file here or click "
                  />
                </div>
                <div className="xl:col-span-12 col-span-12">
                  <label className="form-label">Assigned To</label>
                  <Select
                    isMulti
                    name="colors"
                    options={Option2}
                    className=""
                    menuPlacement="auto"
                    classNamePrefix="Select2"
                  />
                </div>
                <div className="xl:col-span-6 col-span-12">
                  <label className="form-label">Target Date</label>
                  <div className="form-group">
                    <div className="input-group !flex-nowrap">
                      <div className="input-group-text text-muted !rounded-e-none">
                        {" "}
                        <i className="ri-calendar-line"></i>{" "}
                      </div>
                      <DatePicker
                        placeholder="Choose date and time"
                        className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10"
                        selected={startTime}
                        onChange={(date) => setStartTime(date)}
                        showTimeSelect
                        minTime={setHours(setMinutes(new Date(), 0), 17)}
                        maxTime={setHours(setMinutes(new Date(), 30), 20)}
                        dateFormat="MMMM d, yyyy h:mm aa"
                      />
                    </div>
                  </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                  <label className="form-label">Tags</label>
                  <Select
                    isMulti
                    name="colors"
                    options={Option3}
                    className="w-full !rounded-md"
                    menuPlacement="auto"
                    classNamePrefix="Select2"
                  />
                </div>
              </div>
            </div>
            <div className="ti-modal-footer">
              <button
                type="button"
                className="hs-dropdown-toggle ti-btn  ti-btn-light align-middle"
                data-hs-overlay="#add-task"
              >
                Cancel
              </button>
              <button
                type="button"
                className="ti-btn bg-primary text-white !font-medium"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
CompareBids.layout = "Contentlayout";

export default CompareBids;
