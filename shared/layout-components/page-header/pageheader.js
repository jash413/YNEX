import React, { Fragment, useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import network from "@/config";

const Pageheader = (props) => {
  const loadProjectData = props?.loadProjectData;
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    axios
      .get(`${network.serverUrl}api/projectdata/`)
      .then((response) => {
        const data = response.data;
        setProjectData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleProjectSelect = (e) => {
    const selectedProject = projectData.find(
      (project) => project.project_id === e.value
    );
    // Save the selected project to localStorage
    localStorage.setItem("selectedProject", JSON.stringify(selectedProject));
    loadProjectData();
  };
  return (
    <Fragment>
      <div className="block justify-between page-header md:flex">
        <div>
          <h3 className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-[1.125rem] font-semibold">
            {props.currentpage}
          </h3>
        </div>
        <ol className="flex items-center whitespace-nowrap min-w-0">
          <Select
            name="project"
            options={projectData.map((project) => ({
              value: project.project_id,
              label: project.project_name,
            }))}
            className="js-example-basic-single w-full min-w-[210px]"
            isSearchable
            menuPlacement="auto"
            classNamePrefix="Select2"
            placeholder="Select Project"
            onChange={handleProjectSelect}
          />
        </ol>
      </div>
    </Fragment>
  );
};

export default Pageheader;
