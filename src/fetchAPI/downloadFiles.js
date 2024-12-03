import axios from 'axios'

export const downloadFile = async (fileType, sampleUuid, gene, responseDownload) => {
  
  try {
    const response = await axios.get(`${process.env.REACT_APP_FETCH_API_URL}/samples/download/${sampleUuid}/${gene}/${fileType}`, {
      responseType: "blob", // Necessário para arquivos binários
    });

    // Criar um link temporário para download
    const blob = new Blob([response.data], { type: response.headers["content-type"] });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = responseDownload;
    document.body.appendChild(link);
    link.click();
    link.remove();
    
    console.log("Arquivo baixado com sucesso!");
  } catch (error) {
    console.error("Erro ao baixar o arquivo:", error);
    if (error.response && error.response.status === 404) {
      alert("Arquivo não encontrado!");
    } else {
      alert("Erro ao tentar baixar o arquivo.");
    }
  }
}