import { useCallback, useEffect, useMemo, useState } from "react";
import { map, forEach } from 'lodash';
import Loader from "../components/Loader";
import CourseCard from "../components/CourseCard";
import Filters from "../components/Filters";
import { useDispatch, useSelector } from "react-redux";
import { coursesSelector, setCourses } from "../store/slices/coursesSlice";
import Header from "../components/Header";


const Courses = (props: any) => {
  const { socket, mode } = props;

  const [connected, setIsConnected] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [showData, setShowData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();
  const courses = useSelector(coursesSelector);
 console.log("bbb:",{courses})

  useEffect(() => {
    socket.on("connect", () => {
      console.log("socket connected");
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("response", (payload: any) => {
      console.log("ccc payload in response: ", payload);     
      dispatch(setCourses(payload.message))
      setShowData(true);
      setLoading(false);
    });
 

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("response");
      setShowData(false);
    };
  }, [dispatch]);

  const handleChange = (ev:any) => { 
    setSearchText(ev.target.value);
    socket.emit("search", {
      query: ev.target.value,      
    });
    setLoading(true);
  };

  const applyFilter = useCallback(
    (filters: any) => {
      socket.emit("search", {
        query: "",
        ...filters,
      });
      setLoading(true);
    },
    [socket],
  )

  
  const dataToDisplay = useMemo(() => {
    const dtp:Array<any> = [];
    forEach(courses?.['bpp/providers'], (categories: any, index: number) => {     
      if (index < 5)
        forEach(categories?.items, (category: any, index: number) => {         
          if (index < 5)
            dtp.push(category);
        })
    });
    return dtp;
  }, [courses]);

  const isDataAvailable=useMemo(()=>showData || dataToDisplay?.length > 0 ,[showData,dataToDisplay]);

  return (
    <>
    <Header handleChange={handleChange} isSearchVisible/>
      {console.log(data)}
      {!isDataAvailable &&
        <Loader />
      }
      {isDataAvailable && (
        <div className={`${mode === "dark" ? "text-white" : ""} flex justify-center items-center min-h-screen flex-col`}>
          

          <div className="w-screen flex items-center">
            <div className="text-4xl font-medium min-w-[1024px] mx-auto">
           {searchText &&  ` Search results for ${searchText}`}
              {/* <span className="block bg-gray-200 rounded px-3 py-1 text-sm font-medium w-[95px] text-gray-700 mr-2 mb-2 mt-4">
                {data?.catalogue?.providers?.items?.length} courses
              </span> */}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 max-w-screen-lg mt-5">
            <Filters applyFilter={applyFilter} />
            <div className="col-span-3">
            {!loading &&  <div className="font-medium">
                Showing &nbsp;
                <span className="font-bold">
                  {dataToDisplay?.length} courses
                </span>
              </div>}             
             
               {dataToDisplay ? map(dataToDisplay,(course:any)=><CourseCard course={course} /> ) : loading ? <>Loading...</>:null} 
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Courses;
