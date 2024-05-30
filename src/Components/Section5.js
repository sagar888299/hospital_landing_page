import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { StaticImage } from "gatsby-plugin-image";

const SkeletonReview = () => {
  return (
    <div className="relative flex-shrink-0 w-[520px]  rounded-[12px] flex flex-col justify-between ">
      <div className="absolute right-[-20px] top-[40px] z-30">
        <div className="w-[83.3px] h-[83.3px] bg-gray-300 rounded-full"></div>
      </div>
      <div className="h-[320px] p-[48px] mt-[64px] bg-gray-200 rounded-[12px] bg-gray-200 animate-pulse">
        <div className="h-[106px] bg-gray-300 rounded"></div>
        <div className="flex gap-[11px] mt-[30px]">
          <div className="w-[59px] h-[59px] bg-gray-300 rounded-full"></div>
          <div className="flex flex-col gap-[8px]">
            <div className="w-[100px] h-[24px] bg-gray-300 rounded"></div>
            <div className="w-[80px] h-[18px] bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CustomerReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const scrollContainerRef = useRef(null);

  const fetchReviews = (page) => {
    setLoading(true);
    axios
      .get(`https://admin.tomedes.com/api/v1/get-reviews?page=${page}`)
      .then((response) => {
        setReviews(response.data.data);
        setTotalPages(response.data.meta.last_page);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchReviews(page);
  }, [page]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -570, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 570, behavior: "smooth" });
    }
  };


  return (
    <div className="font-sans">
      <div className="font-bold px-[120px] text-[54px] leading-[78px] pt-[80px] text-[#003B79]">
        What Our Customers Say
      </div>
      <div className="flex flex-col items-center px-[70px]">
        <div className="flex items-center w-full">
          <button
            onClick={scrollLeft}
            className="rotate-180 text-white bg-[#007FF4] hover:bg-[#002348] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
          <div
            ref={scrollContainerRef}
            className="flex w-full gap-[48px] overflow-x-auto no-scrollbar"
          >
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <SkeletonReview key={index} />
                ))
              : reviews.map((review) => (
                  <div
                    key={review.id}
                    className="relative flex-shrink-0 w-[520px] rounded-[12px] flex flex-col justify-between"
                  >
                    <div className="absolute right-[-20px] top-[40px] z-30">
                      <StaticImage
                        src="../images/Group 4.png"
                        width={83.3}
                        height={83.3}
                        alt="Review Image"
                      />
                    </div>
                    <div className="h-[320px] p-[48px] mt-[64px] bg-[#FFFFFF] rounded-[12px]">
                      <div className="font-base h-[106px] overflow-y-auto no-scrollbar text-[20px] leading-[39px] text-[#003B79] mb-4">
                        {review.Reviews}
                      </div>
                      <div className="flex gap-[11px] text-[#003B79] mt-[30px]">
                        <div className="w-[59px] h-[59px] bg-[#AED3E2] rounded-[50%]"></div>
                        <div className="flex flex-col">
                          <div className="font-bold text-[24px] leading-[30.17px]">
                            {review.Name}
                          </div>
                          <div className="font-base text-[18px] leading-[22.63px] mt-[8px]">
                            Patients
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
          <button
            onClick={scrollRight}
            className="text-white bg-[#007FF4] hover:bg-[#002348] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
        <div className="flex mt-8">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 font-bold bg-[#007FF4] text-white rounded-full disabled:opacity-50 "
          >
            Prev
          </button>
          <div className="px-4 py-2 font-base text-[18px] text-[#002348]">
            {page} - {totalPages}
          </div>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="px-4 py-2 font-bold  bg-[#007FF4] text-white rounded-full disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
