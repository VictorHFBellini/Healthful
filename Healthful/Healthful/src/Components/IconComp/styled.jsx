import styled from "styled-components";

const IconFacebook = styled.div `
    height: 3.5rem;
    width: 3.5rem;
    background: linear-gradient(to right, #0546A0 0%, #663FB6 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    color: white;
    cursor: pointer;
    svg {
        width: 1.5rem;
        height: 1.5rem;
    }
`;

const IconInstagram = styled.div `
    height: 3.5rem;
    width: 3.5rem;
    background: linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    color: white;
    cursor: pointer;
    svg {
        width: 1.5rem;
        height: 1.5rem;
    }
`;

export const IconUser = styled.div`
    height: 7rem;
    width: 7rem;
    background: linear-gradient(0deg, rgba(15,123,5,1) 0%, rgba(25,241,0,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5rem;
    color: white;
    cursor: pointer;
    svg {
        width: 6rem;
        height: auto;
    }

`

const IconTwitter = styled.div `
    height: 3.5rem;
    width: 3.5rem;
    background: linear-gradient(to right, #56C1E1 0%, #35A9CE 50%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    color: white;
    cursor: pointer;
    svg {
        width: 1.5rem;
        height: 1.5rem;
    }
`;

export {IconFacebook, IconInstagram, IconTwitter}