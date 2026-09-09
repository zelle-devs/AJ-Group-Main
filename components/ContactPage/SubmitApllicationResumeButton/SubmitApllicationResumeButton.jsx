'use client';

import React, { useRef } from 'react';
import './SubmitApllicationResumeButton.css';

const SubmitApllicationResumeButton = ({ onFileSelected }) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (onFileSelected) {
      onFileSelected(file || null);
    }
    // allow re-selecting the same file later
    e.target.value = '';
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf,.pdf"
        onChange={handleChange}
        style={{ display: 'none' }}
      />
      <button
        type="button"
        className="cssbuttons-io-button"
        onClick={handleClick}
      >
        Upload CV
        <div className="icon">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </button>
    </>
  );
};

export default SubmitApllicationResumeButton;