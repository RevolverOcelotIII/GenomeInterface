import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import {
  SampleDetailsContainer,
  SampleSection,
  Nucleotide,
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableData,
  TwoSampleSections,
} from "./SampleDetailsStyle";
import { FaDna, FaCloudDownloadAlt, FaFileExcel } from "react-icons/fa";
import Tooltip from "./Tooltip";
import { exonCounter } from "../utils/ExonCounter";
import { getSampleInfo } from "../fetchAPI/sampleHandler";
import { Label, Option, Select, SelectContainer } from "./SelectStyle";
import { downloadFile } from "../fetchAPI/downloadFiles";

const referenceSequences = {
  RHD: "NG_007494.1",
  RHCE: "NG_009208.3",
};

function SampleDetails({ sample }) {
  const [processedSampleData, setProcessedSampleData] = useState(null);
  const [selectedGene, setSelectedGene] = useState(null);

  const getPositionReference = (position) => {
    if (!processedSampleData) return null;
    const snp = processedSampleData[selectedGene].snp_info.find(
      (snp) => snp.exome_position === position
    );
    return snp ? snp.reference : null;
  };

  useEffect(() => {
    getSampleInfo(sample.uuid).then((sampleInfo) => {
      setProcessedSampleData(sampleInfo);
      setSelectedGene(Object.keys(sampleInfo || {})[0]);
    });
  }, [sample]);

  return processedSampleData ? (
    <SampleDetailsContainer>
      <SampleSection>
        <SelectContainer>
          <Label htmlFor="custom-select">Select a gene to be viewed</Label>
          <Select
            id="custom-select"
            value={selectedGene}
            onChange={(e) => setSelectedGene(e.target.value)}
          >
            {Object.keys(processedSampleData).map((gene) => (
              <Option value={gene}>{gene}</Option>
            ))}
          </Select>
        </SelectContainer>
      </SampleSection>

      <SampleSection>
        <h3>Phenotypes Found</h3>
        <TableContainer>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Phenotype</TableCell>
                <TableCell>Phenotype SNPs</TableCell>
                <TableCell>Classification</TableCell>
              </TableRow>
            </TableHeader>
            <tbody>
              {processedSampleData[selectedGene]?.phenotypes.sort((a, b) => a.classification.localeCompare(b.classification)).map(
                (phenotype, index) => (
                  <TableRow>
                    <TableData>{index + 1}</TableData>
                    <TableData>{phenotype.name}</TableData>
                    <TableData>{phenotype.snp_count}</TableData>
                    <TableData>{phenotype.classification}</TableData>
                  </TableRow>
                )
              )}
            </tbody>
          </Table>
        </TableContainer>
      </SampleSection>

      <SampleSection>
        <h3>SNPs found</h3>
        <TableContainer>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Genome Position</TableCell>
                <TableCell>Exome Position</TableCell>
                <TableCell>Exon</TableCell>
                <TableCell>Reference</TableCell>
                <TableCell>Mutation</TableCell>
                <TableCell>Times Found in Table</TableCell>
                <TableCell>Quality</TableCell>
              </TableRow>
            </TableHeader>
            <tbody>
              {processedSampleData[selectedGene]?.snp_info.length > 0 ? (
                processedSampleData[selectedGene]?.snp_info.map(
                  (snp, index) => (
                    <TableRow>
                      <TableData>{index + 1}</TableData>
                      <TableData>{snp.genome_position}</TableData>
                      <TableData>{snp.exome_position}</TableData>
                      <TableData>{snp.exon}</TableData>
                      <TableData>{snp.reference}</TableData>
                      <TableData>{snp.mutation}</TableData>
                      <TableData>{snp.phenotypes_count}</TableData>
                      <TableData>{snp.quality}</TableData>
                    </TableRow>
                  )
                )
              ) : (
                <TableRow>
                  <TableData colSpan={9}>
                    No SNPs found! (Same as Reference)
                  </TableData>
                </TableRow>
              )}
            </tbody>
          </Table>
        </TableContainer>
      </SampleSection>

      <TwoSampleSections>
        <div>
          <h3>Reference Sequence</h3>
          <a
            href={`https://www.ncbi.nlm.nih.gov/nuccore/${referenceSequences[selectedGene]}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaDna /> {referenceSequences[selectedGene]}
          </a>
        </div>
        <div>
          <h3>Bam File</h3>
          <button onClick={() => downloadFile('BAM', sample.uuid, selectedGene, `${sample.name}_${selectedGene}_sorted.bam`)}><FaCloudDownloadAlt />Download Bam file</button>
        </div>
        <div>
          <h3>VCF File</h3>
          <button onClick={() => downloadFile('VCF', sample.uuid, selectedGene, `${sample.name}_${selectedGene}.vcf.gz`)}><FaCloudDownloadAlt />Download VCF file</button>
        </div>
      </TwoSampleSections>

      <TwoSampleSections>
        <div>
          <h3>FASTA File</h3>
          <button onClick={() => downloadFile('FASTA', sample.uuid, selectedGene, `${sample.name}_${selectedGene}.fasta`)}><FaCloudDownloadAlt />Download FASTA file</button>
        </div>
        <div>
          <h3>CSV Sheet</h3>
          <button disabled={processedSampleData[selectedGene]?.snp_info.length === 0} onClick={() => downloadFile('CSV', sample.uuid, selectedGene, `${sample.name}_${selectedGene}.csv`)}><FaFileExcel />Download Sample Data as a .CSV sheet</button>
        </div>
        <div>
          <h3>XLSX Sheet</h3>
          <button disabled={processedSampleData[selectedGene]?.snp_info.length === 0} onClick={() => downloadFile('XLSX', sample.uuid, selectedGene, `${sample.name}_${selectedGene}.xlsx`)}><FaFileExcel />Download Sample Data as a .XLSX sheet</button>
        </div>
      </TwoSampleSections>
      <SampleSection>
        <h3>Aligned Sequence</h3>
        <div>
          {[...processedSampleData[selectedGene].aligned_sequence].map(
            (nucleotide, index) => (
              <React.Fragment>
                <Tooltip
                  text={`Position: ${index + 1}\nExon: ${exonCounter(
                    index + 1,
                    "RHD"
                  )} ${
                    getPositionReference(index + 1)
                      ? `\nReference: ${getPositionReference(index + 1)}`
                      : ""
                  }`}
                >
                  <Nucleotide
                    nucleotide={nucleotide}
                    isSnp={processedSampleData[selectedGene].snp_info
                      .map((snp) => snp.exome_position)
                      .includes(index + 1)}
                  >
                    {nucleotide}
                  </Nucleotide>
                </Tooltip>

              </React.Fragment>
            )
          )}
        </div>
      </SampleSection>
    </SampleDetailsContainer>
  ) : (
    <SampleDetailsContainer>
      <h1>Loading Sample data...</h1>
      <Circles visible height={100} width={100} color="#BB2C3A" />
    </SampleDetailsContainer>
  );
}

export default SampleDetails;
