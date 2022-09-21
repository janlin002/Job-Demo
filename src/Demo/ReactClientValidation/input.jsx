import { Input } from "antd";
import styled from "styled-components";
import PropTypes from 'prop-types';
const StyledInput = styled(Input)``;

const InputWrapper = styled.div`
  /* margin: 15px 0;
  width: 400px; */
`;

const ErrorText = styled.div`
  color: red;
`;

function AntdInput({ text, isError, ...props }) {
  return (
    <InputWrapper>
      {text && text()}
      <StyledInput status={isError && "error"} {...props} />
      <ErrorText>{isError || ""}</ErrorText>
    </InputWrapper>
  );
}

export default AntdInput;

AntdInput.propTypes = {
  text: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
}
