import React, { useRef, useEffect } from "react";

interface propTypes {
    onClickOutside: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode
}

const CheckOutSide: React.FC<propTypes> = (props) => {
    const ref = useRef<HTMLDivElement>(null);
  const { onClickOutside, children } = props;

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      onClickOutside(false);
    }
  };
  

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  if (!children) {
    return null;
  }
  return <div ref={ref}>{children}</div>;
};

export default CheckOutSide;
