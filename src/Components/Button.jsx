import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-gradient-to-r from-purple-900 via-purple-500 to-purple-300 rounded-[10px] outline-none ${styles} hover:from-purple-300 hover:via-purple-500 hover:to-purple-900 ...`}>
    Get Started
  </button>
);

export default Button;
