import styled from "styled-components";

const nucleotideColors = {
  A: "#f54242",
  C: "#e641f2",
  T: "#55f25a",
  G: "#ebe844",
};

const SampleDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  height: 530px;
  background-color: blue;
  max-width: 80rem;
  background-color: #fff;
`;

const SampleSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 65px 10px;
  margin: 0 0 15px;
  h3 {
    width: 100%;
    text-align: start;
    margin-bottom: 5px;
  }

  p {
    width: 100%;
    text-align: start;
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  span {
    display: flex;
    white-space: pre-wrap;
  }
`;

const TwoSampleSections = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px 65px 10px;
  margin: 0 0 15px;
  > div {
    width: 40%;
    h3 {
      width: 100%;
      text-align: start;
      margin-bottom: 5px;
    }
    a, a:hover, a:visited, a:active {
      color: inherit;
      text-decoration: none;
    }
    a, button {
      width: 300px;
      padding: 10px;
      border: 1px solid #000;
      background-color: #fff;
      border-radius: 5px;
      transition: 200ms;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:disabled {
        &:hover {
          filter: brightness(1);
          background-color: #fff;
          cursor: default;
        }
        
      } 
        &:hover {
        transition: 200ms;
        filter: brightness(0.8);
        background-color: #f9f9f9;
      }
      svg {
        margin-right: 10px;
      }
    }
  }

`

const Nucleotide = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => nucleotideColors[props.nucleotide]};
  border: ${(props) => (props.isSnp ? "3px solid black" : "none")};
  filter: brightness(${(props) => (props.isSnp ? "0.9" : "1")});
`;

const TableContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  border-radius: 8px;
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
`;

const TableHeader = styled.thead`
  background-color: #1B1B1B;
  color: #fff;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.th`
  padding: 15px;
  text-align: center;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`;

const TableData = styled.td`
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

export {
  SampleDetailsContainer,
  SampleSection,
  TwoSampleSections,
  Nucleotide,
  TableCell,
  TableContainer,
  Table,
  TableHeader,
  TableData,
  TableRow
};
