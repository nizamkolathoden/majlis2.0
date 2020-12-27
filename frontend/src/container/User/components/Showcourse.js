import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Showcourse = () => {
  const history = useHistory()
  const [teacher, setTeacher] = useState([]);
  const localstorage = localStorage.getItem('Token_majlis')
  const user = JSON.parse(localStorage.getItem('user_majlis'))

  //another function

  const Use = () => {
    useEffect(() => {
      fetch('/all/showteacher', {
        method: "put",
        headers: {
          'Content-Type': 'application/json',
          'authorization': localstorage.replace(/['"]+/g, '')
        },
        body: JSON.stringify({
          batch: user.batch,
          sem: user.sem
        })
      }).then(res => res.json()).then(responce => {
        console.log(responce);
        setTeacher(responce)
        // console.log(responce.sucess);

      });

    }, [])

  }


  //for history we check localStorage
  if (!localstorage) {
    history.push('/user/login')
  } else {

    Use()


  }


  console.log(teacher);

  // const user = JSON.parse(localStorage.getItem('user_majlis'))

  return (
    <div>
    <h1>Hello {localstorage?user.name:''} </h1>
      {/* Hello {user.name} */}
      {
       teacher && localstorage ? teacher.map(item => {
          return (
            <>
              <div className='card home-card'>
                <h1>{item.name} Sir</h1>
                {
                  item.course.map(single => {

                    return (
                      <>

                        <Link to={single.sem === user.sem && single.batch === user.batch ? "/teacher/" + single._id : ''}> <h4>{single.batch === user.batch && single.sem === user.sem ? single.name : ''}</h4>
                        </Link>
                      </>
                    )
                  })
                }
              </div>
            </>
          )
        }):''
      }
    </div>
  );
};

export default Showcourse;