import Button from "./Button";
function SplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split A Bill With X</h2>
      <label>💰Bill Value</label>
      <input type="text" />
      <label>🧔Your expense</label>
      <input type="text" />
      <label>🧑‍🤝‍🧑X's expense</label>
      <input type="text" disabled />
      <label>🤑 Who is paying</label>
      <select>
        <option value="user">You</option>
        <option value="X">Clark</option>
      </select>

      <Button>Split</Button>
    </form>
  );
}

export default SplitBill;
