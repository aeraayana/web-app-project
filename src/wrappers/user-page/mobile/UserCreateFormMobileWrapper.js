import styled from "styled-components"
import { CModal } from "@coreui/react"

const MobileWrapper = styled(CModal)`
    padding: 0rem;

    .label{
        color: var(--color-black)
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-normal);
        padding-bottom: 0.5rem;
    }

    .label-error{
        color: var(--color-error);
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-small-2);
        font-size: var(--font-size-normal);
    }

    .description-label{
        color: var(--color-disable);
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-small-2);
    }

    .title{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-big);
        color: var(--color-semiblack);
    }

    .title-description{
        font-family: var(--font-family-primary);
        letter-spacing: 2px;
        font-weight: var(--font-weight-semibold);
        font-size: var(--font-size-normal-2);
        color: var(--color-semiblack);
    }

    .description{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        color: var(--color-semiblack);
        white-space: pre-wrap;
        white-space: -moz-pre-wrap;
        white-space: -pre-wrap;
        white-space: -o-pre-wrap;
        word-wrap: break-word;
    }

    .page-number{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);   /* 24px */
        color: var(--color-semiblack);
        letter-spacing: 2px;
    }

    .subtitle{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-semibold);
        font-size: var(--font-size-normal-2);   /* 24px */
        color: #667085;
        white-space: pre-wrap;
        white-space: -moz-pre-wrap;
        white-space: -pre-wrap;
        white-space: -o-pre-wrap;
        word-wrap: break-word;
        &:focus{
            outline: none !important;
            border:1px solid var(--color-primary-dark);
            box-shadow: 0 0 10px var(--color-primary);
        }
    }

    .description-subtitle{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        color: #4D4D4D;
        border-radius: 25px;
        border: 1px solid var(--color-black);
        padding: 20px;
        width: 85%;
        height: 100%; 
        &:hover {
            color: var(--color-primary-dark);
            background-color: transparent;
            border-color: var(--color-primary-dark);
        },
    }

    .description-checkbox{
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        color: #4D4D4D;
        border-radius: 25px;
        border: 1px solid var(--color-disable);
        padding: 20px;
        width: 100%;
        height: 100%; 
        &:hover {
            color: var(--color-primary-dark);
            background-color: transparent;
            border-color: var(--color-primary-dark);
        },
    }

    .break {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
    }

    .price-tag{
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        color: #4D4D4D;
        border-radius: 25px;
        border: 1px solid var(--color-disable);
        padding: 20px;
        margin: 0.25rem;
        height: 200px; 
        &:hover {
            color: var(--color-primary-dark);
            background-color: transparent;
            border-color: var(--color-primary-dark);
        },
    }

    .time-range {
        display: inline-flex;
        align-items: center;
        border: 1px solid var(--color-black);
        padding: 1rem;
        font-family: var(--font-family-primary);
        font-size: var(--font-size-normal);
        font-weight: var(--font-weight-normal);
        border-radius: 0.3125rem;
        background-color: var(--color-white);
        &:focus{
            outline: none !important;
            border:1px solid var(--color-primary-dark);
            box-shadow: 0 0 10px var(--color-primary);
        }
    }

    .time-range input[type="time"] {
        width: 50%;
        border: none;
        outline: none;
        background-color: transparent;
    }
    .time-range span {
        padding: 0 5px;
    }

    input[type="checkbox"] {
        font: inherit;
        width: 1.75em;
        height: 1.75em;
        border: 0.1rem solid var(--color-disable);
        border-radius: 0.15em;
        transform: translateY(-0.075em);
        display: grid;
        place-content: center;
    }

    input::file-selector-button {
        font-weight: var(--font-weight-semibold);
        font-family: var(--font-family-primary);
        color: var(--color-primary-dark);
        border: 1px solid var(--color-primary-dark);
        background-color: transparent;
        border-radius: 3px;
        content: "test";
    }

    input[type="checkbox"]:checked {
        transform: scale(1);
        border: 0.1rem solid var(--color-disable);
        border-radius: 0.15em;
        background-color: var(--color-primary);
    }

    .toast-message{
        width: 90vh;
        height: 22vh;
        margin-left: 40vh;
        margin-top: 40px;
        padding: 20px 20px;
    }
`

export default MobileWrapper;