import styled from 'styled-components'
import { Breakpoints } from '../../app/styles'

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding-bottom: 1em;

    @media screen and ${Breakpoints.mobile} {
        padding-bottom: 2.2em;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    @media screen and ${Breakpoints.mobile} {
        height: 9em;
    }

    > div {
        height: 2.667em;
        margin: 0.25em 0;

        > div {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

export const Button = styled.a`
    color: ${(props) => props.color};
    border: 1px solid ${(props) => props.color};

    box-shadow: rgb(50 50 50 / 10%) 0 1px 2px 1px;
    transition: all 0.2s cubic-bezier(0.42, 0, 0.58, 1) 0s;
    padding: calc(.5em + 1px) 1em;
    border-radius: 4px;

    &:hover {
        transform: translateY(-2px);
        color: ${(props) => props.hover};
        background: ${(props) => props.color};
    }
`