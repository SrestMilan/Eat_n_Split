import Button from "./Button";
function Friend({ friends }) {
  return (
    <li>
      <img src={friends.image} alt={friends.name} />
      <h3>{friends.name}</h3>
      {friends.balance < 0 && (
        <p className="red">
          You owe {friends.name}
          {Math.abs(friends.balance)}£
        </p>
      )}
      {friends.balance > 0 && (
        <p className="green">
          {friends.name} owe me
          {Math.abs(friends.balance)}£
        </p>
      )}
      {friends.balance === 0 && (
        <p>
          You and {friends.name}
          are even
        </p>
      )}
      <Button>Select</Button>
    </li>
  );
}

export default Friend;
