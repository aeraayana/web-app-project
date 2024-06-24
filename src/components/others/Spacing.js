import styled from "styled-components";

const Spacing = ({ width, height, minWidth, minHeight, maxWidth, maxHeight }) => {

    const Wrapper = styled.div`
        ${ width &&
            `width: ` + width + `;` 
        }
        ${ minWidth &&
            `min-width: ` + minWidth + `;` 
        }
        ${ maxWidth &&
            `max-width: ` + maxWidth + `;` 
        }
        ${ height &&
            `height: ` + height + `;` 
        }
        ${ minHeight &&
            `min-height: ` + minHeight + `;` 
        }
        ${ maxHeight &&
            `max-height: ` + maxHeight + `;` 
        }
    `;

    return (
        <Wrapper />
    )
}

export default Spacing
