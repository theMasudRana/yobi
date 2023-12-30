import React from "react";
import icon from "../assets/icon.png";
import { useStateValue } from "../Provider";
import { formateDate } from "../utils/helper";

function PrevAns() {
  const [{ prevAns }, dispatch] = useStateValue();

  // console.log("prevAns", prevAns);

  if (!prevAns?.prevAns?.length || prevAns?.question == "") return null;

  return (
    <>
      <div className="previous-answer-box rounded-xl mb-4">
        <div className="box-header">
          <h4>Previous answers</h4>
          <p>You can compare the evolution of your synth here.</p>
        </div>
        <div className="box-content">
          <div className="text-center">
            <p className="previous-question inline-flex justify-between items-center gap-8">
              {prevAns?.question
                ? prevAns?.question
                : "What is your favorite fruit?"}
              <span className="uppercase bg-[#8B979E] rounded-full w-8 h-8 flex items-center justify-center">
                C
              </span>
            </p>
          </div>
          <ul className="mt-5 flex-col">
            {prevAns?.prevAns?.map((ans, i) => {
              return (
                <li
                  className="flex p-4 bg-white rounded-lg gap-4 mb-3"
                  key={ans?.interaction_id}
                >
                  <div className="avatar">
                    <img src={ans?.user?.avater ?? icon} alt="user-avater" />
                  </div>
                  <div className="answer-content ">
                    <p className="bg-[#F5F5F5] px-6 py-2 rounded-md rounded-bl-none">
                      {ans?.content}
                    </p>
                    <p className="text-[#868585]">
                      {formateDate(ans?.created_dt)}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="relative bg-[#eeeeee] max-w-[660px] rounded-xl flex px-6 py-6 flex-col">
        <label htmlFor="feedback-area" className="text-[#868585] text-lg">
          Share your feedback here...
        </label>
        <textarea
          name="feedback-area"
          id="feedback-area"
          cols="5"
          rows="2"
          className="bg-white rounded-xl p-4 mt-4"
        ></textarea>
        <button
          type="submit"
          className="bg-[#0693E3] hover:bg-sky-600 transition duration-300 text-white inline-flex absolute right-8 bottom-8 rounded-xl px-6 py-2 mt-4"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default PrevAns;
