import React from "react";

const Header = ({ title, category }) => {
  return (
    <header className="mb-10 ">
      <p className="text-gray-400">{category}</p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900">
        {title}
      </p>
    </header>
  );
};

export default Header;
