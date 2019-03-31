import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;

    ul {
        margin-left: -40px;
        width: 90%;
        max-width: 800px;
        list-style-type: none;
        margin-top: 50px;
    }
`

export const Twittar = styled.button`
    background: rgb(0,172,238);
    border-width: 0px;
    margin-top: 40px;
    width: 10%;
    min-width: 150px;
    border-radius: 15px;
    cursor: pointer;

    p {
        color: white;
        font-weight: bold;
        font-size: 10px;
    }
`

export const NewTweet = styled.textarea`
    width: 60%;
    min-width: 300px;
    height: 70px;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
    border-radius: 1px;
    box-shadow: 0px 0px 7px 15px rgba(0,172,238,0.2);
    border-color: rgba(0,0,0,0);
`