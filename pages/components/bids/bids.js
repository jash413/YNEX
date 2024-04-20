import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Select from "react-select";
import network from "@/config";

const ViewBids = () => {
  const [bidsData, setBidsData] = useState([]);
  const [addToCompareBid, setAddToCompareBid] = useState([]);
  const [completedBids, setCompletedBids] = useState(0);
  const [inProgressBids, setInProgressBids] = useState(0);
  const [pendingBids, setPendingBids] = useState(0);
  const [newbids, setNewBids] = useState(0);
  const [displayToast, setDisplayToast] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleAddToCompare = (e) => {
    // Cannot select different tasks
    if (addToCompareBid.length > 0) {
      if (addToCompareBid[0].task_name !== e.task_name) {
        setDisplayToast(true);
        return;
      }
    }
    if (addToCompareBid.includes(e)) {
      setAddToCompareBid(addToCompareBid.filter((item) => item !== e));
    } else {
      setAddToCompareBid([...addToCompareBid, e]);
    }
  };

  const getDataFromLocalStorage = () => {
    const selectedProject = JSON.parse(localStorage.getItem("selectedProject"));
    setSelectedProject(selectedProject);
  };

  useEffect(() => {
    localStorage.setItem("addToCompareBid", JSON.stringify(addToCompareBid));
  }, [addToCompareBid]);

  const statusColor = (status) => {
    if (status === "New") {
      return "badge bg-secondary/10 text-secondary";
    } else if (status === "Completed") {
      return "badge bg-success/10 text-success";
    } else if (status === "Inprogress") {
      return "badge bg-warning/10 text-warning";
    } else if (status === "Pending") {
      return "badge bg-danger/10 text-danger";
    } else {
      return "badge bg-primary/10 text-primary";
    }
  };

  useEffect(() => {
    axios
      .get(`${network.serverUrl}api/bidData/`)
      .then((response) => {
        setBidsData(response.data);
        setCompletedBids(
          response.data.filter((bid) => bid.status === "Completed").length
        );
        setInProgressBids(
          response.data.filter((bid) => bid.status === "Inprogress").length
        );
        setPendingBids(
          response.data.filter((bid) => bid.status === "Pending").length
        );
        setNewBids(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div
        className={`ti-toast bg-danger text-sm text-white fixed top-4 right-4 z-50`}
        role="alert"
        style={{ display: displayToast ? "block" : "none" }}
      >
        <div className="flex p-4">
          Cannot compare different tasks
          <div className="ms-auto">
            <button
              type="button"
              className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-white/[.5]  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white/10 focus:ring-gray-600 transition-all text-sm dark:focus:ring-offset-white/10 dark:focus:ring-white/10"
              onClick={() => setDisplayToast(false)}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3.5 h-3.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Seo title={"Bids"} />
      <Pageheader
        currentpage="List View"
        activepage="Bids"
        mainpage="List View"
        loadProjectData={getDataFromLocalStorage}
      />
      <div className="box">
        <div className="box-body">
          <div className="grid grid-cols-4">
            <div className="p-6 border-r dark:border-defaultborder/10 border-solid col-md-3">
              <div className="svg-icon-background bg-primary/10 me-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  className="svg-primary"
                >
                  <path d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h6 className="!mb-1 text-[0.75rem]">
                  New Bids
                  <span className="badge bg-primary text-white font-semibold ltr:float-right rtl:float-left">
                    12,345
                  </span>
                </h6>
                <div className="pb-0 mt-0">
                  <div>
                    <h4 className="text-[1.125rem] font-semibold mb-1">
                      <span className="count-up" data-count="42">
                        {newbids}
                      </span>
                      <span className="text-muted ltr:float-right rtl:float-left text-[.6875rem] font-normal">
                        Last Year
                      </span>
                    </h4>
                    <p className="text-muted text-[.6875rem] mb-0 leading-none">
                      <span className="text-success me-1 font-semibold inline-block">
                        <i className="ri-arrow-up-s-line me-1 align-middle"></i>
                        3.25%
                      </span>
                      <span>this month</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-r dark:border-defaultborder/10 border-solid col-md-3">
              <div className="svg-icon-background bg-success/10 !fill-success me-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="svg-success"
                >
                  <path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h6 className="mb-1 text-[0.75rem]">
                  Completed Bids
                  <span className="badge bg-success text-white font-semibold ltr:float-right rtl:float-left">
                    4,176
                  </span>
                </h6>
                <div>
                  <h4 className="text-[1.125rem] font-semibold mb-1">
                    <span className="count-up" data-count="319">
                      {completedBids}
                    </span>
                    <span className="text-muted ltr:float-right rtl:float-left text-[.6875rem] font-normal">
                      Last Year
                    </span>
                  </h4>
                  <p className="text-muted text-[.6875rem] mb-0 leading-none">
                    <span className="text-danger me-1 font-semibold inline-block">
                      <i className="ri-arrow-down-s-line me-1 align-middle"></i>
                      1.16%
                    </span>
                    <span>this month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 border-r dark:border-defaultborder/10 border-solid col-md-3">
              <div className="svg-icon-background bg-warning/10 me-4 !fill-warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  className="svg-warning"
                >
                  <path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h6 className="mb-1 text-[0.75rem]">
                  Pending Bids
                  <span className="badge bg-warning text-white font-semibold ltr:float-right rtl:float-left">
                    7,064
                  </span>
                </h6>
                <div>
                  <h4 className="text-[1.125rem] font-semibold mb-1">
                    <span className="count-up" data-count="81">
                      {pendingBids}
                    </span>
                    <span className="text-muted ltr:float-right rtl:float-left text-[.6875rem] font-normal">
                      Last Year
                    </span>
                  </h4>
                  <p className="text-muted text-[.6875rem] mb-0 leading-none">
                    <span className="text-success me-1 font-semibold inline-block">
                      <i className="ri-arrow-up-s-line me-1 align-middle"></i>
                      0.25%
                    </span>
                    <span>this month</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 col-md-3">
              <div className="svg-icon-background bg-secondary/10 text-secondary !fill-secondary me-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  className="svg-secondary"
                >
                  <path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h6 className="mb-1 text-[0.75rem]">
                  Inprogress Bids
                  <span className="badge bg-secondary text-white font-semibold ltr:float-right rtl:float-left">
                    1,105
                  </span>
                </h6>
                <div>
                  <h4 className="text-[1.125rem] font-semibold mb-1">
                    <span className="count-up" data-count="32">
                      {inProgressBids}
                    </span>
                    <span className="text-muted ltr:float-right rtl:float-left text-[.6875rem] font-normal">
                      Last Year
                    </span>
                  </h4>
                  <p className="text-muted text-[.6875rem] mb-0 leading-none">
                    <span className="text-success me-1 font-semibold inline-block">
                      <i className="ri-arrow-down-s-line me-1 align-middle"></i>
                      0.46%
                    </span>
                    <span>this month</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="box-body">
          <div className="grid grid-cols-2">
            <div className="p-4">
              <label className="form-label">Select Project</label>
              <Select
                name="state"
                className="js-example-basic-single w-full"
                isSearchable
                menuPlacement="auto"
                classNamePrefix="Select2"
                placeholder="Select Project"
              />
            </div>
            <div className="p-4">
              <label className="form-label">Select Task</label>
              <Select
                name="state"
                className="js-example-basic-single w-full"
                isSearchable
                menuPlacement="auto"
                classNamePrefix="Select2"
                placeholder="Select Task"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="box-header justify-between">
          <div className="box-title">Total Bids: {bidsData.length} </div>
          <div className="flex">
            <button
              type="button"
              className="hs-dropdown-toggle ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem]"
              data-hs-overlay="#create-Bid"
            >
              <Link href="/components/bids/create-bid">
              <i className="ri-add-line font-semibold align-middle"></i> Create
              Bid
              </Link>
            </button>
            <button
              type="button"
              className="hs-dropdown-toggle ti-btn ti-btn-primary-full !py-1 !px-2 !mx-1 !text-[0.75rem] "
              data-hs-overlay="#compare-Bid"
            >
              <Link href="/components/bids/compare-bids">
                <i className="ri-add-line font-semibold align-middle"></i> Add
                to Compare
              </Link>
            </button>
            <div className="hs-dropdown ti-dropdown ms-2">
              <button
                type="button"
                aria-label="button"
                className="ti-btn ti-btn-secondary ti-btn-sm"
                aria-expanded="false"
              >
                <i className="ti ti-dots-vertical"></i>
              </button>
              <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                <li>
                  <Link
                    className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                    href="#!"
                  >
                    New Bids
                  </Link>
                </li>
                <li>
                  <Link
                    className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                    href="#!"
                  >
                    Pending Bids
                  </Link>
                </li>
                <li>
                  <Link
                    className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                    href="#!"
                  >
                    Completed Bids
                  </Link>
                </li>
                <li>
                  <Link
                    className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                    href="#!"
                  >
                    Inprogress Bids
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="box-body">
          <div className="table-responsive overflow-x-hidden">
            <table className="table whitespace-nowrap table-bordered min-w-full x-hidden">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col" className="text-start">
                    Subcontractor
                  </th>
                  <th scope="col" className="text-start">
                    Bid ID
                  </th>
                  <th scope="col" className="text-start">
                    Task Name
                  </th>
                  <th scope="col" className="text-start">
                    Cost Code
                  </th>
                  <th scope="col" className="text-start">
                    Price Quoted
                  </th>
                  <th scope="col" className="text-start">
                    Received Date
                  </th>
                  <th scope="col" className="text-start">
                    Expiration Date
                  </th>
                  <th scope="col" className="text-start">
                    Status
                  </th>
                  <th scope="col" className="text-start">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {bidsData.length > 0 &&
                  bidsData?.map((bid) => {
                    return (
                      <tr className="border border-defaultborder Bid-list">
                        <td className="Bid-checkbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={bid}
                            onClick={() => handleAddToCompare(bid)}
                            checked={addToCompareBid.includes(bid)}
                          />
                        </td>
                        <td className="Subcontractor">
                          {bid.subcontractor_id["Name"]}
                        </td>
                        <td className="Bidid">{bid.bid_id}</td>
                        <td className="Costcode">{bid.task_name}</td>
                        <td className="Costcode">{bid.cost_code_id}</td>
                        <td className="Pricequoted">
                          ${bid.bid_amount_from_sub.toLocaleString()}
                        </td>
                        <td>
                          {new Date(bid.bid_recieved_date).toLocaleDateString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </td>
                        <td>
                          {new Date(bid.bid_expiration_date).toLocaleDateString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </td>
                        <td>
                          <span
                            className={statusColor(bid.bid_status)}
                            style={{ padding: "0.25rem 0.5rem" }}
                          >
                            {bid.bid_status}
                          </span>
                        </td>
                        <td>
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
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="box-footer">
          <nav aria-label="Page navigation">
            <ul className="ti-pagination justify-end mb-0">
              <li className="page-item disabled">
                <Link className="page-link px-3 py-[0.375rem]" href="#!">
                  Prev
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link px-3 py-[0.375rem]" href="#!">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link active px-3 py-[0.375rem]" href="#!">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link px-3 py-[0.375rem]" href="#!">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link px-3 py-[0.375rem]" href="#!">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
ViewBids.layout = "Contentlayout";

export default ViewBids;
