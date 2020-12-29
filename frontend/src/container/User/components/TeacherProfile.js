import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Teacherprofile = () => {
    const user = JSON.parse(localStorage.getItem('user_majlis'));
    const { id } = useParams()
    const [singleTeacher, setSingleTeacher] = useState([]);
    const [rating, setRating] = useState('');
    const [userId, setUserId] = useState('')
    let reviews = ''
    let [rateUser, setRateUser] = useState([])
    let [allRating, setAllRating] = useState([])
    let Total = 0;
    let prev = 0;
    let show = 0;
    let j = 0;
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

    allRating ? allRating.map((item,i) => {
        Total = prev + item;
        prev = item;
        console.log('total',Total);
        console.log('index',i);
    }):console.log('fuck');



//2nd
//get a single review
const singleRate = () => {

        reviews ? reviews.map(item => {

            rateUser.push(item.reivewedBy);
            allRating.push(item.rating)

        }) : console.log('he');
        console.log('user', rateUser);
        console.log('allrates', allRating);

    }



    //1st
    //get all reviews
    const allRates = () => {
        singleTeacher.course ? singleTeacher.course.map(item => {
            if (user.batch === item.batch && user.sem === item.sem) {

                reviews = item.reviews;

            }


        }) : console.log('he');
        console.log('reviews', reviews);
        singleRate();
    }

    allRates()


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

        }).then(res => res.json()).then(data => {
            console.log(data)
            setSingleTeacher(data)
            allRates()
        });
    }


    const edit = () => {

        fetch('/all/delete/rate', {
            method: 'Put',
            headers: {
                'Content-Type': 'application/json',
                "authorization": localStorage.getItem('Token_majlis').replace(/['"]+/g, '')
            },
            body: JSON.stringify({
                id,
                pullid: userId
            })
        }).then(res => res.json()).then(data => console.log(data))
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
               <h4>Rating {show = Total/reviews.length}</h4> 

            {rateUser.includes(user._id) ?

                '' :

                <input type="Number" value={rating} onChange={e => setRating(e.target.value)} />
            }


            {rateUser.includes(user._id) ?

                <button onClick={edit}>Edit Rate</button> :

                <button onClick={rate}>Submit</button>
            }
            
        </div>
    );
};

export default Teacherprofile;