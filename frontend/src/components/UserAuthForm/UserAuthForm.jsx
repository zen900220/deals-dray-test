import React from "react";
import "./UserAuthForm.css";

const UserAuthForm = ({ type }) => {
  const label = type[0].toUpperCase() + type.substring(1);
  return (
    <main className="user-auth-form night-background">
      <form>
        <h1>{label}</h1>
        <input type="text" name="username" placeholder="Username" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">{label}</button>
      </form>
    </main>
  );
};

export default UserAuthForm;
