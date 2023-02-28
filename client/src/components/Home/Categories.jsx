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
    name: "Musical",
    image:
      "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png",
  },
  {
    id: 3,
    name: "Wings",
    image:
      "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Wings_BrowseHome@3x.png",
  },
  {
    id: 4,
    name: "Indian",
    image:
      "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Indian_BrowseHome@3x.png",
  },
  {
    id: 5,
    name: "Latest Deals",
    image:
      "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Deals_BrowseHome@3x.png",
  },
  {
    id: 6,
    name: "Restaurant Rewards",
    image:
      "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/RestoRewards_BrowseHome@3x.png",
  },
  {
    id: 7,
    name: "Best Overall",
    image:
      "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/TopEats_Browse%20Home@3x.png",
  },
  {
    id: 8,
    name: "Shipped Free",
    image:
      "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Placeholder_Plates@3x.png",
  },
];

const CategoryCard = ({ props }) => {
  return (
    <>
      <div className="card-contnr bg-gray-200 rounded-xl w-[310px] h-[330px] flex  justify-center items-top">
        <span className="card-txt font-bold text-yellow-600 sm:text-xl ">
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
      {/* categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 ">
        {categories.map((item, index) => {
          return <CategoryCard key={index} props={item} />;
        })}
      </div>
    </div>
  );
};

export default Category;
