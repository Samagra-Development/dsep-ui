import { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { forEach, find } from 'lodash';
import { coursesSelector } from '../store/slices/coursesSlice';
import { Card, Dropdown } from 'flowbite-react';
import Books from "../assets/images/books.jpg";
const CourseDetails: FC<{ socket: any, mode: any }> = ({ socket, mode }) => {
    let { id } = useParams();
    const courses = useSelector(coursesSelector);
    const selected = useMemo(() => {
        const dtp: Array<any> = [];
        forEach(courses?.['bpp/providers'], (categories: any, index: number) => {
            forEach(categories?.items, (category: any, index: number) => {
                dtp.push(category);
            })
        });
        return find(dtp, { id });
    }, [courses, id]);

    console.log("bnm:", { selected })
    const imageUrl = useMemo(() => selected?.descriptor?.images?.[0] ?? Books, [selected, Books]);
    return (
      <div className={`${mode === "dark" ? "text-white" : ""} flex justify-center items-center min-h-screen flex-col`}>
        <div className="max-w-sm">
        <Card className='w-100'>
          <div className="flex justify-end px-4 pt-4">
            
          </div>
          <div className="flex flex-col items-center pb-10">
            <img
              className="mb-3 h-24 w-24 rounded-full shadow-lg"
              src={imageUrl}
              alt="CourseImage"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {selected?.descriptor?.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
             Page Work In Progress
            </span>
            <div className="mt-4 flex space-x-3 lg:mt-6">
              <a
                href={selected?.tags?.url}
                target="_blank"
                className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
               Preview
              </a>
              
            </div>
          </div>
        </Card>
      </div>
      </div>
    )
}

export default CourseDetails