import React, {useState} from 'react'
import { Page, Navbar } from './MainPageStyle'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ProjectsList from './ProjectsList';
import ProjectDetails from './ProjectDetails';


function ProjectPage() {
  return (
    <React.Fragment>
        <Navbar>
          <h1>SNP Finder</h1>
        </Navbar>
        <Router>
            <Page>
                <Routes>
                  <Route exact path="/" element={<ProjectsList />} />
                  <Route path="/project/:project_uuid" element={<ProjectDetails />} />
                </Routes>
            </Page>
        </Router>
    </React.Fragment>

  )
}

export default ProjectPage