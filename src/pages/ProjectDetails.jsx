import React, { useEffect, useRef, useState } from "react";
import {
  FaMicroscope,
  FaTrashAlt,
  FaCheck,
  FaPlus,
  FaPencilAlt,
} from "react-icons/fa";
import { DNA } from "react-loader-spinner";
import { ImCross } from "react-icons/im";
import {
  ActionBar,
  ActionButton,
  CenterActionBar,
  ProjectList,
  ProjectsContainer,
  ProjectsPageContainer,
  InputForm,
} from "./ProjectsStyle";
import Modal from "../components/Modal";
import { useParams } from "react-router-dom";
import { getProject, getSamplesFromProject } from "../fetchAPI/projectHandler";
import { deleteSample, editSample } from "../fetchAPI/sampleHandler";
import SampleCreation from "../components/SampleCreation";
import SampleDetails from "../components/SampleDetails";

const sampleStatuses = ['Trimming...', 'Assemblying...', 'Collecting SNPs...', 'Done!', 'Error!']

function ProjectDetails() {
  const [isCreationModalOpen, setIsCreationModalOpen] = useState(false);
  const [sampleMarkedForDeletion, setSampleMarkedForDeletion] = useState(null);
  const [sampleMarkedForEdition, setSampleMarkedForEdition] = useState(null);
  const [project, setProject] = useState({});
  const [samples, setSamples] = useState();
  const [selectedSample, setSelectedSample] = useState('');
  const { project_uuid } = useParams();
  const intervalRef = useRef(null)

  console.log(samples)

  const getApiProjectAndSamples = () => {
    getProject(project_uuid).then((proj) => {
      setProject(proj);
    });
    getSamplesFromProject(project_uuid).then((api_samples) => {
      setSamples(api_samples);
    });
  };

  useEffect(() => {
    getApiProjectAndSamples();
  }, []);

  useEffect(() => {
    // Função para iniciar o intervalo
    const startInterval = () => {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          getApiProjectAndSamples()
        }, 5000); // A cada 5 segundos
      }
    };

    // Função para limpar o intervalo
    const stopInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    // Verifica as condições para iniciar ou parar o intervalo
    if (samples && samples.some((sample) => sample.state < 3 )) {
      startInterval();
    } else {
      stopInterval();
    }

    // Limpa o intervalo quando o componente desmonta
    return () => stopInterval();
  }, [samples])

/*
  useEffect(() => {
    if (samples && samples.length > 0) {
      // if (samples.map((sample) => sample.state).includes(3)) {
        if (!interval.current) interval.current = setInterval(console.log('test'), 5000);
      // } else if (interval.current) clearInterval(interval.current)
    }
  }, [samples])
*/
  const removeSample = (sampleUuid) => {
    deleteSample(sampleUuid).then(() => getApiProjectAndSamples());
  };

  const handleEditSample = () => {
    if (!sampleMarkedForEdition) return;
    editSample(sampleMarkedForEdition.name, sampleMarkedForEdition.uuid).then(
      () => getApiProjectAndSamples()
    );
    setSampleMarkedForEdition(null);
  };
  console.log(project)
  return (
    <React.Fragment>
      <ProjectsPageContainer>
        <ActionBar>
          <ActionButton onClick={() => setIsCreationModalOpen(true)}>
            <FaPlus />
            Add new Sample
          </ActionButton>
        </ActionBar>
        <ProjectsContainer>
          <h3>{project.name}</h3>
          <ProjectList>
            {samples && samples.length > 0
              ? samples.map((sample) => (
                  <div
                    key={sample.uuid}
                    onClick={() => sample.state === 3 && setSelectedSample(sample)}
                    disabled={sample.state === 3}
                  >
                    <div>
                      <FaMicroscope /> Sample
                      <div>
                        <button
                          onClick={(event) => {
                            event.stopPropagation();
                            event.preventDefault();
                            setSampleMarkedForEdition({
                              name: sample.name,
                              uuid: sample.uuid,
                            });
                          }}
                        >
                          <FaPencilAlt />
                        </button>
                        <button
                          onClick={(event) => {
                            event.stopPropagation();
                            setSampleMarkedForDeletion(sample.uuid);
                          }}
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                    <span>{sample.name}</span>
                    <p><b>{"Status: "}</b>{sampleStatuses[sample.state]} {sample.state < 3 && <DNA visible={true} height={15} width={15}  />}</p>
                  </div>
                ))
              : ""}
          </ProjectList>
        </ProjectsContainer>
      </ProjectsPageContainer>
      {isCreationModalOpen && (
        <Modal
          title="Add new Sample"
          closeModal={() => setIsCreationModalOpen(false)}
        >
          <SampleCreation
            projectUuid={project.uuid}
            closeModal={() => setIsCreationModalOpen(false)}
            updateGrid={getApiProjectAndSamples}
          />
        </Modal>
      )}

      {selectedSample && (
        <Modal
          title={selectedSample.name}
          closeModal={() => setSelectedSample(null)}
        >
          <SampleDetails sample={selectedSample} />
        </Modal>
      )}

      {sampleMarkedForEdition && (
        <Modal
          title={`Edit Sample Name`}
          closeModal={() => setSampleMarkedForEdition(null)}
          footer={
            <ActionButton onClick={handleEditSample}>Edit Sample</ActionButton>
          }
        >
          <InputForm>
            <label>Sample Name</label>
            <input
              type="text"
              value={sampleMarkedForEdition.name}
              onChange={(e) =>
                setSampleMarkedForEdition((prevSample) => ({
                  ...prevSample,
                  name: e.target.value,
                }))
              }
              placeholder="Insert the Sample name"
            />
          </InputForm>
        </Modal>
      )}

      {sampleMarkedForDeletion && (
        <Modal
          title={"Are you sure you want\n to remove this Sample?"}
          closeModal={() => setSampleMarkedForDeletion(null)}
        >
          <CenterActionBar>
            <ActionButton
              buttonColor="#C82333"
              onClick={() => setSampleMarkedForDeletion(null)}
            >
              <ImCross /> No
            </ActionButton>
            <ActionButton
              buttonColor="#218838"
              onClick={() => {
                removeSample(sampleMarkedForDeletion);
                setSampleMarkedForDeletion(null);
              }}
            >
              <FaCheck /> Yes
            </ActionButton>
          </CenterActionBar>
        </Modal>
      )}
    </React.Fragment>
  );
}

export default ProjectDetails;
