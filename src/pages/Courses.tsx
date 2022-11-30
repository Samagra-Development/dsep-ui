import { useEffect, useState } from "react";
import Books from "../assets/images/books.jpg";
import { MdFilterListAlt } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

const Courses = (props: any) => {
  const { socket } = props;

  const [connected, setIsConnected] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [showData, setShowData] = useState(false);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("socket connected");
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("response", (payload: any) => {
      console.log("payload in response: ", payload);
      setData(payload.message);
      setShowData(true);
    });
    // });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("response");
    };
  }, []);

  const handleChange = () => {};

  return (
    <>
      {showData && (
        <div className="flex justify-center items-center min-h-screen flex-col my-11">
          <form className="flex items-center mt-5 mb-3 justify-end w-screen">
            <div className="relative w-1/5 mx-8">
              <input
                type="text"
                id="simple-search"
                className="search outline-none rounded-[37px] block w-full py-4 px-8 h-[50px] border border-gray-300"
                placeholder="Search"
                onChange={handleChange}
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 my-3 pointer-events-none">
                <BsSearch />
              </div>
            </div>
          </form>

          <div className="h-[200px] bg-white border-y border-gray-200 w-screen flex items-center">
            <div className="text-4xl font-medium min-w-[1024px] mx-auto">
              Search results for{" "}
              <span className="block bg-gray-200 rounded px-3 py-1 text-sm font-medium w-[87px] text-gray-700 mr-2 mb-2 mt-4">
                {data?.catalogue?.providers?.length} courses
              </span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 max-w-screen-lg mt-8">
            <div className="col-span-1">
              <div className="font-bold flex items-center gap-2">
                <MdFilterListAlt />
                <div>Filter by</div>
              </div>
              <div className="bg-white border border-gray-300 rounded px-5 py-7 my-4"></div>
            </div>
            <div className="col-span-3">
              <div className="font-medium">
                Showing{" "}
                <span className="font-bold">
                  {data?.catalogue?.providers?.length} courses
                </span>
              </div>
              {data?.catalogue?.providers?.map((course: any) => (
                <div className="rounded overflow-hidden shadow-lg bg-white font-regular my-4 flex">
                  <img className="w-2/5 h-auto" src={Books} alt="Books" />
                  <div>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">
                        {course?.items[0]?.descriptor?.name}
                      </div>
                      <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2">
                        {course?.items[0]?.tags?.competency}
                      </span>
                      <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700 mr-2 mb-2">
                        {course?.items[0]?.tags?.course_level}
                      </span>
                      <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">
                        {course?.items[0]?.tags?.exams}
                      </span>
                      <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-purple-700 mr-2 mb-2">
                        {course?.items[0]?.tags?.subjects}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Courses;
