import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../components/atoms/Pagination";
export const Guest = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [limit, setLimit] = useState(15);
  const apiUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    getData();
  }, [limit, page, pages]);

  const getData = async () => {
    const response = await axios.get(
      `${apiUrl}/guest?page=${page}&limit=${limit}`
    );
    setData(response.data.data);
    setPage(response.data.current_page);
    setPages(response.data.total_page);
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <>
      <div className="flex flex-col bg-gradient-to-b from-emerald-200 to-white h-auto w-auto">
        <div className="travigo-container">
          <div className="grid items-center place-items-center text-center mt-36 mb-12 md:mt-28 md:mb-6">
            <h1 className="text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg bg-clip-text text-transparent bg-orange-700 p-2">
              Our guests come from around the world
            </h1>
            <p className="text-base my-5 text-center sm:text-sm">
              Our establishment welcomes guests from across the globe, embracing
              diversity and fostering a global community of cultural exchange
              and inclusivity.
            </p>
          </div>

          <div className="grid grid-cols-5 lg:grid-cols-1 gap-4 p-4">
            {data.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col gap-2 border border-green-400 rounded-lg"
              >
                <img
                  src={item.url}
                  className="object-cover lg:object-fill w-full h-48 rounded-lg"
                />
                <div className="flex flex-col justify-center items-center">
                  <p className="font-semibold text-xl">{item.fullname}</p>
                </div>
                <span className="absolute right-0 border text-white bg-green-700 rounded-bl-full px-4 text-center">
                  {item.country}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-2 mx-auto justify-end px-6 py-2">
            <Pagination
              currentPage={page}
              totalPages={pages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};
