import { CModal } from '@coreui/react';
import styled from 'styled-components';

const Wrapper = styled(CModal)`
    padding: 2.5rem 5.5rem 2.5rem 5.5rem;
    text-wrap: balance;
    word-wrap: break-word;
    
    .connector{
        width: 2px;
        height: 3.25rem;
        border-radius: 6px;
        background-color: var(--color-black);
    }

    .title-thin{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-big);
        color: var(--color-primary);
    }

    .label{
        color: var(--color-black);
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

    .hyperlink{
        color: var(--color-primary);
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-bold);
        text-decoration: underline;
        font-size: var(--font-size-normal);
    }

    .outer-row > td{
        color: #FFFFFF;
        font-family: var(--font-family-primary);
        background-color: #979CA5;
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        &:first-child{
            text-align: center;
        }
    }

    table{
        border: 1px solid var(--color-disable);
        border-radius: 16px 16px 0px 0px;
        border-collapse: separate;
        border-radius: 4px;
        border-spacing: 0px;
    }

    .inner-row > td{
        color: var(--color-black);
        font-family: var(--font-family-primary);
        border-bottom: 1px solid var(--color-disable);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        &:first-child{
            text-align: right;
        }
    }
    
    .table-head > th{
        color: var(--color-black);
        font-family: var(--font-family-primary);
        border-bottom: 1px solid var(--color-disable);
        background-color: var(--color-disable-light);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        &:first-child{
            text-align: center;
        }
    }

    .sublabel{
        color: var(--color-black);
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
    }

    .description-label{
        color: var(--color-semiblack);
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-small-2);
    }

    .title{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-big);
        color: var(--color-primary);
    }

    .title-description{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-semibold);
        font-size: var(--font-size-normal-2);
        color: var(--color-semiblack);
        letter-spacing: 2px;
    }

    .subtitle-description{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-semibold);
        font-size: var(--font-size-normal);
        color: var(--color-semiblack);
        letter-spacing: 2px;
    }

    .description{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        color: var(--color-semiblack);
        text-wrap: balance;
    }

    .subtitle{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-semibold);
        font-size: var(--font-size-normal-2);   /* 24px */
        color: var(--color-black);
    }

    .page-number{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);   /* 24px */
        color: var(--color-semiblack);
        letter-spacing: 2px;
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

    .time-range {
        display: inline-flex;
        align-items: center;
        border: 1px solid var(--color-black);
        padding: 0.7rem;
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
        border: none;
        outline: none;
    }
    .time-range span {
        padding: 0 5px;
    }

    .break {
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
    }

    .price-tag{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        color: var(--color-black);
        border-radius: 25px;
        border: 1px solid var(--color-black);
        padding: 5px;
        height: 200px; 
        &:hover {
            color: var(--color-primary-dark);
            background-color: transparent;
            border-color: var(--color-primary-dark);
        },
    }

    .modal-body {
        padding: 2rem 3.55rem;
    }

    input[type="checkbox"] {
        font: inherit;
        width: 1.25em;
        height: 1.25em;
        border: 0.1rem solid var(--color-disable);
        border-radius: 0.15em;
    }
    
    input::file-selector-button {
        font-weight: var(--font-weight-semibold);
        font-family: var(--font-family-primary);
        color: var(--color-primary-dark);
        border: 1px solid var(--color-primary-dark);
        background-color: transparent;
        border-radius: 3px;
    }

    input[type="checkbox"]:checked {
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

export default Wrapper