import React, { useEffect, useRef } from "react";
import "./dialog.style.css";
import { IconClose } from "../icons";
interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export function Dialog({ isOpen, onClose, children }: DialogProps) {
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
      <dialog ref={dialogRef} className="dialog">
        <div className="close-btn-wrapper">
          <button autoFocus onClick={onClose} className="close-btn">
            <IconClose />
          </button>
        </div>
        {children}
      </dialog>
    </React.Fragment>
  );
}
