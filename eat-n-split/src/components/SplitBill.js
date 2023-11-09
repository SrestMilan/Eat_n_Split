import Button from "./Button";
function SplitBill({ selectFriend }) {
  return (
    <form className="form-split-bill">
      <h2>Split A Bill With {selectFriend.name}</h2>
      <label>💰Bill Value</label>
      <input type="text" />
      <label>🧔Your expense</label>
      <input type="text" />
      <label>🧑‍🤝‍🧑{selectFriend.name} expense</label>
      <input type="text" disabled />
      <label>🤑 Who is paying</label>
      <select>
        <option value="user">You</option>
        <option value="X">{selectFriend.name}</option>
      </select>

      <Button>Split</Button>
    </form>
  );
}

export default SplitBill;
