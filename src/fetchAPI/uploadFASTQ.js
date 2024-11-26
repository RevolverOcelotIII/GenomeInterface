import axios from 'axios'

export const uploadFastq = async (files, genes, isSRA, projectUuid) => {
    // Cria um objeto FormData para enviar o arquivo
    const formData = new FormData()
    // formData.append('file', files)

    Array.from(files).forEach((file) => {
        formData.append('files[]', file);
    });
    formData.append('json_data', JSON.stringify({
        genes,
        isSRA
    })) 

    try {
        const response = await axios.post(`http://127.0.0.1:5000/fastq/upload/${projectUuid}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        console.log('Resposta da API:', response.data)
    } catch (error) {
        console.error('Erro ao enviar arquivo:', error.response?.data || error.message)
    }
}
