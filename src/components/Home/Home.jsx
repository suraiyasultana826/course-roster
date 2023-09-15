/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./Home.css"
import Cart from '../Cart/Cart';

const Home = () => {
    const [allCourse, setAllCourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);


    useEffect(() => {
        fetch("./course.json")
        .then(res => res.json())
        .then((data => setAllCourse(data)))
    },[]);
    

    const handleSelectCourse = (course) => {
        setSelectedCourse([...selectedCourse, course]);

    };
    console.log(selectedCourse)
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
                            <button onClick={() => handleSelectCourse(course)} className='card-btn'>Select</button>

                    </div>
                        ))
                    }
                    </div>
                    <div className="cart">
                        <Cart selectedCourse = {selectedCourse}></Cart>
                    </div>
                    </div>
                    </div> 
        </div>
    );
};

export default Home;