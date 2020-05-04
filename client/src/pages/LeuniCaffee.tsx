import React from "react";

// Component
import Header from "../components/Header";
import Chat from "../components/Chat";

function LeuniCaffee() {
  return (
    <div className="Main">
      <Header></Header>

      <div className="Menus">르니카페</div>
      <Chat></Chat>
    </div>
  );
}

export default LeuniCaffee;
