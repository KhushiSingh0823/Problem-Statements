import React, { useState, useEffect } from "react";

export default function TypewriterText({ texts, typingSpeed = 120, pause = 1000 }) {
  const [index, setIndex] = useState(0); // current phrase
  const [subIndex, setSubIndex] = useState(0); // current character
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const currentText = texts[index];

    if (!isDeleting && subIndex < currentText.length) {
      // typing
      timeout = setTimeout(() => setSubIndex(subIndex + 1), typingSpeed);
    } else if (isDeleting && subIndex > 0) {
      // deleting
      timeout = setTimeout(() => setSubIndex(subIndex - 1), typingSpeed / 2);
    } else if (!isDeleting && subIndex === currentText.length) {
      // pause at end
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && subIndex === 0) {
      // move to next phrase
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, texts, typingSpeed, pause]);

  return <span className="typewriter">{texts[index].substring(0, subIndex)}</span>;
}
