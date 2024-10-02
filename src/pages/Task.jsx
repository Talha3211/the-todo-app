"use client"

import { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage, fetchUsers } from "../features/users/userSlice";

function ReviewsPage() {

    
    
    // const [dataa,setDataa]= useState([])
    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await axios.get('https://reqres.in/api/users/');
    //         const data = await response.data; // Axios automatically parses the response data
    //         console.log(data.data)
    //         setDataa(data.data);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     };
    
    //     fetchData();
    //   }, []);

    const dispatch = useDispatch()
    const {users,status,error}= useSelector((state)=>state.users)

    
    useEffect(() => {
        dispatch(clearMessage()); // Clear any previous errors or messages
      }, [dispatch]);
    

    useEffect(()=>{
        if(status==='idle'){
            dispatch(fetchUsers())
        }
    },[status,dispatch])

    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'failed') return <div>An error occurred: {error}</div>;


    return (
        <div className="flex flex-row gap-5px py-20px">
          {users.map((person)=>{
            const {id,email,first_name,last_name,avatar}=person
              return ( 
                <Link to={`/singleuser/${id}`} key={id}>
                <div
                key={id}
                className="max-w-xs flex flex-col gap-5px items-center space-x-4 rounded overflow-hidden shadow-lg border border-gray-200 bg-white p-4 hover:shadow-xl transition-shadow duration-200"
              >
                <img
                  src={avatar}
                  alt={`${first_name} ${last_name}`}
                  className="w-24 h-24 rounded-full"
                />
                <div className="flex flex-col justify-center">
                  <h4 className="text-xl font-semibold">{first_name} {last_name}</h4>
                  <p className="text-gray-500">{email}</p>
                </div>
              </div>
              </Link>
              
              )
          })}
          
         </div>
          )

  }
  export default ReviewsPage;