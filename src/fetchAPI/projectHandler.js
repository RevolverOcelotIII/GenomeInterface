import axios from 'axios'

export const createProject = async (name) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/projects/create', {
        name: name
      });
      console.log(response.data.message); // "Project successfully created!"
    } catch (error) {
      console.error('Error creating project:', error);
    }
}

export const getAllProjects = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/projects/get-all')
      return response.data
    } catch (error) {
      console.error('Error getting projects', error);
    }
}

export const getProject = async (projectUuid) => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/projects/${projectUuid}`)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error('Error getting projects', error);
    }
}

export const getSamplesFromProject = async (projectUuid) => {
  try {
    const response = await axios.get(`http://127.0.0.1:5000/samples/${projectUuid}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('Error getting samples', error);
  }
}

