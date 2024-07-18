import styled from "styled-components";

const Wrapper = styled.main`
  padding: 2.5rem 5.5rem 2.5rem 5.5rem;
  background-color: var(--color-white);

  .title {
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-big);
    color: var(--color-black);
  }

  .title-description {
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-thin);
    font-size: var(--font-size-big);
    color: var(--color-black);
  }

  .description {
    font-family: var(--font-family-secondary);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-normal);
    color: var(--color-black);
  }

  .price-tag {
    font-family: var(--font-family-primary);
    font-size: var(--font-size-normal);
    font-weight: var(--font-weight-semibold);
    color: black;
  }

  .subtitle {
    font-family: var(--font-family-secondary);
    font-weight: var(--font-weight-normal);
    font-size: 1.5rem; /* 24px */
    color: var(--color-black);
  }

  .description-subtitle {
    font-family: var(--font-family-secondary);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-normal);
    color: #4d4d4d;
  }

  h3 {
    color: rgba(0, 0, 0, 0.7);
  }

  .title-pengajuan-baru {
    border-bottom: 2px solid orange;
  }

  .title-pra-kegiatan {
    border-bottom: 2px solid var(--color-primary-light);
  }

  .title-kegiatan {
    border-bottom: 2px solid var(--color-primary);
  }

  .title-pasca-kegiatan {
    border-bottom: 2px solid var(--color-primary-dark);
  }

  .card-container {
    color: Tipe;
    borderColor: Tipe;
    border: "solid 2px";
    width: "60%";
    height: "20%";
    borderRadius: "0.625rem";
  }

  .text-title {
    paddingLeft: "1%";
    fontSize: "15px";
  }

  .text-subtitle {
    paddingLeft: "1%";
    fontSize: "15px";
  }
`;

export default Wrapper;
