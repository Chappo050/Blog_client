//IMPROTS//
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//Components//
import Nav from "../Nav";

//API setup
const api = axios.create({
  baseURL: "http://localhost:5000/blog/post",
});

function BlogPost() {

  let navigate = useNavigate();

  const [formValue, setformValue] = useState({
    message: "",
    isPublic: true,
  });

  const [messagePosted, setMessagePosted] = useState(false);

  const [checked, setChecked] = useState(true);


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formValue);
    
    let result = await axios.post("/blog/post", formValue);
    if (result.status === 200) {
      
      setMessagePosted(true)
    }
  };

  const handleChange = (event: any) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <>
      <div className="grid grid-cols-5 ">
        <i />
        <form
          onSubmit={handleSubmit}
          className="text-custom-green-blue border border-custom-silver text-center col-span-3 "
        >
          <div className="text-lg pt-5">Please enter your message below.</div>
   
          <div className="p-2 m-10">

            <textarea
              name="message"
              overflow-y="hidden"
              placeholder="Enter your message here"
              value={formValue.message}
              onChange={handleChange}
              required
              className="text-black p-2 h-44 w-full bg-custom-aquamarine"
              maxLength={750}
            />
          </div>
          
          {messagePosted ? <SuccessMessage/>: null}

          <div className="p-2 m-2">
            <label className="pr-2">Public? </label>
            <input
              type="checkbox"
              name="public"
              checked={checked}
              onChange={handleCheck}
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="bg-custom-dark-blue p-1 border border-custom-silver"
            >
              Submit
            </button>
          </div>

        </form>
        <i />

      </div>

      </>
    </div>
  );
}

const SuccessMessage = () => {
  return(
    <div className="text-custom-green-blue border-custom-silver text-2xl border-b-4 border-t-4  animate-pulse">Message successfully posted!</div>
  )
}

export default BlogPost;
