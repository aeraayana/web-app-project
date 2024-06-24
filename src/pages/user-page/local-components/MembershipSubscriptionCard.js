import styled from "styled-components";
import {
    LogoCrown,
    IconCheck,
    IconUnCheck,
    ContainerCardArticle,
    Spacing,
    ButtonSolid
} from "../../../components";

const MembershipSubscriptionCard = ({name, amount, isBestValue, payValue, onClick}) => {

    const Wrapper = styled(ContainerCardArticle)`
        width: 405px;

        font-family: var(--font-family-secondary);
        font-size: var(--font-size-small-2);
        font-weight: var(--font-weight-semibold);
        color: #0000007F;

        h1, p, span {
            padding: 0;
            margin: 0;
        }

        .membership-tag {
            font-family: var(--font-family-secondary);
            font-size: var(--font-size-normal);
            font-weight: var(--font-weight-semibold);
            color: black;
        }

        .price-tag {
            font-family: var(--font-family-primary);
            font-size: var(--font-size-semi-big);
            font-weight: var(--font-weight-semibold);
            color: black;
        }

        .price-tag > span {
            font-size: var(--font-size-small-2);
        }

        span {
            font-weight: var(--font-weight-semibold);
        }

        b {
            font-weight: var(--font-weight-semibold);
            color: black;
        }

        .ribbon {
            /* clip ribbon end shape */
            background-color: #E9EEF4;
            clip-path: polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%, 5% 50%);
            width: 20.8125rem;    //333px
            height: 2rem;   // 32px
        }

        .ribbon > h1 {
            font-family: var(--font-family-primary);
            font-size: var(--font-size-normal);
            font-weight: var(--font-weight-semibold);
            color: var(--color-primary);
        }
    `;

    return (
        <Wrapper className={"col-start-start"} >
            { isBestValue && 
                <div className="w-full row-center-center">
                    <div className="ribbon row-center-center"> 
                        <h1>Best Value</h1> 
                    </div>                 
                </div>
            }
            { isBestValue && <Spacing height="0.5rem" /> }   {/* 8px */}
            <h1 className="membership-tag">{name}</h1>
            <Spacing height="0.25rem" />   {/* 4px */}
            <div className="row-start-end price-tag">
                <h1>{amount} USD*</h1>
                <span style={{ paddingBottom: "0.3125rem"  }}>/month</span> {/* 5px */}
            </div>
            <Spacing height="0.25rem" />   {/* 4px */}
            <p> <b>{payValue} USD*</b> every <b> 12 </b> month</p>
            <p> *Local taxes may apply </p>
            <Spacing height="1rem" />   {/* 16px */}
            <ButtonSolid width={"100%"} label="Subscribe Now" onClick={onclick} color={"white"} />
        </Wrapper>
    )
}

export default MembershipSubscriptionCard
