import React, { useState } from "react";

import Cards from "./Cards";

function Home() {
  const [cards, setCards]= useState([
    {
      id:1,
      img:"https://images.unsplash.com/photo-1564540583246-934409427776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmF0aHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      title:"Bathroom Booking",
      text:"Avoid waiting time at the bahroom by booking slots.",
      buttonText:"Book slot",
    },
    {
      id:2,
      img:"https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      title:"Washing Machine Booking",
      text:"Arrive at your booked time to use the washing machine.",
      buttonText:"Book slot",
    },
    {
      id:3,
      img:"https://images.unsplash.com/photo-1528384541731-6606de53ddaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bG9zdCUyMGFuZCUyMGZvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title:"Lost And Found",
      text:"Add entries for lost or found items so that they reach their rightful owners.",
      buttonText:"Lost And Found",
    },
    {
      id:4,
      img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title:"Canteen Ordering",
      text:"Order food available in the night canteen and pick it up when its prepared.",
      buttonText:"Foodie Corner",
    },
  ]);
  return (
    <div style={{ display:"flex", flexWrap:"wrap"}} className="container">
      <Cards cards={cards} />
    </div>
  );
}

export default Home;
