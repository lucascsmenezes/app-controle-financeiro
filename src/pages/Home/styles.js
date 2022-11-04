import styled from "styled-components";


export const Body = styled.body`
    background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
`;

export const h1 = styled.h1`
    color: white;
    font-family: "Poppins", sans-serif;

`;

export const ContainerTop = styled.div`
    height: 5.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;

    @media (max-width: 750px){
        display: grid;
    }
`;

export const NavBar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: 1.5rem;
    padding-right: 3.5rem;
`;

export const ul = styled.ul`
`;

export const li = styled.li`
    display: inline-block;
    padding: 1.2rem;
`;

export const a = styled.a`
    font-family: "Poppins", sans-serif;
    text-decoration: none;
    color: black;
    &:hover{
        color: white;
        transition: .2s ease-in-out;
        text-decoration: underline;
    }
`;

export const img = styled.img`
    background-image: url("https://img.freepik.com/free-vector/flash-logo-energy-power-colorful-thunderbolt-voltage-electric-logotype_126523-2796.jpg?w=740&t=st=1667407133~exp=1667407733~hmac=a4223ec31531e208d68253beb361e0717fa78865cfe664d49bfa3f9b9b38d109");
    width: 110px;
    height: 80px;
`;

export const CardUm = styled.img`
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3iVbZH1u1c3Pwv_zM4-jNc2xhgRW0Lk3llw&usqp=CAU");
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
`;

export const ContentCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

export const Footer = styled.footer`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15rem;
    background-color: black;


    nav{
        padding-left: 0;

    }

    a{
        color:white;
    }

    h1{
        font-size: 1rem;
    }


`;

export const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-around;
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 400px;
    background-color: white;
    border-radius: 10px; 
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

    h1{
        text-align: center;
        color: black;
    }
`;