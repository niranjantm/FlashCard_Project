import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deckAction } from "../store/FormReducer";

function MyflashCards() {
  let decks = useSelector((state) => {
    // Using useSelector hook to get the state from redux store
    return state.deck;
  });
  console.log(decks);

  // Defining the below function to display below text and provide a link to create flashcard
  const empty = () => {
    return (
      <div className="p-3 flex flex-col">
        <h1 className="text-xl font-normal pb-2 text-center w-full">No Decks are Created Yet</h1>
        <Link
          to={"/"}
          className="hover:scale-105 duration-150 border-gray-600 px-6 py-2 rounded-md bg-blue-500 text-center shadow-lg font-semibold"
        >
          Click Here to create
        </Link>
      </div>
    );
  };
  return (
    <Fragment>
      <div className="grid grid-cols-3 gap-3 pr-4 pl-4 max-sm:flex max-sm:flex-col ">
        {/* Conditionally rendering the flashcards if present */}

        {decks.length === 0
          ? empty()
          : decks.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" bg-stone-100 pb-3 rounded-lg shadow-lg max-h-[300px]"
                >
                  {/* ----------------------Parent div for Image and Name-------------------------------- */}

                  <div className=" flex flex-row mb-2">
                    {/* -----------------------Image----------------------------------- */}
                    {!item.groupImg ? (
                      ""
                    ) : (
                      <div className="flex ">
                        <img
                          src={item.groupImg}
                          className={"rounded-full  h-20 w-20"}
                        ></img>
                      </div>
                    )}
                    {/* ----------------------Name-------------------------------------- */}

                    <div className=" w-[100%] flex justify-center">
                      <p className="text-2xl font-bold">{item.groupName}</p>
                    </div>
                  </div>
                  {/* --------------------------Description----------------------------- */}
                  <div className="flex flex-col space-y-3 h-full">
                    <div className=" flex justify-center pl-2 max-h-[100px] overflow-y-scroll flex-wrap  ">
                      <p className="text-lg ">{item.groupDes}</p>
                    </div>
                    <div className="flex justify-center">
                      {/* Rendering the number of cards present in the flashcard group using conditional rendering */}
                      <p>
                        {item.terms.length === 1
                          ? `${item.terms.length} card`
                          : `${item.terms.length} cards`}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="button"
                        onClick={() => {}}
                        className="border border-red-500 text-red-500 pl-4 pr-4 rounded-lg hover:bg-red-500 hover:text-black"
                      >
                        {/* providing the dynamic link to view the flash card using useParams hook */}
                        <Link to={`/FlashCardDetail/${index}`}>View</Link>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </Fragment>
  );
}

export default MyflashCards;
