import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

export const ExpenseItem = ({
  expense,
  handleDeleteExpense,
  handleEditExpense,
}) => {
  const { id, charge, amount } = expense;

  return (
    <li className="item" key={id}>
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">-{amount} грн.</span>
      </div>
      <div>
        <button
          className="edit-btn"
          aria-label="edit button"
          onClick={() => handleEditExpense(id)}
        >
          <MdEdit />
        </button>
        <button
          className="clear-btn"
          aria-label="delete button"
          onClick={() => handleDeleteExpense(id)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};
