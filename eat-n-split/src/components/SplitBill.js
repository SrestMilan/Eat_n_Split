import { useState } from "react";
import Button from "./Button";
function SplitBill({ selectFriend, onHandleBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const friendExpense = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function formHandle(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;

    onHandleBill(whoIsPaying === "user" ? friendExpense : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={formHandle}>
      <h2>Split A Bill With {selectFriend.name}</h2>
      <label>💰Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🧔Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label>🧑‍🤝‍🧑{selectFriend.name} expense</label>
      <input type="text" disabled value={friendExpense} />
      <label>🤑 Who is paying</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="X">{selectFriend.name}</option>
      </select>

      <Button>Split</Button>
    </form>
  );
}

export default SplitBill;
