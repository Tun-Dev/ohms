import * as React from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
  className?: string;
  size?: "large" | "small" | "medium" | "largeNBR" | "smallNBR";
  color: "yellow" | "grey" | "blue" | "transparent";
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  size,
  color,
  onClick,
  type,
}) => {
  return (
    <button
      type={type}
      onClick={(e) => {
        // e.preventDefault();
        onClick();
      }}
      className={`${styles.btn} ${size ? styles[size] : ""} ${
        color ? styles[color] : ""
      } ${className} `}
    >
      {children}
    </button>
  );
};

export { Button };
