import React, { useEffect, useState } from "react";
import { JsonToTable } from "react-json-to-table";

const Home = (props: any) => {
  const socket = props.socket;

  const FILTERS = [
    "provider",
    "course_level",
    "query",
    "rating",
    "max_price",
    "min_price",
    "competency",
    "exams",
    "subjects",
    "isCertified",
    "course_type",
    "seller_name",
    "seller_email",
  ];

  const [filters, setFilters] = useState({});
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
      // if (payload.context.action === "search") {
      //   const data = payload.message.catalogue.providers;
      //   let items = [];
      //   for (const provider of data) {
      //     items.push(
      //       ...provider.items.map((item: any) => {
      //         return {
      //           id: item.id,
      //           bank_name: item.provider.id,
      //           block: item.tags.block,
      //           district: item.tags.district,
      //           loan_product: item.descriptor.name,
      //           maximum_loan_amt: item.price,
      //           interest_rate: item.tags.interest_rate,
      //           loan_tenure: item.tags.loan_tenure,
      //           processing_charges: item.tags.processing_charges,
      //         };
      //       })
      //     );
      //   }
      //   setData(
      //     items.sort((a, b) => {
      //       console.log("a: ", a);
      //       return a.id < b.id ? 0 : 1;
      // })
      // );
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

  return (
    <div>
      <div>
        {FILTERS.map((filter): any => {
          return (
            <div>
              <label htmlFor={filter} id={filter}>
                {" "}
                {filter}
              </label>
              <input
                type="text"
                name={filter}
                onChange={(e) => {
                  setFilters({ ...filters, [filter]: e.target.value });
                  console.log("filters: ", filters);
                }}
              />
            </div>
          );
        })}
        <button
          type="submit"
          onClick={() => {
            props.socket.emit("search", filters);
          }}
        >
          Submit
        </button>
      </div>
      <div>{showData ? <JsonToTable json={data} /> : <></>}</div>
    </div>
  );
};

export default Home;
