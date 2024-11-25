"use client";

import React from "react";

interface ISearchUserProps {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
}

const SearchUser = ({ handleInputChange, placeHolder }: ISearchUserProps) => {
  return (
    <div className="w-full  ">
      <input
        type="text"
        onChange={handleInputChange}
        placeholder={placeHolder}
        className="w-full px-4 py-2 border placeholder:text-purple-600 border-purple-600 rounded-lg shadow-sm focus:outline-none "
      />
    </div>
  );
};

export default SearchUser;
