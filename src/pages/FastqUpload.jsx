import React, {useState} from 'react'
import createSample from '../fetchAPI/sampleHandler'
import { Page, Navbar, ImportFileForm, CheckBoxList, CheckBoxContainer } from '../components/SampleCreation'
import FileSelector from '../components/FileSelector'


function ProjectPage() {

  const [selectedGenes, setSelectedGenes] = useState({
    RHD: true,
    RHCE: false
  })
  const [isSRA, setIsSRA] = useState(false)

  const geneSelection = (gene, event) => {
    setSelectedGenes((prevSelectedGenes) => ({ ...prevSelectedGenes, [gene]: event.target.checked }))
  }

  console.log(selectedGenes, isSRA)

  const onUpload = (files) => {
    createSample(files, Object.keys(selectedGenes).filter((gene) => selectedGenes[gene]).map((gene) => gene), isSRA)
  }

  return (
    <React.Fragment>
        <Navbar>
          <h1>SNP Finder</h1>
        </Navbar>
        <Page>
          <ImportFileForm>
            <h2>
              Upload your .FASTQ.gz samples
            </h2>
          <CheckBoxContainer>
            <CheckBoxList>
              <span>
                Whats the Gene being investigated?
              </span>
            <label>
              <input type="checkbox" defaultChecked onChange={(event) => geneSelection('RHD', event)} />
              <span>RHD</span>
            </label>
            <label>
              <input type="checkbox" onChange={(event) => geneSelection('RHCE', event)} />
              <span>RHCE</span>
            </label>
            </CheckBoxList>

            <CheckBoxList>
              <span>
                Is the Sample an SRA?
              </span>
            <label>
              <input type="radio" name="sra-check" onChange={() => setIsSRA(true)}/>
              <span>Yes</span>
            </label>
            <label>
              <input type="radio" defaultChecked name="sra-check" onChange={() => setIsSRA(false)}/>
              <span>No</span>
            </label>
            </CheckBoxList>
          </CheckBoxContainer>
          <FileSelector onUpload={onUpload} />
          </ImportFileForm>
        </Page>
    </React.Fragment>

  )
}

export default ProjectPage