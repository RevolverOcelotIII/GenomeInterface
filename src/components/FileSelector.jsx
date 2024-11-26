import React, {useState, useRef} from 'react'
import { FileListContainer, FileSelectorContainer } from './FileSelectorStyle'

function FileSelector({ onUpload }) {
    const [selectedFiles, setSelectedFiles] = useState([])
    const fileInputRef = useRef(null)
    
    // Função para lidar com o clique e abrir o seletor de arquivos
    const handleContainerClick = () => {
      fileInputRef.current.click()
    }
  
    // Função para capturar o arquivo selecionado
    const handleFileChange = (event) => {
        setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...Array.from(event.target.files)])
    }
  
    // Função para lidar com arquivos arrastados para o contêiner
    const handleDrop = (event) => {
      event.preventDefault()
      setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...Array.from(event.dataTransfer.files)])
    }
  
    // Previne o comportamento padrão ao arrastar o arquivo
    const handleDragOver = (event) => {
      event.preventDefault()
    }

    const handleClearFiles = () => {
        setSelectedFiles([])
        fileInputRef.current.value = null // Reseta o valor do input de arquivos
    }
  
    return (
        <React.Fragment>
            {selectedFiles.length > 0 && (
                <FileListContainer>
                    <p>Selected Files:</p>
                    <ul>
                        {selectedFiles.map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                    <div>
                        <button onClick={handleContainerClick}>Add More</button>
                        <button onClick={() => onUpload(selectedFiles)}>Upload</button>
                        <button onClick={handleClearFiles}>Clear Files</button>
                    </div>
                </FileListContainer>
            )}
            <FileSelectorContainer
                onClick={handleContainerClick}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                filesSelected={selectedFiles.length > 0}
                >
                <input
                type="file"
                multiple
                accept=".fastq.gz"
                ref={fileInputRef}
                onChange={handleFileChange}
                />
                <p>Click here to select the files or drop them here (Supported: .fastq.gz)</p>
            </FileSelectorContainer>
        </React.Fragment>
    )
}


export default FileSelector