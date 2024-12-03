import axios from "axios"

export const createSample = async (files, genes, isSRA, projectUuid) => {
  // Cria um objeto FormData para enviar o arquivo
  const formData = new FormData()
  // formData.append('file', files)

  Array.from(files).forEach((file) => {
    formData.append("files[]", file)
  })
  formData.append(
    "json_data",
    JSON.stringify({
      genes,
      isSRA,
    })
  )

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_FETCH_API_URL}/fastq/upload/${projectUuid}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    console.log("Resposta da API:", response.data)
  } catch (error) {
    console.error(
      "Erro ao enviar arquivo:",
      error.response?.data || error.message
    )
  }
}

export const getSampleInfo = async (sampleUuid) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_FETCH_API_URL}/samples/info/${sampleUuid}`
    )
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error("Error processing sample", error)
  }
}

export const editSample = async (sample_name, sample_uuid) => {
    console.log(sample_name, sample_uuid)
    try {
      const response = await axios.post(`${process.env.REACT_APP_FETCH_API_URL}/samples/edit`, {
        name: sample_name,
        uuid: sample_uuid
      });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error creating sample:', error);
    }
}

export const deleteSample = async (sampleUuid) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_FETCH_API_URL}/samples/remove/${sampleUuid}`
    )
    console.log("Resposta do servidor:", response.data)
  } catch (error) {
    console.error(
      "Erro ao deletar entrada:",
      error.response?.data || error.message
    )
  }
}
