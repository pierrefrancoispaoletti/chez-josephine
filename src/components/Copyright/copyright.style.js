import styled from "styled-components";
import { colors } from "../../_const";

export const CopyrightStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .footer__copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 10px;
    font-family: "crayonHand", sans-serif !important;
    font-size: 1.3em;
    color: ${colors.secondary}!important;
  }

  .footer__alvp {
    border-radius: 8px;
    padding: 2px 5px;
    font-family: "crayonHand", sans-serif !important;
    color: ${colors.secondary}!important;
  }

  h3 {
    font-family: "crayonHand", cursive !important;
    text-align: center !important;
    letter-spacing: 0.2em;
    font-size: 1.8em !important;
    color: ${colors.secondary} !important;
  }

  .alvp__icon {
    animation: heartPulse 2s infinite linear;
  }

  .link {
    color: ${colors.secondary};
  }

  @keyframes heartPulse {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.3);
    }

    100% {
      transform: scale(1);
    }
  }
`;
