import MainContainer from "../components/MainContainer";
import {useState,useEffect} from "react";
import Link from "next/link";

const Users = ({users}) => {
    // const [users,setUsers]=useState([
    //     {
    //         id:1,
    //         name:'Akas',
    //     },
    //     {
    //         id:2,
    //         name:'Aya',
    //     },
    //     {
    //         id:3,
    //         name:'Aiperi',
    //     },
    // ])
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(res=>res.json()).then(json=>setUsers(json))
    // },[])
    return (
        <MainContainer>
            <h2>Users</h2>
            <ul>
                {users?.map(el=>{
                   return <li key={el.id}><Link href={`/users/${el.id}`}>{el.name}</Link></li>
                })}
            </ul>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const users=await response.json()
    return {
        props: {users}, // will be passed to the page component as props
    }
}