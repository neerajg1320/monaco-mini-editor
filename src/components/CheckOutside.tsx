import React, { useRef, useEffect, forwardRef } from "react";

interface propTypes {
  onClickOutside: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  // ref: HTMLDivElement
}

const CheckOutSide = forwardRef(
  (props: propTypes, newRef: React.ForwardedRef<HTMLDivElement>) => {
    const componentRef = useRef<HTMLDivElement>(null);
    const { onClickOutside, children } = props;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(e.target as Node) &&
        e.target != (newRef as React.RefObject<HTMLDivElement>).current
      ) {
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
    return <div ref={componentRef}>{children}</div>;
  }
);

export default CheckOutSide;
