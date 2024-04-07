import React, { useState } from "react";

export default function NewsEvents() {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleTitleClick = (index) => {
    setClickedIndex(index === clickedIndex ? null : index);
  };

  return (
    <>
      <div
        className="w-full h-80 bg-indigo-200 relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/worldwide-connection-red-background-illustration_53876-63936.jpg?w=996)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          opacity: 1.8,
        }}
      >
        <div className="text-center mt-5">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-white mt-16 font-medium mb-0">
            News & Events
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 bg-slate-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Sample data for news */}
          {newsData.map((news, index) => (
            <div
              key={index}
              className="max-w-sm rounded overflow-hidden bg-white shadow-lg transition duration-500 ease-in-out transform hover:scale-105 mt-8"
            >
              <a href={news.link} target="_blank" rel="noopener noreferrer">
                <img
                  className="w-full h-64 object-cover"
                  src={news.image}
                  alt={news.title}
                />
              </a>
              <div className="px-6 py-4">
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`font-bold text-red-600 text-xl mb-2 cursor-pointer ${
                      index === clickedIndex ? "text-red-600 underline" : ""
                    }`}
                    onClick={() => handleTitleClick(index)}
                  >
                    {news.title}
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Sample news data
const newsData = [
  {
    title: "Apex 2023",
    image: "ev1.jpg",
    link: "http://103.66.206.213/piwigo/index.php?/category/10",
  },
  {
    title: "Glimpses Of Alumni Day, 18th Nov, 2023",
    image: "ev2.jpg",
    link: "http://103.66.206.213/piwigo/index.php?/category/1",
  },
  {
    title: "Golden Jublie Batch 1963 Passouts ",
    image: "ev3.jpg",
    link: "http://103.66.206.213/piwigo/index.php?/category/3",
  },
  {
    title: "Annual Convocation Batch(2019-2023)",
    image: "ev4.jpg",
    link: "http://103.66.206.213/piwigo/index.php?/category/4",
  },
  {
    title: "ANAND UTSAV 2023",
    image: "ev5.jpg",
    link: "http://103.66.206.213/piwigo/index.php?/category/7",
  },
  {
    title: " Annual Alumni Meet - 2022",
    image: "ev6.jpg",
    link: "http://103.66.206.213/piwigo/index.php?/category/11",
  },
  {
    title: "College Vist of S. Harjinder Singh Dhami ji (President SGPC)",
    image: "ev7.jpg",
    link: "http://103.66.206.213/piwigo/index.php?/category/12",
  },
  {
    title: "Annual Convocation (2022)",
    image: "ev8.jpg",
    link: "http://103.66.206.213/piwigo/index.php?/category/13",
  },
  {
    title: "Annual Alumni Meet (2021)",
    image: "ev9.jpg",
    link: "http://103.66.206.213/piwigo/index.php?/category/14",
  },
];
