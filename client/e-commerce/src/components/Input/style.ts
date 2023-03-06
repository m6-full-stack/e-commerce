import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.3rem;
  flex-direction: column;
  width: 100%;

  background: var(--color_white);
  border-radius: 8px;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    > label {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: ${(props) => props.theme.grey1};
    }

    > input {
      width: 100%;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 0;
      display: flex;

      height: 3rem;
      min-height: 3rem;
      border: 1.5px solid ${(props) => props.theme.grey7};
      border-radius: 4px;
      color: ${(props) => props.theme.grey3};

      padding: 0 1rem;
      cursor: pointer;

      :focus {
        outline: transparent;
        box-shadow: 0 0 0 1.5px ${(props) => props.theme.brand2};
      }
      :hover {
        background: ${(props) => props.theme.grey8};
      }
    }

    > textarea {
      display: flex;
      width: 100%;
      flex-direction: row;
      align-items: flex-start;

      gap: 10px;
      border: 1.5px solid #e9ecef;
      border-radius: 4px;

      color: ${(props) => props.theme.grey3};

      padding: 0.5rem;

      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;


      resize: none;
      :focus {
        outline: transparent;
        box-shadow: 0 0 0 1.5px ${(props) => props.theme.brand2};
      }
      :hover {
        background: ${(props) => props.theme.grey8};
      }
    }
  }
  > p {
    height: 16px;
    font-size: 10px;
    color: red;
  }
`
export const InputContainer2 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.3rem;
  flex-direction: column;
  width: 100%;
  height: 80px;
  background: var(--color_white);
  border-radius: 8px;

  > div {
    width: 95%;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    > label {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      margin-top: -10px;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: ${(props) => props.theme.grey1};
    }
    > input {
      width: 100%;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 0;
      display: flex;
      /* gap: 10px; */
      height: 3rem;
      min-height: 3rem;
      border: 1.5px solid ${(props) => props.theme.grey7};
      border-radius: 4px;
      color: ${(props) => props.theme.grey3};
      color: var(--color_1);
      padding: 5px;
    }
  }
  > p {
    height: 16px;
    font-size: 10px;
    /* color: red; */
  }
`
