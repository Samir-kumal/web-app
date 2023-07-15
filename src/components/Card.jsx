import React from "react";

const Card = (props) => {
  const handleClick = (item) => {
    // console.log(item);
    props.handleClick(item);
  };
  const formatPostedOn = (timestamp) => {
    const today = new Date();
    const postedDate = new Date(timestamp);
    const timeDiff = Math.abs(today - postedDate);
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    if (daysDiff === 1) {
      return "1d ago";
    } else {
      return `${daysDiff}d ago`;
    }
  };

//   console.log(props.data);
  return (
    <div className="w-[80%] h-32 shadow-xl flex items-center relative p-4 border-2 my-2">
      <div className="flex flex-row w-[50%] h-fit items-center ">
        <div className=" w-16 h-16 rounded-full  mx-2  flex justify-center items-center">
          <img
            className=" flex justify-center items-center "
            src={props.data.company_logo}
            alt=""
          />
        </div>
        <div className="w-[60%] flex flex-col    items-start ml-4 ">
          <div className="text-[#398fff]">{props.data.company}</div>
          <div className="font-bold text-xl"> {props.data.position}</div>
          <div className="flex gap-x-4">
            <div className="text-sm">{formatPostedOn(props.data.posted_on)}</div>
            <div className="text-sm">{props.data.timing}</div>
            <div className="text-sm">{props.data.location}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-[50%] justify-end h-fit  ">
        {props.data.keywords.map((item) => (
          <button
            onClick={() => handleClick(item)}
            className="bg-[#c2f7fc] p-1 m-2 text-sm text-[#398fff] hover:bg-[#398fff] hover:text-[#fff] rounded-xl px-2"
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Card;
