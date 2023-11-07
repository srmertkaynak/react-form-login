import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const clickHandler = () => {
    const body = {
      username: username,
      password: password,
    };

    console.log(body);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Kullanıcı Adı"
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Şifre"
        />
      </div>
      <div>
        <button onClick={clickHandler}>Giriş Yap</button>
      </div>
    </div>
  );
};

export default LoginForm;
