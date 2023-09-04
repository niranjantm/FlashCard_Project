import React, { Fragment, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ShareModal from "../Components/ShareModal";
import { saveAs } from "file-saver";

function FlashCardDetail() {
  // Using usesSelector hook to get the state from redux store
  const deck = useSelector((state) => {
    return state.deck;
  });
  // Using the useParams hook to get the dynamic member in the page url
  const { index } = useParams();
  // Using useState hook to operate boolean value which in turns regulates share pop up
  const [share, setShare] = useState(false);
  // Using useRef hook to access the client width property of custom carousel
  const carouselRef = useRef();

  //  Defining the previous and next functions which operates carousel movement
  const previous = () => {
    const width = carouselRef.current.clientWidth;
    console.log("width------>", carouselRef.current.scrollLeft);
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft - width;
  };
  const next = () => {
    const width = carouselRef.current.clientWidth;
    console.log("width------>", width);
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft + width;
  };

  return (
    <Fragment>
      <div className="flex flex-col flex-wrap  ">
        <div className="flex ">
          {/* Providing a return to myflashcards link by using custom icons */}
          <div className="">
            <Link to={"/MyflashCards"} className="">
              <BsArrowLeft
                size={40}
                className="hover:bg-red-500/50 rounded-lg "
              ></BsArrowLeft>
            </Link>
          </div>
          <div className=" w-[100%]  flex flex-col items-center">
            {/* Displaying Group name and Group description */}
            <p className="font-bold text-2xl mb-2">{deck[index].groupName}</p>
            <p className="font-normal text-lg">{deck[index].groupDes}</p>
          </div>
        </div>

        {/* ----------------------------Image, carousel and share----------------------------- */}
        <div className="flex flex-row justify-evenly max-sm:flex max-sm:flex-col max-sm:items-center">
          {/* ------------Term name buttons to select specific group */}

          <div className="max-sm:w-[50%]">
            <div className="bg-white border border-gray-600  rounded-lg shadow-md ">
              <div className="p-3">
                <p className="text-xl pb-1 font-medium">FlashCards</p>
                <hr className="border border-gray-500"></hr>
                <div className="flex flex-col gap-1">
                  {/* Rendering Group term names by using map function*/}

                  {deck[index].terms.map((item, index) => {
                    return (
                      <button
                        className=" hover:text-red-500"
                        onClick={() => {
                          console.log(carouselRef.current.scrollLeft);
                          return (carouselRef.current.scrollLeft =
                            index * carouselRef.current.clientWidth);
                        }}
                      >
                        {item.termName}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* {------------------------Carousel----------------------------------------------} */}

          <div className="relative max-w-xl  flex flex-wrap  rounded-lg gap-1 pb-3">
            {/* Accessing the client width property of the below div so that we can scroll left or right the carousel by using scrollLeft property */}
            <div
              className="flex max-w-full h-fit bg-white min-w-full overflow-hidden border border-gray-600 rounded-lg scroll-smooth"
              ref={carouselRef}
            >
              {deck[index].terms.map((item, i) => {
                return (
                  <div
                    className={`  min-w-full flex flex-col justify-evenly items-center`}
                  >
                    <img
                      src={item.termImg}
                      className="max-w-lg max-h-[200px] p-3 "
                    ></img>
                    <p className="pl-3 pr-2">{item.termDes}</p>
                  </div>
                );
              })}
            </div>
            {/* Using react icons as left and right buttons which calls previous and next fuction when clicked  */}
            <div className="flex justify-around w-full">
              <BiChevronLeft
                size={30}
                onClick={previous}
                className="border border-gray-400 rounded-lg bg-gray-400/25 hover:border-black"
              ></BiChevronLeft>

              <BiChevronRight
                size={30}
                onClick={next}
                className="border border-gray-400 rounded-lg bg-gray-400/25 hover:border-black"
              ></BiChevronRight>
            </div>
          </div>
          {/*----------------------- Rendering share button ------------------------------*/}
          <div className=" flex flex-col items-center mt-2 max-sm:flex-row max-sm:gap-2">
            <div>
              {/* when share button is clicked calls an anonymous function which changes the share state */}
              <button
                type="button"
                onClick={() => {
                  setShare((pre) => !pre);
                }}
                className="rounded-lg border border-gray-600 pt-2 pb-2 pl-4 pr-4 shadow-lg bg-slate-200 hover:bg-red-500 mb-3"
              >
                Share
              </button>
              {share ? (
                <ShareModal
                  share={share}
                  onClose={() => {
                    setShare((pre) => !pre);
                  }}
                ></ShareModal>
              ) : (
                ""
              )}
            </div>
            <div>
              {/* ---------------------rendering Download button-------------------------- */}
              <button
                type="button"
                onClick={() => {
                  // Using blob to store the decks present loacalstorage
                  const file = new Blob(
                    localStorage.getItem("Decks")
                      ? [localStorage.getItem(`Decks`)]
                      : [" "],
                    {
                      type: "application/json",
                    }
                  );
                  // Using saveAs function provided by file-saver to create download by converting blob file into json file
                  saveAs(file, `file.json`);
                }}
                className="rounded-lg border border-gray-600 pt-2 pb-2 pl-4 pr-4 shadow-lg bg-slate-200 hover:bg-red-500 mb-3"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default FlashCardDetail;
