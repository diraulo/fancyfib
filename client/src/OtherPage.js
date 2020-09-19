import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      Nothing to see here{" "}
      <span role="img" aria-label="stuck-tongue-out">
        😜
      </span>
      <Link to="/">Go back home</Link>
    </div>
  );
};
