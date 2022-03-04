import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
    <div>
      <h3>
        <Link to={"edit/" + id}>{description}</Link>
      </h3>
      <p>
        createdAt - {createdAt} <br /> Amount - {amount}
      </p>
      <hr />
    </div>
  );
};
export default ExpenseListItem;
