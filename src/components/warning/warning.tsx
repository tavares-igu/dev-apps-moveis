import { useState } from "react";
import "./warning.css";

export function Warning(): JSX.Element {
  const [isOpen, setIsOpen] = useState(true);
  if (isOpen)
    return (
      <div className="warning">
        <p onClick={() => setIsOpen(false)}>
          Attention! As it is academic, this project uses LocalStorage, not
          having database implementation or user authentication. Click the
          warning to close it.
        </p>
      </div>
    );
  return <></>;
}
