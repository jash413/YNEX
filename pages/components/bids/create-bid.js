import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import network from "@/config";
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

const CreateBid = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState("Task Name");

  useEffect(() => {
    fetch(`${network.serverUrl}api/bidData/`)
      .then((response) => response.json())
      .then((data) => {
        const uniqueTasks = Array.from(
          new Set(data.map((item) => item.task_name))
        );
        setTasks(uniqueTasks);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
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
      <div className="box">
        <div className="box-header justify-between">
          <div className="box-title">Create a new Bid</div>
        </div>
        <div className="box-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="bid_id" className="form-label">
                Bid ID
              </label>
              <input type="text" className="form-control" id="bid_id" />
            </div>
            <div className="mb-4">
              <label htmlFor="project_id" className="form-label">
                Project ID
              </label>
              <input type="text" className="form-control" id="project_id" />
            </div>
            <div className="mb-4">
              <label htmlFor="project_name" className="form-label">
                Project Name
              </label>
              <input type="text" className="form-control" id="project_name" />
            </div>
            <div className="mb-4">
              <label htmlFor="task_id" className="form-label">
                Task ID
              </label>
              <input type="text" className="form-control" id="task_id" />
            </div>
            <div className="mb-4">
              <div className="hs-dropdown ti-dropdown me-2 mt-5">
                <button
                  className="ti-btn ti-btn-primary-full ti-dropdown-toggle !py-2"
                  type="button"
                  id="dropdownMenuButton1"
                  aria-expanded="false"
                >
                  {selectedTask}
                  <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                </button>
                <ul
                  className="hs-dropdown-menu ti-dropdown-menu hidden"
                  aria-labelledby="dropdownMenuButton1"
                >
                  {tasks.map((task, index) => (
                    <li key={index} onClick={() => handleTaskClick(task)}>
                      <Link className="ti-dropdown-item" href="#!">
                        {task}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="cost_code_id" className="form-label">
                Cost Code ID
              </label>
              <input type="text" className="form-control" id="cost_code_id" />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input type="text" className="form-control" id="description" />
            </div>
            <div className="mb-4">
              <label htmlFor="budget_amount" className="form-label">
                Budget Amount
              </label>
              <input type="text" className="form-control" id="budget_amount" />
            </div>
            <div className="mb-4">
              <label htmlFor="bid_amount_from_sub" className="form-label">
                Bid Amount From Sub
              </label>
              <input
                type="text"
                className="form-control"
                id="bid_amount_from_sub"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="bid_details_from_sub" className="form-label">
                Bid Details From Sub
              </label>
              <input
                type="text"
                className="form-control"
                id="bid_details_from_sub"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="bid_inscope" className="form-label">
                Bid Inscope
              </label>
              <input type="text" className="form-control" id="bid_inscope" />
            </div>
            <div className="mb-4">
              <label htmlFor="bid_outscope" className="form-label">
                Bid Outscope
              </label>
              <input type="text" className="form-control" id="bid_outscope" />
            </div>
            <div className="mb-4">
              <label htmlFor="bid_payment_terms" className="form-label">
                Bid Payment Terms
              </label>
              <input
                type="text"
                className="form-control"
                id="bid_payment_terms"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="bid_expiration_date" className="form-label">
                Bid Expiration Date
              </label>
              <input
                type="date"
                className="form-control"
                id="bid_expiration_date"
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
              />
            </div>
            <div className="mb-4">
              <label htmlFor="builder_markup" className="form-label">
                Builder Markup
              </label>
              <input type="text" className="form-control" id="builder_markup" />
            </div>
            <div className="mb-4">
              <label htmlFor="builder_markup_percentage" className="form-label">
                Builder Markup Percentage
              </label>
              <input
                type="text"
                className="form-control"
                id="builder_markup_percentage"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="builder_notes" className="form-label">
                Builder Notes
              </label>
              <input type="text" className="form-control" id="builder_notes" />
            </div>
            <div className="mb-4">
              <label htmlFor="bid_status" className="form-label">
                Bid Status
              </label>
              <input type="text" className="form-control" id="bid_status" />
            </div>
            <div className="mb-4">
              <label htmlFor="subcontractor_id" className="form-label">
                Subcontractor ID
              </label>
              <input
                type="text"
                className="form-control"
                id="subcontractor_id"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="bid_notes" className="form-label">
                Bid Notes
              </label>
              <input type="text" className="form-control" id="bid_notes" />
            </div>
          </div>
          <button className="ti-btn ti-btn-primary-full" type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
CreateBid.layout = "Contentlayout";

export default CreateBid;
