import React, { Fragment, useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import network from "@/config";

const Pageheader = (props) => {
  const loadProjectData = props?.loadProjectData;
  const [projectData, setProjectData] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
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
    axios
      .get(`${network.serverUrl}api/projectdata/`)
      .then((response) => {
        const data = response.data;
        setProjectData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleProjectSelect = (selectedOption) => {
    const selectedProject = selectedOption
      ? projectData.find(
          (project) => project.project_id === selectedOption.value
        )
      : null;
    setSelectedProject(selectedProject);
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
          <span className="text-defaulttextcolor dark:text-white text-[0.875rem] font-normal mr-2">
            Select Project:
          </span>
          <Select
            name="project"
            value={
              selectedProject
                ? {
                    value: selectedProject.project_id,
                    label: selectedProject.project_name,
                  }
                : null
            }
            options={[
              {
                value: null,
                label: "Select Project",
              },
            ].concat(
              projectData.map((project) => ({
                value: project.project_id,
                label: project.project_name,
              }))
            )}
            styles={{
              control: (styles) => ({
                ...styles,
                backgroundColor: "rgb(132 90 223)",
                border: "1px solid #e5e7eb",
                borderRadius: "0.375rem",
                height: "2.5rem",
                padding: "0 0.5rem",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                fontWeight: "400",
                boxShadow: "none",
                maxWidth: "17rem",
                minWidth: "17rem",
                maxHeight: "2.5rem",
                "&:hover": {
                  borderColor: "#e5e7eb",
                },
                "&:focus": {
                  borderColor: "#2563eb",
                },
              }),
              indicatorSeparator: (styles) => ({
                ...styles,
                display: "none",
              }),
              dropdownIndicator: (styles) => ({
                ...styles,
                color: "#fff",
              }),
              singleValue: (styles) => ({
                ...styles,
                color: "#fff",
                fontWeight: "600",
              }),
              menu: (styles) => ({
                ...styles,
                backgroundColor: "#fff",
                color: "#000",
              }),
              option: (styles, { isFocused, isSelected }) => ({
                ...styles,
                backgroundColor: isSelected
                  ? "#8050df"
                  : isFocused
                  ? "#f3f4f6"
                  : "#fff",
                color: isSelected ? "#fff" : "#000",
                "&:hover": {
                  backgroundColor: "#f3f4f6",
                },
              }),
              placeholder: (styles) => ({
                ...styles,
                color: "#fff",
                fontWeight: "600",
              }),
            }}
            className="js-example-basic-single w-full min-w-[210px]"
            isSearchable
            menuPlacement="auto"
            placeholder="Select Project"
            onChange={handleProjectSelect}
          />
        </ol>
      </div>
    </Fragment>
  );
};

export default Pageheader;
