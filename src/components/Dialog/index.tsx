import React, { useEffect, useRef } from "react";
import "./dialog.style.css";
interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Dialog({ isOpen, onClose }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    console.log("Deveriamos mostrar o modal?", isOpen);
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <React.Fragment>
      <dialog ref={dialogRef}>
        <button autoFocus onClick={onClose}>
          Close
        </button>
        <p>This modal dialog has a groovy backdrop!</p>
      </dialog>
    </React.Fragment>
  );
}
