import React, {useState} from 'react'
import { Circles } from "react-loader-spinner";
import {createSample} from '../fetchAPI/sampleHandler'
import { ImportFileForm, CheckBoxList, CheckBoxContainer } from './SampleCreationStyle'
import FileSelector from './FileSelector'


function SampleCreation({projectUuid, closeModal, updateGrid}) {

  const [selectedGenes, setSelectedGenes] = useState({
    RHD: true,
    RHCE: false
  })
  const [isSRA, setIsSRA] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  const geneSelection = (gene, event) => {
    setSelectedGenes((prevSelectedGenes) => ({ ...prevSelectedGenes, [gene]: event.target.checked }))
  }

  const onUpload = (files) => {
    const genes = Object.keys(selectedGenes).filter((gene) => selectedGenes[gene]).map((gene) => gene)
    setIsUploading(true)
    createSample(files, genes, isSRA, projectUuid).then(() => {
      setIsUploading(false)
      updateGrid()
      closeModal()
    })
  }

  return isUploading? (
  <ImportFileForm>
    <h1>Uploading Files...</h1>
    <Circles visible height={100} width={100} color="#BB2C3A" />
  </ImportFileForm>) :(
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