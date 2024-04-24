import React, { Fragment, useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import network from "@/config";
import Link from "next/link";

const Pageheader = (props) => {
  const loadProjectData = props?.loadProjectData;
  const isDisabled = props?.isDisabled;
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
        <ol className="flex items-center whitespace-nowrap min-w-0">
          <li className="text-[1.1rem] ps-[0.5rem]">
            <Link
              className="flex items-center text-primary hover:text-primary dark:text-primary truncate"
              href={props.mainpageurl}
            >
              {props.mainpage}
              <i className="ti ti-chevrons-right flex-shrink-0 text-[#8c9097] dark:text-white/50 px-[0.5rem] overflow-visible rtl:rotate-180"></i>
            </Link>
          </li>
          <li
            className="text-[1.1rem] text-defaulttextcolor font-semibold dark:text-[#8c9097] dark:text-white/50 "
            aria-current="page"
          >
            {props.activepage}
          </li>
        </ol>
        <ol className="flex items-center whitespace-nowrap min-w-0">
          <span className="text-defaulttextcolor dark:text-white text-[0.875rem] font-normal mr-2">
            Select Project:
          </span>
          <Select
            name="project"
            isDisabled={isDisabled}
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
              control: (styles, { isDisabled }) => ({
                ...styles,
                backgroundColor: isDisabled ? "#e2e8f0" : "rgb(132 90 223)",
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
              singleValue: (styles,{ isDisabled }) => ({
                ...styles,
                color: isDisabled ? "#e2e8f0" : "#fff",
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
              placeholder: (styles,{ isDisabled }) => ({
                ...styles,
                color: isDisabled ? "#e2e8f0" : "#fff",
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
