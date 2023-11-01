import React from "react";
import FriendList from "./FriendList";
import AddFriendForm from "./AddFriendForm";
import Button from "./Button";
import SplitBill from "./SplitBill";

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        <AddFriendForm />
        <Button>Add Friend</Button>
      </div>
      <SplitBill />
    </div>
  );
}
