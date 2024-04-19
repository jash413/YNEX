import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { TransactionsStatistics } from "@/shared/data/apps/crypto/transactiondata";
import network from "@/config";

const ViewBids = () => {
  const [bidsData, setBidsData] = useState([]);
  const [addToCompareBid, setAddToCompareBid] = useState([]);
  const [completedBids, setCompletedBids] = useState(0);
  const [inProgressBids, setInProgressBids] = useState(0);
  const [pendingBids, setPendingBids] = useState(0);
  const [newbids, setNewBids] = useState(0);

  const handleAddToCompare = (e) => {
    if (addToCompareBid.includes(e)) {
      setAddToCompareBid(addToCompareBid.filter((item) => item !== e));
    } else {
      setAddToCompareBid([...addToCompareBid, e]);
    }
    // if any checkbox is unchecked, unselect the select all checkbox
    const checkboxes = document.querySelectorAll(
      ".Bid-list input[type=checkbox]"
    );
    const allCheckbox = document.getElementById("all-Bids");
    let allChecked = true;
    checkboxes.forEach((checkbox) => {
      if (!checkbox.checked) {
        allChecked = false;
      }
    });
    if (allChecked) {
      allCheckbox.checked = true;
    } else {
      allCheckbox.checked = false;
    }
  };

  const selectAll = () => {
    setAddToCompareBid(bidsData);
    // Select all checkboxes
    const checkboxes = document.querySelectorAll(
      ".Bid-list input[type=checkbox]"
    );
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
    // Unselect all checkboxes
    if (addToCompareBid.length === bidsData.length) {
      setAddToCompareBid([]);
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
    }
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
      <Seo title={"Bids"} />
      <Pageheader
        currentpage="List View"
        activepage="Bids"
        mainpage="List View"
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
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-9 col-span-12">
          <div className="box  ">
            <div className="box-header justify-between">
              <div className="box-title">Total Bids: {bidsData.length} </div>
              <div className="flex">
                <button
                  type="button"
                  className="hs-dropdown-toggle ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem]"
                  data-hs-overlay="#create-Bid"
                >
                  <i className="ri-add-line font-semibold align-middle"></i>{" "}
                  Create Bid
                </button>
                <button
                  type="button"
                  className="hs-dropdown-toggle ti-btn ti-btn-primary-full !py-1 !px-2 !mx-1 !text-[0.75rem] "
                  data-hs-overlay="#compare-Bid"
                >
                  <Link href="/components/bids/compare-bids">
                    <i className="ri-add-line font-semibold align-middle"></i>{" "}
                    Add to Compare
                  </Link>
                </button>
                <div id="create-Bid" className="hs-overlay hidden ti-modal">
                  <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
                    <div className="ti-modal-content">
                      <div className="ti-modal-header">
                        <h6 className="modal-title" id="staticBackdropLabel2">
                          Add Bid
                        </h6>
                        <button
                          type="button"
                          className="hs-dropdown-toggle ti-modal-close-btn"
                          data-hs-overlay="#create-Bid"
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
                        <div className="grid grid-cols-12 gap-2">
                          <div className="xl:col-span-6 col-span-12">
                            <label htmlFor="Bid-name" className="form-label">
                              Bid Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="Bid-name"
                              placeholder="Bid Name"
                            />
                          </div>
                          <div className="xl:col-span-6 col-span-12">
                            <label htmlFor="Bid-id" className="form-label">
                              Bid ID
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="Bid-id"
                              placeholder="Bid ID"
                            />
                          </div>
                          <div className="xl:col-span-6 col-span-12">
                            <label htmlFor="Bid-id" className="form-label">
                              Subcontractor
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="Bid-id"
                              placeholder="Bid ID"
                            />
                          </div>
                          <div className="xl:col-span-6 col-span-12">
                            <label htmlFor="Bid-id" className="form-label">
                              Trade Type
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="Bid-id"
                              placeholder="Trade Type"
                            />
                          </div>
                          <div className="xl:col-span-6 col-span-12">
                            <label htmlFor="Bid-id" className="form-label">
                              Cost Code
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="Bid-id"
                              placeholder="Cost Code"
                            />
                          </div>
                          <div className="xl:col-span-6 col-span-12">
                            <label htmlFor="Bid-id" className="form-label">
                              Price Quoted
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="Bid-id"
                              placeholder="Price Quoted"
                            />
                          </div>
                          <div className="xl:col-span-6 col-span-12">
                            <label htmlFor="Bid-id" className="form-label">
                              Assigned Date
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="Bid-id"
                              placeholder="Assigned Date"
                            />
                          </div>
                          <div className="xl:col-span-6 col-span-12">
                            <label htmlFor="Bid-id" className="form-label">
                              Status
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="Bid-id"
                              placeholder="Status"
                            />
                          </div>
                          <div className="xl:col-span-6 col-span-12">
                            <label htmlFor="Bid-id" className="form-label">
                              Submit Date
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="Bid-id"
                              placeholder="Submit Date"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="ti-modal-footer">
                        <button
                          type="button"
                          className="hs-dropdown-toggle ti-btn ti-btn-light"
                          data-hs-overlay="#create-Bid"
                        >
                          Cancel
                        </button>
                        <Link className="ti-btn ti-btn-primary-full" href="#!">
                          Add Bid
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
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
                      <th scope="col">
                        <input
                          className="form-check-input check-all"
                          type="checkbox"
                          id="all-Bids"
                          value=""
                          aria-label="..."
                          onClick={selectAll}
                        />
                      </th>
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
                              {new Date(
                                bid.bid_recieved_date
                              ).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              })}
                            </td>
                            <td>
                              {new Date(
                                bid.bid_expiration_date
                              ).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              })}
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
                    <Link
                      className="page-link active px-3 py-[0.375rem]"
                      href="#!"
                    >
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
        <div className="xl:col-span-3 col-span-12">
          <div className="box">
            <div className="box-body !p-0">
              <div className="!p-6 border-b dark:border-defaultborder/10 border-dashed flex items-start">
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
              <div className="p-6 border-b dark:border-defaultborder/10 border-dashed flex items-start">
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
              <div className="p-6 border-b dark:border-defaultborder/10 border-dashed flex items-start">
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
              <div className="p-6 border-b dark:border-defaultborder/10 border-dashed flex items-start">
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
              <div className="p-6 pb-2">
                <p className="text-[.9375rem] font-semibold">
                  Bids Statistics{" "}
                  <span className="text-muted font-normal">(Last month) :</span>
                </p>
                <div id="Bid-list-stats">
                  <TransactionsStatistics
                    completedBids={completedBids}
                    inProgressBids={inProgressBids}
                    pendingBids={pendingBids}
                    newbids={newbids}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ViewBids.layout = "Contentlayout";

export default ViewBids;
