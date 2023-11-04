import Friend from "./Friend";
function FriendList({ friendList }) {
  return (
    <ul>
      {friendList.map((friends) => (
        <Friend friends={friends} key={friends.id} />
      ))}
    </ul>
  );
}

export default FriendList;
