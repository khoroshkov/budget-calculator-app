import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ExpenseList } from "./components/ExpenseList";
import { ExpenseForm } from "./components/ExpenseForm";
import { Alert } from "./components/Alert";

import "./App.css";

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const totalExpenses = expenses.reduce((acc, current) => {
    return (acc += parseInt(current.amount));
  }, 0);

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });

    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (charge !== "" && amount > 0) {
      if (edit) {
        let newExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(newExpenses);
        setEdit(false);

        handleAlert({
          type: "success",
          text: `Редактирование расходов успешно сохранено`,
        });
      } else {
        const newExpense = {
          id: uuidv4(),
          charge,
          amount,
        };
        setExpenses([...expenses, newExpense]);
        handleAlert({
          type: "success",
          text: "Ваши расходы успешно добавлены",
        });
      }

      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: "Вы не ввели данные о Ваших расходах",
      });
    }
  };

  const clearAllExpenses = () => {
    setExpenses([]);
    handleAlert({
      type: "danger",
      text: "Ваши расходы успешно удалены",
    });
  };

  const handleDeleteExpense = (id) => {
    let deletedItem = expenses.find((item) => (item.id = id));
    let tempExpenses = expenses.filter((item) => item.id !== id);

    setExpenses(tempExpenses);
    handleAlert({
      type: "danger",
      text: `Статья расходов "${deletedItem.charge}" 
      с суммой "-${deletedItem.amount} грн." успешно удалена`,
    });
  };

  const handleEditExpense = (id) => {
    let editedExpense = expenses.find((item) => item.id === id);
    let { charge, amount } = editedExpense;

    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>Калькулятор твоего бюджета</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          handleDeleteExpense={handleDeleteExpense}
          handleEditExpense={handleEditExpense}
          clearAllExpenses={clearAllExpenses}
        />
      </main>
      <h1 className="totalTitle">
        Общая сумма расходов:{" "}
        <span className="total">{totalExpenses} грн.</span>
      </h1>
    </>
  );
}

export default App;
