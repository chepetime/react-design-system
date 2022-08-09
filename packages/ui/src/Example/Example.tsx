import React, { useState } from "react";

export function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <p>Enabled: {isOpen ? "true" : "false"}</p>
      <button onClick={() => setIsOpen((current) => !current)}>Toggle</button>
    </div>
  );
}
