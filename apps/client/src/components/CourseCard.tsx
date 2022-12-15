import { Card } from "flowbite-react";
import { FC, useMemo } from "react";
import Books from "../assets/images/books.jpg";
import { LinkContainer } from 'react-router-bootstrap';
import { CourseType } from "../types/courses";
import Rating from "./Raitings";



const CourseCard: FC<{ course: CourseType }> = ({ course }) => {
    const imageUrl = useMemo(() => course?.descriptor?.images?.[0] ?? Books, [course, Books]);

    return (

        <LinkContainer to={`/courses/${course?.id}`} style={{ cursor: 'pointer' }}>
            <div className="mb-3">
                <a href="#" className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

                    <img className="object-cover w-full rounded h-96 md:h-auto md:w-48 " src={imageUrl} alt="courseImage" />
                    <div className="flex flex-col justify-between p-4 leading-normal">

                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">  {course?.descriptor?.name}</h5>
                        <h6>
                            {course?.tags?.offeringInstitue}
                        </h6>
                        <Rating value={4} size={1} />
                        <div className="px-6 pt-4 pb-2 flex-col">

                            <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2" onClick={ev => ev.preventDefault()}>
                                {course?.category_id}
                            </span>

                            <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">
                                {course?.price?.value} {course?.price?.currency}
                            </span>
                        </div>
                        <div className="px-6 pt-4 pb-2 flex-row">

                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident cum debitis rerum porro nisi vitae esse aperiam similique alias ut?
                        </div>
                    </div>
                    <div>

                    </div>

                </a>

            </div>
        </LinkContainer>
    );
};

export default CourseCard;


{/* <Card
                    horizontal={true}
                    imgSrc={imageUrl}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {course?.descriptor?.name}
                    </h5>

                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Provided By: {course?.tags?.offeringInstitue}
                    </p>
                    <h5> {course?.tags?.instructors}</h5>
                    <div className="px-6 pt-4 pb-2">
                       
                        <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2" onClick={ev => ev.preventDefault()}>
                            {course?.category_id}
                        </span>
                       
                        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">
                            {course?.price?.value} {course?.price?.currency}
                        </span>
                    </div>
                </Card> */}