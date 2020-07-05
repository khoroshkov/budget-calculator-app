import React from "react";
import { MdSend } from "react-icons/md";

export const ExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">Статья расходов</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="например, оплата коммунальных услуг"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Сумма</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="например, 100 грн"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "Редактировать" : "Записать"}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};
