import React, { Fragment } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { useRef } from "react";
import {useDispatch, useSelector} from "react-redux";
import { deckAction } from "../store/FormReducer";

function CreateForm() {
  const deckState = useSelector((state)=>{return(state.deck)})
  console.log("state------>",deckState)
  const dispatch = useDispatch();
  const groupImgRef = useRef();
  const termImgRef = useRef([]);
  const initialValues = {
    groupName: "",
    groupDes: "",
    groupImg: "",
    terms: [{ termName: "", termDes: "", termImg: "" }],
  };
  const onSubmit = (values) => {
    dispatch(deckAction.addDeck(values))
  };

  return (
    <Fragment>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          {/* --------------------------------------Group name------------------------------------------- */}
          <div className="bg-white mr-[15%] ml-[15%] rounded-lg border border-gray-400 shadow-lg flex justify-between max-sm:flex-col ">
            <div className="flex flex-col  w-[100%] mr-[20%] pl-[5%]">
              <div className=" flex flex-col w-[60%]   mt-[2%] mb-[2%] ">
                <label htmlFor="groupName">Create Group</label>
                <Field
                  type="text"
                  name="groupName"
                  id="groupName"
                  className="border border-black rounded-md "
                ></Field>
              </div>
              {/* ----------------------Group description------------------------------------------------------- */}
              <div className="flex flex-col w-[100%]   mb-[2%]">
                <label htmlFor="groupDes">Add Description</label>
                <Field
                  as="textarea"
                  name="groupDes"
                  id="groupDes"
                  className="border border-black rounded-md "
                ></Field>
              </div>
            </div>
            {/* -----------------------------------------Upload image button ------------------------------------------------------------------------------- */}
            <div className="w-[50%] pt-[2%] pb-[2%]  flex items-center max-sm:pl-[5%]">
              <input
                type="file"
                accept="image/png, image/jpeg"
                hidden
                ref={groupImgRef}
              ></input>
              <button
                type="button"
                onClick={() => {
                  groupImgRef.current.click();
                }}
                className=" p-[5%] border border-blue-500 shadow-md  text-blue-500 rounded-md  hover:bg-blue-500 hover:text-white"
              >
                Upload image
              </button>
            </div>
          </div>
          {/* ---------------------------------Terms------------------------------------------------------------- */}

          <FieldArray name="terms">
            {(props) => {
              const { push, remove, form } = props;
              const { values } = form;
              console.log(values);
              return (
                <div className="bg-white mr-[15%] ml-[15%] rounded-lg border border-gray-400 shadow-lg flex flex-col pl-[3.5%] mt-[1%]">
                  {values.terms.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className=" flex-row w-[100%]  flex-wrap  grid grid-cols-3 gap-4"
                      >
                        {/* -------------------------------------------Term Name------------------------------------------------------------- */}
                        <Field name={`terms[${index}].termName`} className="">
                          {(props) => {
                            const { field, meta, form } = props;
                            return (
                              <div className="flex flex-col  w-[75%]">
                                <label htmlFor="termName">Enter Term</label>
                                <input
                                  type="text"
                                  id="termName"
                                  {...field}
                                  className="border border-black rounded-md "
                                />
                              </div>
                            );
                          }}
                        </Field>
                        {/* --------------------------------Term Description----------------------------------------------- */}

                        <div className="flex flex-col  col-span-1">
                          <label htmlFor="termDes">Enter defination</label>
                          <Field
                            as="textarea"
                            id="termDes"
                            name={`terms[${index}].termDes`}
                            className="border border-black rounded-md "
                          ></Field>
                        </div>
                        {/* -------------------------------Term Image------------------------------------------------ */}
                        <div className=" p-[1%] flex justify-center ">
                          <input
                            type="file"
                            accept="image/png ,image/jpeg"
                            hidden
                            ref={(element) =>
                              (termImgRef.current[index] = element)
                            }
                          ></input>
                          <button
                            type="button"
                            onClick={() => termImgRef.current[index].click()}
                            className=" p-[5%] border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white shadow-md" 
                          >
                           Select image
                          </button>
                        </div>
                        
                      </div>
                      
                      
                    );
                  })}
                  <button onClick={()=>{push({termName: "", termDes: "", termImg: ""})}} type="button" className="text-red-500">Add more +</button>
                </div>
              );
            }}
          </FieldArray>
          <button type="submit">Create</button>
        </Form>
        
      </Formik>
    </Fragment>
  );
}

export default CreateForm;
