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
  const [showFriendInput, setShowFriendInput] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectFriend, setSelectedFriend] = useState(null);

  function handleAddFriend() {
    setShowFriendInput((show) => !show);
  }

  function handlFriendList(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowFriendInput(false);
  }
  function handleSelectFriend(friend) {
    setSelectedFriend((currrent) =>
      currrent?.id === friend.id ? null : friend
    );
    setShowFriendInput(false);
  }

  function handleBill(value) {
    console.log(value);
    setFriends(
      friends.map((friend) =>
        friend.id === selectFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friendList={friends}
          selectFriend={selectFriend}
          onSelectionFriend={handleSelectFriend}
        />
        {showFriendInput && (
          <AddFriendForm onHandleFriendList={handlFriendList} />
        )}
        <Button onClick={handleAddFriend}>
          {showFriendInput ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectFriend && (
        <SplitBill selectFriend={selectFriend} onHandleBill={handleBill} />
      )}
    </div>
  );
}
