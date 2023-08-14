import styled from 'styled-components';

export const StyledCreatePaperPackage = styled.div.attrs(props => ({
  className: props.className
}))`
    display: flex;
    flex-direction: column;
    align-items: center;

    .ant-checkbox-checked .ant-checkbox-inner,
    .ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: #121232;
      border-color: #121232;
    }
    .ant-checkbox:hover .ant-checkbox-inner {
      border-color: #121232;
    }

    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: #fff;
      height: 2px;
    }

    .table {
      margin-bottom: 32px;
    }

    .tableRow {
      height: 48px;
    }

    .tableItem {
      padding: 0 16px;
    }

    .submitButton {
      width: 88px;
      height: 40px;
      border-radius: 4px;

      > button {
        height: 100%
      }
    }
  `;

export const StyledBackToList = styled.div`
  display: inline-flex;
  margin-bottom: 24px;
  color: #8B90A0;
  line-height: 24px;
  align-items: center;
  align-self: flex-start;
  cursor: pointer;
`;

export const StyledTitle = styled.div`
  margin-bottom: 24px;
  margin-left: 32px;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  align-self: flex-start;
`;

export const StyledContainer = styled.div`
  margin-bottom: 24px;
  padding: 32px;
  border: 1px solid #E4E7EC;
  border-radius: 16px;
`;

export const StyledStep = styled.div`
  width: 1024px;

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const StyledSubTitle = styled.div`
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`;

export const StyledInputRow = styled.div`
  display: flex;
  align-items: center;

  > .label {
    margin-right: 16px;
    font-size: 16px;
    line-height: 24px;
  }

  > .input {
    width: 354px;
  }
`;

export const StyledFilter = styled.div`
margin-bottom: 16px;
  max-width: 106px;
`;