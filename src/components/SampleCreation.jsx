import React, {useState} from 'react'
import {uploadFastq} from '../fetchAPI/uploadFASTQ'
import { ImportFileForm, CheckBoxList, CheckBoxContainer } from './SampleCreationStyle'
import FileSelector from './FileSelector'


function SampleCreation({projectUuid, closeModal}) {

  const [selectedGenes, setSelectedGenes] = useState({
    RHD: true,
    RHCE: false
  })
  const [isSRA, setIsSRA] = useState(false)

  const geneSelection = (gene, event) => {
    setSelectedGenes((prevSelectedGenes) => ({ ...prevSelectedGenes, [gene]: event.target.checked }))
  }

  const onUpload = (files) => {
    const genes = Object.keys(selectedGenes).filter((gene) => selectedGenes[gene]).map((gene) => gene)
    uploadFastq(files, genes, isSRA, projectUuid)
    closeModal()
  }

  return (
    <ImportFileForm>
      <CheckBoxContainer>
        <CheckBoxList>
          <span>
            Whats the Gene?
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
  )
}

export default SampleCreation