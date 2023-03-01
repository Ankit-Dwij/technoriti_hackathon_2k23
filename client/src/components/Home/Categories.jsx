import React from "react";

export const categories = [
  {
    id: 1,
    name: "HOLI PARTIES",
    image:
      "https://resize.indiatvnews.com/en/resize/newbucket/730_-/2020/03/holi-1583485335.jpg",
  },
  {
    id: 2,
    name: "MUSICAL",
    image:
      "https://images.unsplash.com/photo-1613093335399-829e30811789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    name: "SPORTS",
    image:
      "https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/1078B/production/_92676476_reds.jpg",
  },
  {
    id: 4,
    name: "ADVENTURE",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8pQ8A2BrnYw4zCeeDAwOgsvFGSkS0xI0BruBvXIO1DJ9lSHRtMg4lEtZMknN6BsumKUs&usqp=CAU",
  },
  {
    id: 5,
    name: "TECHFEST",
    image: "https://i.ytimg.com/vi/k0fOIdNtFFw/maxresdefault.jpg",
  },
  {
    id: 6,
    name: "WORKSHOPS",
    image:
      "https://image.cnbcfm.com/api/v1/image/106276827-1575412281122gettyimages-603706227.jpg?v=1575412404",
  },
  {
    id: 7,
    name: "COMEDY",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipNmU9wivrmdYj7vOgMlljU9Ppnwrol30gBxZgKk=w768-h768-n-o-v1",
  },
  {
    id: 8,
    name: "READING",
    image:
      "https://media.wired.com/photos/5955c3573ff99d6b3a1d165c/3:2/w_1280%2Cc_limit/books.jpg",
  },
];

const CategoryCard = ({ props }) => {
  return (
    <>
      <div className="card-contnr bg-gray-200 rounded-xl w-[310px] h-[330px] flex  justify-center items-top">
        <span className="card-txt font-bold text-emerald-500 sm:text-xl ">
          {props.name}
        </span>
        <img src={props.image} className="card-bg-image rounded-xl" />
      </div>
      <style jsx>{`
        .card-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .card-txt {
          position: absolute;
          margin-top: 30px;
          font-size: 30px;
          font-style: bold;
          font-weight: 600;
        }
        .card-contnr {
          overflow: hidden;
          word-wrap: break-word;
        }
      `}</style>
    </>
  );
};

const Category = () => {
  return (
    <div className="tb-pad-d lr-pad-d max-w-[1640px]  px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center ">
        Explore Events by Interests
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 ">
        {categories.map((item, index) => {
          return <CategoryCard key={index} props={item} />;
        })}
      </div>
    </div>
  );
};

export default Category;
