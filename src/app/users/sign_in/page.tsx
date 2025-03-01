'use client'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import SignInForm from './signInForm';

export default function SignIn() {

  const router = useRouter();

  const handleFormSubmit = async(email: string, password: string) => {
    const response = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    console.log(response)

    if (response && !response.error) {
      router.push("/");
    } else {
      alert(response && response.error || "サインインエラーが発生しました");
    }
  };

  return (
    <div>
      <h1>ログイン</h1>
      <SignInForm onSubmit={handleFormSubmit} />
    </div>
  )
}

