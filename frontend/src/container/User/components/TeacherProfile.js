import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
const token = localStorage.getItem('Token_majlis');
const user = JSON.parse(localStorage.getItem('user_majlis'));
const Teacherprofile = () => {
    const {id} = useParams()
    const [singleTeacher,setSingleTeacher] = useState([]);
    const [rating,setRating] = useState('')
   
        useEffect(()=>{
            
                fetch(`/all/teacherprofile/${id}`,{
                    headers:{
                       "authorization":token.replace(/['"]+/g, '')
                    }
                }).then(res=>res.json()).then(data=>{
                    console.log(data);
                    setSingleTeacher(data);
                })
                console.log(typeof(singleTeacher));
        },[])
            
        const rate = ()=>{
            fetch(`/all/rating/${id}`,{
                method:'Put',
                headers:{
                    "authorization":token.replace(/['"]+/g, ''),
                    "Content-Type":"application/json"
                }
            }).then(res=>res.json()).then(data=>console.log(data))
        }

    return (
        <div>
           <h1>Rate {singleTeacher.name} Teacher</h1> 
                    <h2>Subjects</h2>
                {
               singleTeacher.course ? singleTeacher.course.map(item=>{
                   
                    // item.reviews.reivewedBy ? item.reviews.reivewedBy.includes(user._id) ? console.log(user) :console.log('suck'):console.log('intial');
                return (
                        <>
                         <div className='card home-card'>
                             <h3>{user.batch === item.batch && user.sem === item.sem ?item.name:"" }</h3>
                               
                         </div>
                        
                        </>
                    )
                }):"Loading"
                }
                 <input type ="Number" value={rating} onChange={e=>setRating(e.target.value)}/>
                 <button onClick = {rate}>Submit</button>
        </div>
    );
};

export default Teacherprofile;