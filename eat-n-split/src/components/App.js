import React, { useState } from "react";
import FriendList from "./FriendList";
import AddFriendForm from "./AddFriendForm";
import Button from "./Button";
import SplitBill from "./SplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showFriend, setShowFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  function handleAddFriend() {
    setShowFriend((show) => !show);
  }

  function handlFriendList(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowFriend(false);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friendList={friends} />
        {showFriend && <AddFriendForm onHandleFriendList={handlFriendList} />}
        <Button onClick={handleAddFriend}>
          {showFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <SplitBill />
    </div>
  );
}
