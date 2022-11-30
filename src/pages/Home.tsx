import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeIllustartion from "../assets/images/illustration.svg";

const Home = (props: any) => {
  const socket = props.socket;
  const navigate = useNavigate();
  const FILTERS = [
    "provider",
    "course_mode",
    "course_duration",
    "course_credits",
    "course_category",
    "query",
  ];

  const [filters, setFilters] = useState({});
  const [connected, setIsConnected] = useState<boolean>(false);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("socket connected");
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("response");
    };
  }, []);

  const handleSubmit = () => {
    console.log({ filters });
    props.socket.emit("search", filters);
    navigate("/courses");
  };
  return (
    <div className="grid grid-cols-2 gap-4 min-h-screen">
      <div className="col-span-1">
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="bg-white px-11 mx-5 py-11 rounded shadow-md bg-opacity-70 my-10">
            <div>
              <h1 className="text-3xl text-blue-900 font-bold mb-8 text-center">
                Select the courses basis this criteria
              </h1>
            </div>
            <form className="mt-10">
              {FILTERS.map((filter): any => {
                return (
                  <div className="mb-4">
                    <label
                      htmlFor={filter}
                      id={filter}
                      className="block text-gray-700 text-md font-medium mb-2"
                    >
                      {filter}
                    </label>
                    <input
                      type="text"
                      name={filter}
                      onChange={(e) => {
                        setFilters({ ...filters, [filter]: e.target.value });
                        console.log("filters: ", filters);
                      }}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                );
              })}
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 w-full text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="col-span-1 flex justify-center items-center min-h-screen">
        <img
          src={HomeIllustartion}
          className="w-4/5 h-auto icons-styling p-4"
        />
      </div>
    </div>
  );
};

export default Home;
