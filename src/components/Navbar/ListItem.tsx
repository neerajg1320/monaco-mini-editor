import React from "react";

const ListItem = ({children}: { children: React.ReactNode }) => {
  // console.log(children);
  return (
    <>
      <li className="py-4 sm:py-0">{children}</li>
    </>
  );
};

export default ListItem;
