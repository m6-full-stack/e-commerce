import styled from 'styled-components'

export const UserCommentCardFinal = styled.div`
  display: flex;
  width: 100%;
  background: ${(props) => props.theme.grey10};
  padding: 36px 28px;

  /* align-items: center; */

  /* comment */
  .content-title {
    gap: 24px;

    @media (min-width: 1024px) {
      padding: 0px 36px 0px 24px;
    }
  }
  .content-comments {
    border-radius: 4px;
    gap: 8px;
  }

  .content-comment {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
  }

  .content-avatar {
    flex-direction: row;
    gap: 13px;
    align-items: center;
    margin-top: 12px;
  }

  .border-initials {
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;

    border: 1px solid ${(props) => props.theme.brand1};
    border-radius: 150px;

    background: ${(props) => props.theme.random4};
  }

  .border-initials {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 0px;
    color: ${(props) => props.theme.whiteFixed};
  }

  .time-pass::before {
    content: '• ';
    color: ${(props) => props.theme.grey3};
    height: 4px;
    margin-right: 8px;
  }

  .button-edit{
    cursor: pointer;
  }

  .button-edit::before {
    content: '• ';
    color: ${(props) => props.theme.grey3};
    height: 4px;
    margin-right: 8px;
    margin-left: 8px;
  }

  /* post */
  .content-post {
    background: ${(props) => props.theme.grey10};
    border-radius: 4px;

    margin-top: 28px;
  }

  .content-form {
    padding: 36px 26px;
  }

  .container-buttons {
    gap: 24px;
    margin-top: 24px;
  }
  .content-buttons {
    flex-direction: row;
    gap: 8px;
  }
`
