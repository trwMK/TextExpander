import React, { useState } from "react";

export default function TextExpander({
  children,
  collapsedNumWords = 20,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonBackgroundColor = "blue",
  buttonColor = "#fff",
  expanded = false,
  className = ""
}) {
  const [expanText, setExpanText] = useState(expanded);

  const words = children.split(" ");
  const collapseText = words.slice(0, collapsedNumWords).join(" ");

  return (
    <div className={className}>
      <p>{expanText ? children : collapseText}</p>
      <button
        style={{ backgroundColor: buttonBackgroundColor, color: buttonColor }}
        onClick={() => setExpanText(!expanText)}
      >
        {expanText ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
