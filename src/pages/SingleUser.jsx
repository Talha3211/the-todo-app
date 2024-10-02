import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearUser, fetchUserById } from '../features/users/userSlice';

const SingleUser = () => {
//   const [dataa, setDataa] = useState(null);
//   const [loading, setLoading] = useState(true); 
// //   const { id } = useParams();
//   const { email, first_name, last_name, avatar } = dataa || {}; 

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true); 
//       try {
//         const response = await axios.get(`https://reqres.in/api/users/${id}`);
//         const data = await response.data; // Axios automatically parses the response data
//         console.log(data);
//         setDataa(data.data); // Set the user data
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false); 
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>; 
//   }

////////

const dispatch= useDispatch()
  const { id } = useParams();

  const {user,status,error}= useSelector((state)=>state.users)

  useEffect(()=>{
    dispatch(clearUser());


    
        dispatch(fetchUserById(id))
    
  },[dispatch,id])

    const { email, first_name, last_name, avatar } = user || {}
    if (status === 'loading') return <div>Loading...</div>;

    if (status === 'failed') return <div>An error occurred: {error}</div>;

  return (
    <div>
      <div
        key={id}
        className="max-w-xs flex flex-col gap-5px items-center space-x-4 rounded overflow-hidden shadow-lg border border-gray-200 bg-white p-4 hover:shadow-xl transition-shadow duration-200"
      >
        {avatar && (
          <img
            src={avatar}
            alt={`${first_name} ${last_name}`}
            className="w-24 h-24 rounded-full"
          />
        )}
        <div className="flex flex-col justify-center">
          <h4 className="text-xl font-semibold">
            {first_name} {last_name}
          </h4>
          <p className="text-gray-500">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
