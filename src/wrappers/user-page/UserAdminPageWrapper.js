import styled from "styled-components";

const Wrapper = styled.main`
  padding: 2.5rem 5.5rem 2.5rem 5.5rem;
  background-color: var(--color-white);

  .title{
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-big);
    color: var(--color-black);
  }

  .title-description{
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-light);
    font-size: var(--font-size-semi-big);
    color: var(--color-black);
  }

  .card-container {
    border: 1px solid var(--color-disable);
    border-radius: 10px;
    background-color: var(--color-disable-light);
    padding: 0.9rem 0.6rem;
  }

  .title-description {
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-thin);
    font-size: var(--font-size-big);
    color: var(--color-black);
  }

  .description {
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-normal-2);
    font-size: var(--font-size-normal);
    color: var(--color-black);
  }

  .price-tag {
    font-family: var(--font-family-primary);
    font-size: var(--font-size-normal-2);
    font-weight: var(--font-weight-semibold);
    letter-spacing: 2px;
    color: var(--color-semiblack);
  }

  .subtitle {
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-normal);
    color: var(--color-black);
  }

  .description-subtitle{
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-normal);
    border-left: 1pxpx solid black;
    padding: 0.5rem;
    background-color: white;
    &:hover {
      color: var(--color-primary-dark);
      background-color: white;
      border-color: var(--color-primary-dark);
    },
  } 

  .card-title{
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-normal-2);
    color: var(--color-black);
  }

  .card-subtitle{
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-normal);   
    color: var(--color-black);     
  }

  .card-text-content{
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-normal);  
    color: var(--color-black);  
  }
    
  .page-number{
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-normal-2);   /* 24px */
    color: var(--color-black);
    letter-spacing: 1px;
  }

  .title-pengajuan-baru {
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-normal-2);
    letter-spacing: 2px;
    border-bottom: 2px solid orange;
  }

  .title-pra-kegiatan {
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-normal-2);
    letter-spacing: 2px;
    border-bottom: 2px solid var(--color-primary-light);
  }

  .title-kegiatan {
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-normal-2);
    letter-spacing: 2px;
    border-bottom: 2px solid var(--color-primary);
  }

  .title-pasca-kegiatan {
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-normal-2);
    letter-spacing: 2px;
    border-bottom: 2px solid var(--color-primary-dark);
  }

  .text-subtitle {
    paddingLeft: "1%";
    fontSize: "15px";
  }
`;

export default Wrapper;
