import { ReactNode, useState } from "react";

export default function Box({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setOpen((open) => !open)}>
        {open ? "–" : "+"}
      </button>
      {open && children}
    </div>
  );
}
