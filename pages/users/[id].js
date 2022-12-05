import React from 'react';
import MainContainer from "../../components/MainContainer";

export default function ({user}){

    return (
        <MainContainer>
            <h1>USER PAGE</h1>
            <h2>USER ID - {user.id}</h2>
            <h3>name: {user.name}</h3>
        </MainContainer>
    );
};

export async function getServerSideProps({params}) {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    console.log(user)
    return {
        props: {user}, // will be passed to the page component as props
    }
}