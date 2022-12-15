import { Card } from 'flowbite-react'
import React, { FC } from 'react'
import { CourseType } from '../../types/courses'
import Rating from '../Raitings'

const DetailsHeader: FC<{ course: CourseType }> = ({ course }) => {
    return (
        <Card className='mb-2'>
            <div>
                <h1>{course?.descriptor?.name}</h1>
                <h3> By {course?.tags?.instructors} | {course?.tags?.offeringInstitue}</h3>
            </div>
            <div>
                <Rating  value={4}/>
            </div>
            <div>
                <p>Learners Enrolled :</p>
            </div>
        </Card>
    )
}

export default DetailsHeader