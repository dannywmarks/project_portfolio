import React, { useState, useRef, useEffect } from "react";
import { submitComment } from "../services";

const CommentForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();


  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name')
    emailEl.current.value = window.localStorage.getItem('email')
  }, [])

  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="bg-gray-900 shdaow-lg rounded-lg p-8 pb-12 mb-8 border-2 border-red-300">
      <h3 className="text-xl text-white mb-8 font-semibold border-b pb-4 border-red-200">
        Leave a Reply
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className="mb-4 w-full flex-1 bg-white  font-poppins font-black text-2xl text-gray-900 p-2"
          placeholder="Comment"
          name="comment"
          rows="8"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          ref={nameEl}
          className="w-full flex-1 bg-white  font-poppins font-black text-xl text-gray-900 p-2"
          placeholder="Name"
          name="name"
        />
        <input
          ref={emailEl}
          className="w-full flex-1 bg-white  font-poppins font-black text-xl text-gray-900 p-2"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storedata"
            value="true"
          />
          <label htmlfor="storeData" className="text-white px-4 text-2xl">
            Save my e-mail and name for the next time I comment
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">All fields are required.</p>
      )}
      <div className="mt-8">
        <button
          className="rounded-full py-4 w-60 my-4 text-xl md:text-2xl text-red-300 font-bold outline hover:bg-red-200 hover:text-black font-poppins"
          type="button"
          onClick={handleCommentSubmission}
        >
          Submit
        </button>
        {showSuccessMessage && (
          <span className="text-xl float-right font-semibold mt-3 text-green-300">
            Comment Submitted for review.
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentForm;
