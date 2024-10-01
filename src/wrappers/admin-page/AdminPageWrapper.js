import { CModal } from '@coreui/react';
import styled from 'styled-components';

const Wrapper = styled(CModal)`
    text-wrap: balance;
    word-wrap: break-word;
    font-family: var(--font-family-primary);
    
    .title-thin{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-big);
        color: var(--color-primary);
    }

    .title{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-big);
        color: var(--color-primary-dark);
    }

    .title-description{
        font-family: var(--font-family-primary);
        font-weight: var(--font-weight-normal);
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

    .label {
        font-size: var(--font-size-normal);
        font-weight: 600;
    }

    .description {
        font-size: var(--font-size-normal);
        font-weight: var(--font-weight-bold);
    }

    .description-alt {
        font-size: var(--font-size-normal);
        font-weight: var(--font-weight-bold);
        color: var(--color-semiblack);
    }

    .description-label {
        font-size: var(--font-size-small-2);
        font-weight: var(--font-weight-bold);
    }

    .subtitle {
        font-size: var(--font-size-small-2);
        font-weight: var(--font-weight-normal);
    }

    .subtitle-alt {
        font-size: var(--font-size-small-2);
        font-weight: var(--font-weight-normal);
        color: var(--color-semiblack);
    }

    .sublabel {
        font-size: var(--font-size-small);
        font-weight: var(--font-weight-normal);
    }

`

export default Wrapper