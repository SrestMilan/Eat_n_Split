import Button from "./Button";
function AddFriendForm() {
  return (
    <form className="form-add-friend">
      <label>👫Friend name</label>
      <input type="text" />
      <label>🌄 Image Url</label>
      <input type="text" alt="friend image" />
      <Button>Add</Button>
    </form>
  );
}

export default AddFriendForm;
