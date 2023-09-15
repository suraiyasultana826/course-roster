/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./Home.css"

const Home = () => {
    const [allCourse, setAllCourse] = useState([]);


    useEffect(() => {
        fetch("./course.json")
        .then(res => res.json())
        .then((data => setAllCourse(data)))
    },[]);
    

    return (
        <div>
            <h1>Course Registration</h1>
            <div className="container">
                <div className="home-container">
                    <div className="card-container">
                    {
                        allCourse.map((course) => (
                            <div key={course.image_url} className="card">
                        <div className="card-img">
                            <img className='photo' src={course.image_url} alt="" />
                        </div>
                        <h2>{course.course_name}</h2>
                        <p><small>{course.course_details}
                            </small></p>
                            <div className="info">
                                <p>Price: {course.price}</p>
                                <p>Credit: {course.credit_hours} hr</p>
                            </div>
                            <button className='card-btn'>Select</button>

                    </div>
                        ))
                    }
                    </div>
                    <div className="cart">
                        <h1>Course Name</h1>
                    </div>
                    </div>
                    </div> 
        </div>
    );
};

export default Home;