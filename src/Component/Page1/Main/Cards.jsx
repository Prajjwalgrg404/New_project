import React from "react";
import CardDeatil from "./CardsDetails";

function Cards() {
  return (
    <div className="w-[80%] h-screen   flex mx-auto justify-center py-7 gap-5">
      {CardDeatil.map((items, id) => {
        return (
          <div
            key={id}
            className="w-[15rem] h-[18rem] bg-[#F1F6F9] rounded-3xl flex flex-col items-center justify-center"
          >
            <img src={items.img} alt={items.id} />
            <h3 className="text-[#86AFC0] text-[1.3rem] py-7 font-semibold">{items.title}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
