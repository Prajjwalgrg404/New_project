import React from "react";
import CardsDetails from "./Knowmore_cards_Dets"

function KnowMore_section() {
  return (
    <div>
      <div className="w-full h-[72vh] bg-[#F1F6F9] text-center pt-16">
        <h1 className="text-[3rem] font-semibold ">
          Know more about Smart Home
        </h1>
        <div className="w-[80%] h-screen flex mx-auto justify-center pt-10 gap-5">
          {CardsDetails.map((items, id) => {
            return (
              <div
                key={id}
                className="w-[17rem] h-[13rem] bg-white rounded-[3rem] flex flex-col items-center justify-center"
              >
                <h2 className="text-[4rem] text-[#86AFC0] font-bold">{items.numbers}</h2>
                <h3 className="text-[1.1rem] font-semibold">
                  {items.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default KnowMore_section;
