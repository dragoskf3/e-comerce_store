import React from "react";
import { useNavigation } from "react-router-dom";

function SubmitBtn({ text }) {
  const { state } = useNavigation();
  const isSubmmiting = state === "submitting";
  return (
    <button
      className="btn btn-primary btn-block"
      type="submit"
      disabled={isSubmmiting}
    >
      {isSubmmiting ? (
        <span className="loading loading-spinner">sending...</span>
      ) : (
        text
      )}
    </button>
  );
}

export default SubmitBtn;
