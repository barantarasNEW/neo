import React from 'react';
import { createPortal } from 'react-dom';
import BTSpinner from 'react-bootstrap/Spinner';

const Spinner = () => {
  return (
    <>
      {createPortal((
        <BTSpinner
          animation="border"
          role="status"
          className="position-absolute top-50 start-50"
        >
          <span className="visually-hidden">Loading...</span>
        </BTSpinner>
      ),
        document.getElementById('portal') as HTMLElement
      )}
    </>
  );
}

export default Spinner;