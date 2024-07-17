import styled from "styled-components";
import {
  // LogoCrown,
  // IconCheck,
  // IconUnCheck,
  ContainerCardArticle,
  Spacing,
} from "../../../components";
import AmbatukamContainerCard from "./AmbatukamContainerCard";

const MembershipSubscriptionCard = ({
  name,
  isBestValue,
  isEmpty,
  onClick,
  width,
  height,
}) => {
  const Wrapper = styled(ContainerCardArticle)`
    ${width && `width: ` + width + `;`}

    height: ${height ? height : `3.25rem`}; //52px

    font-family: var(--font-family-primary);
    font-size: var(--font-size-small-2);
    font-weight: var(--font-weight-normal);
    border: var(--color-disabled) h1, p, span {
      padding: 0;
      margin: 0;
    }

    .membership-tag {
      font-family: var(--font-family-primary);
      font-size: var(--font-size-normal-2);
      font-weight: var(--font-weight-bold);
      color: grey;
    }

    .price-tag {
      font-family: var(--font-family-primary);
      font-size: var(--font-size-semi-big);
      font-weight: var(--font-weight-normal);
      color: grey;
    }

    .price-tag > span {
      font-family: var(--font-family-primary);
      font-size: var(--font-size-semi-big);
    }

    span {
      font-weight: var(--font-weight-normal);
    }

    b {
      font-weight: var(--font-weight-semibold);
      color: black;
    }
  `;

  return (
    <Wrapper
      border="var(--color-disable)"
      bgColor={"var(--color-disable-light)"}
      borderRadius="0.4rem"
      thickness={"0.05rem"}
      className={"col-start-start"}
    >
      <h1 className="membership-tag">{name}</h1>
      {isBestValue && <AmbatukamContainerCard Judul={"Pengajuan Masuk"} Bulan={"7"} Persen={20} SDHI={100} Tipe={"var(--color-primary)"}/>}
      {isBestValue && <Spacing height="0.5rem" />} {/* 8px */}
      <Spacing height="2.7rem" /> {/* 4px */}
      <div className="row-center-center price-tag w-full">
        {isEmpty && <span>Tidak ada {name.toLowerCase()}</span>}
      </div>
      <Spacing height="0.25rem" /> {/* 4px */}
      <Spacing height="1rem" /> {/* 16px */}
    </Wrapper>
  );
};

export default MembershipSubscriptionCard;
