import styled from "styled-components";
import {
  // LogoCrown,
  // IconCheck,
  // IconUnCheck,
  ContainerCardArticle,
  Spacing,
} from "../../../components";

const PenyerapanDanaCard = ({
  name,
  width,
  bgColor,
  percent,
  danaTersalur,
  totalDana,
  height,
}) => {
  const Wrapper = styled(ContainerCardArticle)`
    ${width && `width: ` + width + `;`}

    height: ${height ? height : `3.25rem`};
    font-family: var(--font-family-primary);
    font-size: var(--font-size-small-2);
    font-weight: var(--font-weight-normal);
    border: var(--color-disabled); 

    .card-title {
      color: black;
      border: 1px solid black;
      font-size: var(--font-size-small-2);
      border-radius: 5px;
      padding: 0.15rem 0.35rem;
      width: 37%;
    }

    .price {
      font-size: var(--font-size-normal-2);
      color: var(--color-black);
      font-weight: var(--font-weight-semibold);
    }

    .vl{
      border: 1px solid black;
    }

  `;

  // console.log(bgColor);

  return (
    <Wrapper
      border="var(--color-disable)"
      bgColor={bgColor}
      borderRadius="0.4rem"
      thickness={"0.05rem"}
      className={"col-start-start"}
    >
      <h1 className="card-title">{name}</h1>
      <Spacing height={'0.75rem'}/>
      <span className="price">
        {percent}%
      </span>
      <Spacing height={'0.55rem'}/>
      <div className="row-start-start w-full">
        <div className="col-start-start w-full" style={{ borderRight:"1px solid black" }}>
          <span>Total dana tersalurkan</span>
          <span className="price">Rp. {danaTersalur}</span>
        </div>
        <Spacing width={'3.25rem'}/>
        <div className="col-start-start w-full">
          <span>Total pendanaan</span>
          <span className="price">Rp. {totalDana}</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default PenyerapanDanaCard;
