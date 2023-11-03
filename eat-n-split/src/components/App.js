import React, { useState } from "react";
import FriendList from "./FriendList";
import AddFriendForm from "./AddFriendForm";
import Button from "./Button";
import SplitBill from "./SplitBill";

export default function App() {
  const [showFriend, setShowFriend] = useState(false);
  function handleAddFriend() {
    setShowFriend((show) => !show);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        {showFriend && <AddFriendForm />}
        <Button onClick={handleAddFriend}>
          {showFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <SplitBill />
    </div>
  );
}
