'use client'
import { useState } from "react";
import Link from "next/link";

interface SignInFormProps {
  onSubmit: (email: string, password: string) => void;
}

export default function SignInForm({ onSubmit }: SignInFormProps) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>メールアドレス</label>
      <input
        required
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/>
      <label>パスワード</label>
      <input
        required
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/>
      <button type="submit">ログイン</button>
      <p>
        <Link href={"/"}>
          トップページに戻る
        </Link>
      </p>
    </form>
  );
}
