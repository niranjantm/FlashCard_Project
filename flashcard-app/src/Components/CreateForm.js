import React, { Fragment } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deckAction } from "../store/FormReducer";
import * as YUP from "yup";
import { BiEdit } from "react-icons/bi";
import { AiTwotoneDelete as Delete }  from "react-icons/ai"
import error from "./Error"
function CreateForm() {
  const deckState = useSelector((state) => {
    return state.deck;
  });
  console.log("state------>", deckState);
  const dispatch = useDispatch();
  const groupImgRef = useRef();
  const termImgRef = useRef([]);
  const focusRef = useRef([]);
  const initialValues = {
    groupName: "",
    groupDes: "",
    groupImg: "",
    terms: [{ termName: "", termDes: "", termImg: "" }],
  };

  return (
    <Fragment>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          dispatch(deckAction.addDeck(values));
          resetForm();
        }}
        validationSchema={YUP.object({
          groupName: YUP.string()
            .required("Required!"),
          groupDes: YUP.string()
            .required("Required!"),
            
          terms: YUP.array(
            YUP.object({
              termName: YUP.string()
                .required("Required!"),
              termDes: YUP.string()
                .required("Required!")
            })
          ),
        })}
      >
        {({ values, errors, setFieldValue }) => {
          return (
            <Form>
              {/* --------------------------------------Group name------------------------------------------- */}
              <div className="bg-white mr-[15%] ml-[15%] rounded-lg border border-gray-400 shadow-lg flex justify-between pr-[2%] max-sm:flex-col ">
                <div className="flex flex-col  w-[100%] mr-[20%] pl-[5%]">
                  <div className=" flex flex-col w-[60%]   mt-[2%] mb-[2%] ">
                    <label htmlFor="groupName">Create Group</label>
                    <Field
                      type="text"
                      name="groupName"
                      id="groupName"
                      className="border border-black rounded-md "
                    ></Field>
                    <ErrorMessage name="groupName" component={error}></ErrorMessage>
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
                    <ErrorMessage name="groupDes" component={error}></ErrorMessage>
                  </div>
                </div>
                {/* -----------------------------------------Upload image button ------------------------------------------------------------------------------- */}
                <div className="w-[50%] pt-[2%] pb-[2%]  flex items-center max-sm:pl-[5%]">
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    hidden
                    ref={groupImgRef}
                    onChange={(event) => {
                      if (event.target.files[0]) {
                        // if (event.target.files[0].size > 8388608) {
                        //   alert("Image must be less than 1 mb");
                        //  else if (event.target.files[0].size <= 8388608) {
                          console.log("img------>", event.target.files[0]);
                          const reader = new FileReader();
                          reader.readAsDataURL(event.target.files[0]);
                          reader.onload = () => {
                            setFieldValue("groupImg", reader.result);
                            
                          };
                        
                      }
                    }}
                  ></input>
                  <button
                    type="button"
                    onClick={() => {
                      groupImgRef.current.click();
                    }}
                    className={!values.groupImg?" p-[5%] border border-blue-500 shadow-md  text-blue-500 rounded-md  hover:bg-blue-500 hover:text-white":""}
                  >
                    {values.groupImg ? (
                      <img src={values.groupImg} alt="Group Image" className="max-w-[200px]"></img>
                    ) : (
                      "Upload"
                    )}
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
                    <div className="bg-white mr-[15%] ml-[15%] rounded-lg border border-gray-400 shadow-lg  pl-[3.5%] pr-[2%] mt-[1%]">
                      {values.terms.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className=" flex-row w-[100%]  flex-wrap  grid grid-cols-3 gap-4 max-sm:flex max-sm:flex-col"
                          >
                            {/* -------------------------------------------Term Name------------------------------------------------------------- */}
                            <div>
                            <Field
                              name={`terms[${index}].termName`}
                            >
                              {(props) => {
                                const { field, meta, form } = props;
                                return (
                                  <div className="flex flex-col  w-[75%]">
                                    <label htmlFor="termName">Enter Term</label>
                                    <input
                                      type="text"
                                      id="termName"
                                      {...field}
                                      ref={(element) => {
                                        focusRef.current[index] = element;
                                      }}
                                      className="border border-black rounded-md "
                                    />
                                  </div>
                                );
                              }}
                            </Field>
                            <ErrorMessage name={`terms[${index}].termName`} component={error}></ErrorMessage>
                            </div>
                            {/* --------------------------------Term Description----------------------------------------------- */}

                            <div className="flex flex-col  col-span-1">
                              <label htmlFor="termDes">Enter defination</label>
                              <Field
                                as="textarea"
                                id="termDes"
                                name={`terms[${index}].termDes`}
                                className="border border-black rounded-md "
                              ></Field>
                              <ErrorMessage name={`terms[${index}].termDes`} component={error}></ErrorMessage>
                            </div>
                            {/* -------------------------------Term Image------------------------------------------------ */}
                            <div className=" p-[1%] ">
                              <input
                                type="file"
                                accept="image/png ,image/jpeg"
                                hidden
                                ref={(element) =>
                                  (termImgRef.current[index] = element)
                                }
                                onChange={(event) => {
                                  if (event.target.files[0]) {
                                    
                                      const reader = new FileReader();
                                      reader.readAsDataURL(
                                        event.target.files[0]
                                      );
                                      reader.onload = () => {
                                        setFieldValue(
                                          `terms[${index}].termImg`,
                                          reader.result
                                        );
                                      };
                                    
                                  }
                                }}
                              ></input>
                              <div className=" w-[100%]   flex justify-between">
                                <div className="flex flex-col  min-w-[25%] justify-between items-center gap-3">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      focusRef.current[index].focus()
                                    }}
                                    className=""
                                  >
                                    <BiEdit size={35}></BiEdit>
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      console.log("index img------>",index)
                                      remove(index);
                                    }}
                    
                                  >
                                   {index===0?"":<Delete size={35}></Delete>}
                                  </button>
                                </div>

                                <div className=" flex items-center">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      termImgRef.current[index].click()
                                    }
                                    className={!values.terms[index].termImg?" p-[5%] border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white  ":" "}
                                  >
                                    {values.terms[index].termImg ? (
                                      <img
                                        src={values.terms[index].termImg} className="min-h-[100px] max-w-[150px] max-h-[100px] rounded-md"
                                      ></img>
                                    ) : (
                                      "Select image"
                                    )}
                                  </button>
                                </div>

                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <div>
                        <button
                          onClick={() => {
                            push({ termName: "", termDes: "", termImg: "" });
                          }}
                          type="button"
                          className="text-red-500"
                        >
                          Add more +
                        </button>
                      </div>
                    </div>
                  );
                }}
              </FieldArray>
              <div className="flex w-[100%]  justify-center pt-[1%]">
                <button
                  type="submit"
                  className="border border-red-500 rounded-md pr-[1%] pl-[1%] text-red-500 shadow-md hover:text-black hover:bg-red-500"
                  onClick={()=>{console.log("Clicked")}}>
                  Create
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Fragment>
  );
}

export default CreateForm;
