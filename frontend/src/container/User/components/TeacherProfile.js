import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Teacherprofile = () => {
    const user = JSON.parse(localStorage.getItem('user_majlis'));
    const { id } = useParams()
    const [singleTeacher, setSingleTeacher] = useState([]);
    const [rating, setRating] = useState('');
    const [userId,setUserId] = useState('')
    let reviews =''
    let [rateUser, setRateUser] = useState([])
console.log('userCj',user._id);

    useEffect(() => {
        setUserId(user._id)
        fetch(`/all/teacherprofile/${id}`, {
            headers: {
                "authorization": localStorage.getItem('Token_majlis').replace(/['"]+/g, '')
            }
        }).then(res => res.json()).then(data => {
            console.log(data);
            setSingleTeacher(data);

            

        })

            
    }, [])


    //get all reviews
    singleTeacher.course ? singleTeacher.course.map(item => {
        if (user.batch === item.batch && user.sem === item.sem) {

            reviews = item.reviews;

        }


    }) : console.log('he');
    console.log('reviews', reviews);

    //get a single review

    reviews ? reviews.map(item => {

        rateUser.push(item.reivewedBy);


    }) : console.log('he');
    console.log('user', rateUser);

    const rate = () => {
        fetch(`/all/rating/${id}`, {
            method: 'Put',
            headers: {
                "authorization": localStorage.getItem('Token_majlis').replace(/['"]+/g, ''),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                rat: rating
            })

        }).then(res => res.json()).then(data => console.log(data))
    }


const edit = ()=>{
   
    fetch('/all/delete/rate',{
        method:'Put',
        headers:{
            'Content-Type':'application/json',
            "authorization":localStorage.getItem('Token_majlis').replace(/['"]+/g, '')
        },
        body:JSON.stringify({
            id,
            pullid:userId
        })
    }).then(res=>res.json()).then(data=>console.log(data))
}





    //for checking
    console.log(reviews);
    return (
        <div>
            <h1>Rate Your Teacher </h1>
           
            {
                singleTeacher.course ? singleTeacher.course.map(item => {

                    // item.reviews.reivewedBy ? item.reviews.reivewedBy.includes(user._id) ? console.log(user) :console.log('suck'):console.log('intial');
                    return (
                        <>

                            <div className='card home-card'>
                                <h3>{user.batch === item.batch && user.sem === item.sem ? item.name : ""}</h3>

                            </div>

                        </>
                    )
                }) : "Loading"
            }

            <input type="Number" value={rating} onChange={e => setRating(e.target.value)} />
            {rateUser.includes(user._id) ?

                <button onClick={edit}>delete</button> :

                <button onClick={rate}>Submit</button>
            }
        </div>
    );
};

export default Teacherprofile;