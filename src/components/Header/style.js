import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 88%;
    height: 47px;


    display: flex;
    justify-content: space-between;
    aling-items: center;
    margin: 0 auto;
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.div`
    background: #8F8F96;
    width: 100%;
    height: 47px;
    border-radius: 10px;
    display:flex;
    justify-content: centet;
    aling-items: center;
`
export const BuscarInputConteiner = styled.div`
    width: 175px;
    height: 30px;
    background: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;

    display:flex;
    aling-items: center;
    justify-content: center;
`

export const Menu = styled.h1`
    font-family: 'Open Sans',
    font-style: normal;
    font-size: 16px;
    line-height:25px;
    color: #FFF;
    margin-right: 12px;
    text-decoration:none;
`

export const MenuRight = styled.a`
    font-family: 'Open Sans',
    font-style: normal;
    font-size: 12px;
    line-height:25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration:none;
`
export const UserPicture = styled.img`
    width:32px;
    height:32px;
    border-radius:22px;
    border: 2px solid #FFFFFF;
`

export const Input = styled.input`
    background: transparent;
    flex:1;
    border: 0;
    color:#FFFFFF;
`