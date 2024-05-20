"use client";
import AddNewUser from "@/components/AddNewUser";

import { useState } from "react";

const initialUserData = {
  name: "",
  email: "",
  country: "",
};

export default function Home() {
  const [user, setUser] = useState(initialUserData);

  const handleSave = () => {
    console.log(user);
  };

  return (
    <div className=" min-h-screen m-20">
      <div className=" flex justify-between items-center">
        <h1 className=" text-3xl">User Management</h1>
        <AddNewUser />
      </div>
      <div className=" mt-5 ">User List</div>
    </div>
  );
}
