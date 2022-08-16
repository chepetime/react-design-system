import React from "react";

interface iProps {
  children: React.ReactNode;
}

export default function Wrapper({ children }: iProps) {
  return (
    <div className="Wrapper" style={{ padding: "0 2rem", margin: "0 auto" }}>
      {children}
    </div>
  );
}
