import Friend from "./Friend";
function FriendList({ friendList, onSelectionFriend, selectFriend }) {
  return (
    <ul>
      {friendList.map((friends) => (
        <Friend
          friends={friends}
          selectFriend={selectFriend}
          key={friends.id}
          selectFriends={onSelectionFriend}
        />
      ))}
    </ul>
  );
}

export default FriendList;
