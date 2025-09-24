import { createPortal } from "react-dom";
import styles from "./Popover.module.css";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const PopoverContext = createContext<any>({});
const Popover = ({ children, className }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const positionPopover = () => {
    if (contentRef.current && buttonRef.current) {
      const { top, left, width, height } =
        buttonRef.current.getBoundingClientRect();
      const wHeight = window.innerHeight;
      const wWidth = window.innerWidth;
      const content = contentRef.current;
      content.style.zIndex = "1000";
      content.style.left = `${left}px`;
      content.style.position = "absolute";
      content.style.top = `${top + height + 10}px`;

      content.style.top = `${top + height + 10}px`;
      content.style.left = `${left}px`;
      // Check for vertical overflow and adjust position accordingly
      if (top + height + content.offsetHeight > wHeight) {
        content.style.top = `${top - content.offsetHeight - 10}px`; // Move popover above the button
      }
      const isRightHalf = left + width / 2 > wWidth / 2;
      // Check for horizontal overflow (left and right positioning)
      if (isRightHalf) {
        // Always open to left if button is in right half
        content.style.left = `${left - content.offsetWidth + width}px`;
      } else {
        // Always open to right if button is in left half
        content.style.left = `${left}px`;
      }
      // if (left + width + content.offsetWidth > wWidth) {
      //     content.style.left = `${left - content.offsetWidth + width}px`; // Adjust to the left
      // } else if (left < 0) {
      //     content.style.left = `${left + width}px`; // Adjust to the right
      // }
    }
  };

  const togglePopover = (_event: React.MouseEvent<HTMLElement>) => {
    const newValue = !isOpen;
    setIsOpen(newValue);
    if (newValue) {
      positionPopover();
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Close popover if the click is outside the popover or button
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    // Add event listeners when the popover is open
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscapeKey);
    }

    // Clean up event listeners when the popover is closed
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  const buttonRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);

  return (
    <PopoverContext.Provider
      value={{ contentRef, buttonRef, isOpen, togglePopover }}
    >
      <div className={`${styles.popover} ${className}`}>{children}</div>
    </PopoverContext.Provider>
  );
};

const Action = ({ label, node, children }: any) => {
  const { togglePopover, buttonRef } = useContext(PopoverContext);
  if (node) {
    return (
      <button
        onClick={togglePopover}
        className={`${styles.action}`}
        ref={buttonRef}
      >
        {node}
      </button>
    );
  }
  if (children) {
    return (
      <button
        onClick={togglePopover}
        className={`${styles.action}`}
        ref={buttonRef}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={togglePopover}
      className={`${styles.action}`}
      ref={buttonRef}
    >
      {label}
    </button>
  );
};

const Content = ({ children }: any) => {
  const { isOpen, contentRef } = useContext(PopoverContext);
  const className = `${styles.content} ${isOpen ? styles.open : styles.closed}`;
  return createPortal(
    <div ref={contentRef} className={className}>
      {children}
    </div>,
    document.body
  );
};

Popover.Action = Action;
Popover.Content = Content;

export default Popover;
