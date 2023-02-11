import { Card } from 'flowbite-react'
import React, { FC } from 'react'
import { CourseType } from '../../types/courses'
import Rating from '../Ratings'

const DetailsHeader: FC<{ course: CourseType }> = ({ course }) => {
    return (
        <div className='mb-2 bg-white py-8 px-6 font-regular'>
            <div>
                <h1 className='text-[25px] font-bold'>{course?.descriptor?.name}</h1>
                <h3 className='text-[18px] font-medium'> By {course?.tags?.instructors} | {course?.tags?.offeringInstitue}</h3>
            </div>
            <div className='mt-3'>
                <Rating  value={4}/>
            </div>
            {/* <div>
                <p>Learners Enrolled :</p>
            </div> */}
        </div>
    )
}

export default DetailsHeader