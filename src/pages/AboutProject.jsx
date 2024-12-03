import React from 'react'
import { AboutContainer, Developer } from './AboutProjectStyle'

function AboutProject() {
  return (
    <AboutContainer>
      <div>
        <h1>About the V.A.M.P.I.R.E. tool</h1>
        <img src='vampire-logo.png' alt='a'/>
        <p>
          The V.A.M.P.I.R.E. tool which Stands for <b>V</b>ariant <b>A</b>nalyzer by <b>M</b>utation <b>P</b>rofile In <b>R</b>ed blood cell <b>E</b>pitopes, is a tool to identify Rh blood group phenotypes. 
          The initial problem lies in the limitations of conventional tests, which do not always capture all genetic variations of Rh blood group antigens, produced by the RHD and RHCE genes.
          The developed web platform processes NGS samples to identify and group mutations in the RHD and RHCE genes, associating them with specific phenotypes based on ISBT tables. The tool demonstrated high accuracy in identifying relevant SNPs,
          detecting 165 SNPs in exons across a total of 14 samples, identifying 78 characteristic phenotypes, such as weak D, partial D, and DEL classifications, in accordance with the latest ISBT tables for the RHD and RHCE genes.
          This facilitates clinical and scientific interpretation of the data. The tool also generates comprehensive reports, including identified SNPs, associated alleles,
          and other relevant metadata, simplifying the process and providing an in-depth analysis of genetic variability in the Rh blood group.
        </p>
        <div>
          <p><b>How to Use: </b></p>
          <p><b>1-</b> First, Create Your <b>project</b>, consider it as your personal space.</p>
          <p><b>2-</b> Then you can add your Samples to the Project. For the moment, it only supports <b>paired-end Illumina</b> samples, so it is required that you upload your <b>forward</b> defined by <b>"_R1"</b> in the file name and the <b>reverse</b>, defined by <b>"_R2"</b>. The tool also only supports <b>.fastq.gz</b> files. You can add as many samples as you want at once, as long as they are in pairs sharing the same file name (except for "R1" and "R2").</p>
          <p><b>3-</b> When you add your Samples you must check if you want ot investigate the genes <b>RHD</b> or <b>RHCE</b> or <b>both</b></p>
          <p><b>4-</b> You may also check if the Sample is an SRA taken by the Genbank, if it is, just check that it is an SRA, and the tool will automatically search for it's library name (it must still come as .fastq.gz in foward and reverse though).</p>
          <p><b>5-</b> Start processing your samples by clicking on the <b>Upload</b> button. They will start to be processed right away in background, so you can keep doing anything else in between.</p>
          <p><b>6-</b> If the Sample end with a status <b>Error!</b> You will have to remove it and try again.</p>
          <p><b>7-</b> Once the Sample enters the <b>Done!</b> status, you can check it's results by clicking on it.</p>
          <p><b>8-</b> The results will show the Phenotypes it collected from the correspondent ISBT tables, as well as the "Classification" of then (only for the RHD gene). Then it will show all of the SNPs found in the uploaded sample.</p>
          <p><b>9-</b> If you need to, you can download any of the filed generated during the process, to make parts of the process yourself. The available files are <b>.BAM, .VCF and .FASTA</b> </p>
          <p><b>10-</b> You can bring your results anywhere by downloading the Sheet files (either .CSV or .XLSX), they will have all of the shown data ready to be exported.</p>
          <br />
          <Developer><b>Developer: </b><img src='developer.jpg' alt='developer' />Daniel Bahiense</Developer>
          <p><b>Version: </b>1.0 - 2024</p>
        </div>

      </div>
    </AboutContainer>
  )
}

export default AboutProject