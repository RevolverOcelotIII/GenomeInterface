import axios from 'axios'

export const createProject = async (project_name) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_FETCH_API_URL}/projects/create`, {
        name: project_name
      });
      console.log(response.data.message); // "Project successfully created!"
    } catch (error) {
      console.error('Error creating project:', error);
    }
}

export const editProject = async (project_name, project_uuid) => {
  console.log(project_name, project_uuid)
  try {
    const response = await axios.post(`${process.env.REACT_APP_FETCH_API_URL}/projects/edit`, {
      name: project_name,
      uuid: project_uuid
    });
    console.log(response.data.message); // "Project successfully created!"
  } catch (error) {
    console.error('Error creating project:', error);
  }
}


export const deleteProject = async (projectUuid) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_FETCH_API_URL}/projects/remove/${projectUuid}`
    )
    console.log("Resposta do servidor:", response.data)
  } catch (error) {
    console.error(
      "Erro ao deletar entrada:",
      error.response?.data || error.message
    )
  }
}

export const getAllProjects = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_FETCH_API_URL}/projects/get-all`)
      return response.data
    } catch (error) {
      console.error('Error getting projects', error);
    }
}

export const getProject = async (projectUuid) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_FETCH_API_URL}/projects/${projectUuid}`)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error('Error getting projects', error);
    }
}

export const getSamplesFromProject = async (projectUuid) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_FETCH_API_URL}/samples/${projectUuid}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('Error getting samples', error);
  }
}
