import React, {useEffect, useRef, useState} from 'react'
import { FaFolder } from "react-icons/fa";
import { ActionBar, ActionButton, InputForm, ProjectList, ProjectsContainer, ProjectsPageContainer } from './ProjectsStyle'
import Modal from '../components/Modal'
import { Link } from 'react-router-dom'
import { createProject, getAllProjects } from '../fetchAPI/projectHandler'


function ProjectsList() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [projects, setProjects] = useState(null)
  const projectNameRef = useRef(null)

  const updateProjects = () => getAllProjects().then((projects) => {
    setProjects(projects)
  })

  const handleCreateProject = () => {
    if (!projectNameRef) return
    createProject(projectNameRef.current.value)
    setIsModalOpen(false)
    updateProjects()
  }

  useEffect(() => {
    updateProjects()
  }, [])

  return (
    <React.Fragment>
      <ProjectsPageContainer>
        <ActionBar>
          <ActionButton onClick={() => setIsModalOpen(true)}>Create New Project</ActionButton>  
        </ActionBar>
        <ProjectsContainer>
          <h3>Projects</h3>
          <ProjectList>
            {projects && projects.length > 0? projects.map((project) => (
              <Link to={`/project/${project.uuid}`}>
                <div>
                  <div><FaFolder />Project</div>
                  {project.name}
                </div>
              </Link>
            )): ''}
          </ProjectList>
        </ProjectsContainer>
      </ProjectsPageContainer>
      {isModalOpen && 
        (<Modal title="Create new Project" closeModal={() => setIsModalOpen(false)}
          footer={(
            <ActionButton onClick={handleCreateProject}>Create</ActionButton>
          )}
        >
          <InputForm>
            <label>Project Name</label>
            <input ref={projectNameRef} type='text' placeholder='Insert the Project name' />
          </InputForm>
        </Modal>)
      }
    </React.Fragment>
  )
}

export default ProjectsList