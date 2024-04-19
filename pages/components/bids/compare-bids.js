import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const CompareBids = () => {

  const [compareBids, setCompareBids] = useState([]);
  const [selectedTask, setSelectedTask] = useState("");

  useEffect(() => {
    const addToCompareBidValue = JSON.parse(
      localStorage.getItem("addToCompareBid")
    );
    if (addToCompareBidValue !== null && addToCompareBidValue.length > 0) {
      setSelectedTask(addToCompareBidValue[0].task_name);
      setCompareBids(JSON.parse(localStorage.getItem("addToCompareBid")));
    }
  }, []);

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
      <div className="ynex-kanban-board text-defaulttextcolor dark:text-defaulttextcolor/70 text-defaultsize">
        {compareBids.length > 0 &&
          compareBids.map((bid) => (
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
    </div>
  );
};
CompareBids.layout = "Contentlayout";

export default CompareBids;
