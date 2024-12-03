import styled from "styled-components";

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px;
`;

const Label = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
`;

const Select = styled.select`
  width: 200px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  appearance: none; /* Remove a aparência padrão */
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const Option = styled.option`
  font-size: 14px;
  color: #333;
`;

export {Label, Option, Select, SelectContainer, }