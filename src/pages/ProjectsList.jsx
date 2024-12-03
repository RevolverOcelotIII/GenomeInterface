import React, { useEffect, useRef, useState } from "react"
import { FaFolder, FaTrashAlt, FaCheck, FaPencilAlt } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import {
  ActionBar,
  ActionButton,
  CenterActionBar,
  InputForm,
  ProjectList,
  ProjectsContainer,
  ProjectsPageContainer,
} from "./ProjectsStyle"
import { MdCreateNewFolder } from "react-icons/md"
import Modal from "../components/Modal"
import { Link } from "react-router-dom"
import {
  createProject,
  deleteProject,
  editProject,
  getAllProjects,
} from "../fetchAPI/projectHandler"

function ProjectsList() {
  const [isCreationModalOpen, setIsCreationModalOpen] = useState(false)
  const [projectMarkedForDeletion, setProjectMarkedForDeletion] =
    useState(null)
  const [projectMarkedForEdition, setProjectMarkedForEdition] = useState(null)
  const [projects, setProjects] = useState(null)
  const projectNameRef = useRef(null)
  console.log(projectMarkedForEdition)

  const updateProjects = () =>
    getAllProjects().then((apiProjects) => {
      setProjects(apiProjects)
    })

  const handleCreateProject = () => {
    if (!projectNameRef) return
    createProject(projectNameRef.current.value).then(() => updateProjects())
    setIsCreationModalOpen(false)
  }

  const handleEditProject = () => {
    if (!projectMarkedForEdition) return
    editProject(
      projectMarkedForEdition.name,
      projectMarkedForEdition.uuid
    ).then(() => updateProjects())
    setProjectMarkedForEdition(null)
  }

  useEffect(() => {
    updateProjects()
  }, [])

  return (
    <React.Fragment>
      <ProjectsPageContainer>
        <ActionBar>
          <ActionButton onClick={() => setIsCreationModalOpen(true)}>
            <MdCreateNewFolder />
            Create New Project
          </ActionButton>
        </ActionBar>
        <ProjectsContainer>
          <h3>Projects</h3>
          <ProjectList>
            {projects && projects.length > 0
              ? projects.map((project) => (
                  <Link to={`/project/${project.uuid}`}>
                    <div>
                      <div>
                        <FaFolder />
                        Project
                        <div>
                          <button
                            onClick={(event) => {
                              event.stopPropagation()
                              event.preventDefault()
                              setProjectMarkedForEdition({
                                name: project.name,
                                uuid: project.uuid,
                              })
                            }}
                          >
                            <FaPencilAlt />
                          </button>
                          <button
                            onClick={(event) => {
                              event.stopPropagation()
                              event.preventDefault()
                              setProjectMarkedForDeletion(project.uuid)
                            }}
                          >
                            <FaTrashAlt />
                          </button>
                        </div>
                      </div>
                      {project.name}
                    </div>
                  </Link>
                ))
              : ""}
          </ProjectList>
        </ProjectsContainer>
      </ProjectsPageContainer>
      {isCreationModalOpen && (
        <Modal
          title={`${projectMarkedForEdition ? "Edit" : "Create new"} Project`}
          closeModal={() => setIsCreationModalOpen(false)}
          footer={
            <ActionButton onClick={handleCreateProject}>Create</ActionButton>
          }
        >
          <InputForm>
            <label>Project Name</label>
            <input
              ref={projectNameRef}
              type="text"
              placeholder="Insert the Project name"
            />
          </InputForm>
        </Modal>
      )}

      {projectMarkedForEdition && (
        <Modal
          title={`Edit Project Name`}
          closeModal={() => setProjectMarkedForEdition(null)}
          footer={
            <ActionButton onClick={handleEditProject}>
              Edit Project
            </ActionButton>
          }
        >
          <InputForm>
            <label>Project Name</label>
            <input
              type="text"
              value={projectMarkedForEdition.name}
              onChange={(e) =>
                setProjectMarkedForEdition((prevProject) => ({
                  ...prevProject,
                  name: e.target.value,
                }))
              }
              placeholder="Insert the Project name"
            />
          </InputForm>
        </Modal>
      )}

      {projectMarkedForDeletion && (
        <Modal
          title={
            "Are you sure you want to remove\n this Project and all of it's samples?"
          }
          closeModal={() => setProjectMarkedForDeletion(null)}
        >
          <CenterActionBar>
            <ActionButton
              buttonColor="#C82333"
              onClick={() => setProjectMarkedForDeletion(null)}
            >
              <ImCross /> No
            </ActionButton>
            <ActionButton
              buttonColor="#218838"
              onClick={() => {
                deleteProject(projectMarkedForDeletion).then(() =>
                  updateProjects()
                )
                setProjectMarkedForDeletion(null)
              }}
            >
              <FaCheck /> Yes
            </ActionButton>
          </CenterActionBar>
        </Modal>
      )}
    </React.Fragment>
  )
}

export default ProjectsList
