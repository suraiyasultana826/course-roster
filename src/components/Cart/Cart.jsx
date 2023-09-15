/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'


const Cart = ({selectedCourse, remaining, totalCredit}) => {
    console.log(selectedCourse)
    return (
        <div className='course-list'>
            <h4>Credit Hour Remaining {remaining}</h4>
            <hr />
            <h3>Course Name</h3>
          {
            selectedCourse?.map((course) => (
                <li key={course.course_name}>{course.course_name}</li>
            ))
          }
          <hr />
          <h4>Total Credit Hour : {totalCredit}</h4>

        </div>
    );
};

export default Cart;