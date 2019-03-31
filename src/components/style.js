import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;

    div {
        background: #ccc;
        width: 100%;
        height: 1px;
        margin-top: 10px;
    }
`

export const UserName = styled.h1`
    font-size: 18px;

`

export const Content = styled.p`

`

export const Like = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-width: 0px;
    background: transparent;
    width: 60px;
    cursor: pointer;
`