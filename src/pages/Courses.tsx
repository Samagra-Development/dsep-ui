import { useEffect, useState } from "react";
import { JsonToTable } from "react-json-to-table";

const Courses = (props: any) => {
  const { socket } = props;

  const [connected, setIsConnected] = useState<boolean>(false);
  const [data, setData] = useState({});
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

  return showData && <JsonToTable json={data} />;
};

export default Courses;
