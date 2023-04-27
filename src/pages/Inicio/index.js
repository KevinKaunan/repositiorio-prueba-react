import Header from "components/Header";
import Item from "components/Item";
import React from "react";
import "App.css";

export default function Inicio() {
  let title = "series";
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className='App_main'>
        <div>
          <Item title={"Series"}></Item>
          <Item title={"Movies"}></Item>
        </div>
      </div>
    </>
  );
}
