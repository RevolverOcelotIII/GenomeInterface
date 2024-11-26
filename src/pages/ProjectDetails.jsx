import React, {useEffect, useState} from 'react'
import { FaMicroscope } from "react-icons/fa"
import { ActionBar, ActionButton, ProjectList, ProjectsContainer, ProjectsPageContainer } from './ProjectsStyle'
import Modal from '../components/Modal'
import { useParams } from 'react-router-dom'
import { getProject, getSamplesFromProject } from '../fetchAPI/projectHandler'
import SampleCreation from '../components/SampleCreation'


function ProjectDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [project, setProject] = useState({})
  const [samples, setSamples] = useState()
  const { project_uuid } = useParams();

  const getApiProjectAndSamples = () => {
    getProject(project_uuid).then((proj) => {
      setProject(proj)
    })
    getSamplesFromProject(project_uuid).then((api_samples) => {
      setSamples(api_samples)
    })
  }
  useEffect(() => {
    getApiProjectAndSamples()
  }, [])

  return (
    <React.Fragment>
      <ProjectsPageContainer>
        <ActionBar>
          <ActionButton onClick={() => setIsModalOpen(true)}>Add new Sample</ActionButton>  
        </ActionBar>
        <ProjectsContainer>
          <h3>{project.name}</h3>
          <ProjectList>
            {samples && samples.length > 0? samples.map((project) => (
              <div>
                <div><FaMicroscope /> Sample</div>
                {project.name}
              </div>
              )): ''}
          </ProjectList>
        </ProjectsContainer>
      </ProjectsPageContainer>
      {isModalOpen && 
        (<Modal title="Add new Sample" closeModal={() => setIsModalOpen(false)}
        >
          <SampleCreation projectUuid={project.uuid} closeModal={() => setIsModalOpen(false)}/>
        </Modal>)
      }
    </React.Fragment>
  )
}

export default ProjectDetails