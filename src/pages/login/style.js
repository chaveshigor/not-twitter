import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
`

export const Input = styled.input`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    border-color: #ccc;
    font-size: 16px;
    padding: 15px 0px 15px 0px;
`

export const Button = styled.button`
    margin: 15px 0px 0px;
    background: #00acee;
    border-width: 0px;
    border-radius: 5px;
    width: 70%;
    cursor: pointer;

    p {
        color: white;
        font-weight: bold;
    }
`