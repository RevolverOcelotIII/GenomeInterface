import React, {useState} from 'react'
import { Page } from './MainPageStyle'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ProjectsList from './ProjectsList';
import ProjectDetails from './ProjectDetails';
import Navbar from '../components/Navbar';
import AboutProject from './AboutProject';


function ProjectPage() {
  return (
    <React.Fragment>
        <Router>
        <Navbar />
            <Page>
                <Routes>
                  <Route exact path="/" element={<ProjectsList />} />
                  <Route path="/project/:project_uuid" element={<ProjectDetails />} />
                  <Route path="/about" element={<AboutProject />} />
                </Routes>
            </Page>
        </Router>
    </React.Fragment>

  )
}

export default ProjectPage