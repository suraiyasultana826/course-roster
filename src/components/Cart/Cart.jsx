/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';


const Cart = ({selectedCourse}) => {
    console.log(selectedCourse)
    return (
        <div>
            <h3>Course Name</h3>
          {
            selectedCourse?.map((course) => (
                <li>{course.course_name}</li>
            ))
          }

        </div>
    );
};

export default Cart;