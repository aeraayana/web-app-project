import styled from "styled-components";
import {
    LogoCrown,
    IconCheck,
    IconUnCheck,
    ContainerCardSection,
    Spacing
} from "../../../components";

const MembershipTable = () => {

    const Wrapper = styled(ContainerCardSection)`
        max-width: 80rem;

        th {
            font-family: var(--font-family-primary);
            font-weight: var(--font-weight-bold);
            font-size: var(--font-size-normal);
            color: var(--color-primary);
            min-width: 10rem;
            height: 3.625rem;
            min-height: 3.625rem;
            text-align: center;
        }

        td {
            font-family: var(--font-family-secondary);
            font-weight: var(--font-weight-semibold);
            font-size: var(--font-size-normal);
            color: var(--color-black);
            min-width: 10rem;
            height: 3.625rem;
            min-height: 3.625rem;
            text-align: center;
            vertical-align: top;
        }

        .decription-cell{
            text-align: left;
            padding-left: 1.25rem;
        }
    `;

    return (
        <Wrapper >
            <table cellSpacing="100px">
                <thead>
                    <tr>
                        <th></th>
                        <th>Free</th>
                        <th> <LogoCrown primary/> Premium 1</th>
                        <th> <LogoCrown primary/> Premium 2</th>
                        <th> <LogoCrown primary/> Premium 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="decription-cell"> Unlimited search</td>
                        <td> <IconCheck/> </td>
                        <td> <IconCheck/> </td>
                        <td> <IconCheck/> </td>
                        <td> <IconCheck/> </td>
                    </tr>
                    <tr>
                        <td className="decription-cell"> Can see everyone who visited your profile</td>
                        <td> <IconUnCheck/> </td>
                        <td> <IconUnCheck/> </td>
                        <td> <IconCheck/> </td>
                        <td> <IconCheck/> </td>
                    </tr>
                    <tr>
                        <td className="decription-cell">Can gain a verified badge</td>
                        <td> <IconUnCheck/> </td>
                        <td> <IconCheck/> </td>
                        <td> <IconCheck/> </td>
                        <td> <IconCheck/> </td>
                    </tr>
                    <tr>
                        <td className="decription-cell">Can gain a verified badge</td>
                        <td> <IconUnCheck/> </td>
                        <td> <IconCheck/> </td>
                        <td> <IconUnCheck/> </td>
                        <td> <IconCheck/> </td>
                    </tr>
                    <tr>
                        <td className="decription-cell">Can gain a verified badge</td>
                        <td> <IconCheck/> </td>
                        <td> <IconUnCheck/> </td>
                        <td> <IconCheck/> </td>
                        <td> <IconCheck/> </td>
                    </tr>
                    <tr>
                        <td className="decription-cell">Example of how longer lines that may take up to two lines or more may look. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero lectus, tempus vel eleifend non, pretium ac sem.</td>
                        <td> <IconUnCheck/> </td>
                        <td> <IconUnCheck/> </td>
                        <td> <IconUnCheck/> </td>
                        <td> <IconCheck/> </td>
                    </tr>                    
                </tbody>
            </table>
        </Wrapper>
    )
}

export default MembershipTable
