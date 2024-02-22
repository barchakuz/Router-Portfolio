import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    //const [data, setData] = useState({}); // Set initial state to an empty object
    // useEffect(() => {
    //     fetch('https://api.github.com/users/barchakuz')
    //         .then(response => {

    //             return response.json();
    //         })
    //         .then(userData => {
    //             setData(userData);
                
    //         })
    // }, []);
    const data = useLoaderData();
  return (
    <div className=' text-center m-4 bg-slate-400'>
        <img src={data.avatar_url} alt="profile" width={150} className=' mx-52'/>
        <h1>Name : {data.login}</h1>
        <h2>Followers : {data.followers}</h2>
        <h2>Bio : {data.bio}</h2>
      
    </div>
  )
}

export default Github
export const responceData = async () =>{
    const response = await fetch('https://api.github.com/users/barchakuz');
    return response.json();
}