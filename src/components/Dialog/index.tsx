import React, { useRef } from "react";
import "./dialog.styles.css";

export function Dialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <React.Fragment>
      <dialog ref={dialogRef}>
        <button autoFocus onClick={closeDialog}>
          Close
        </button>
        <p>This modal dialog has a groovy backdrop!</p>
      </dialog>
      <button onClick={openDialog}>Show the dialog</button>
    </React.Fragment>
  );
}
