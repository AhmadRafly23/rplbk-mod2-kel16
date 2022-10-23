import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  #inputValue {
    border: 1px solid purple;
    padding: 6px 10px;
    border-radius: 8px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .error {
    color: red;
    text-align: center;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 16px;
    border: 1px solid purple;
    padding: 16px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
