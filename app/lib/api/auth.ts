// 로그인, 회원 가입, 회원인증 API

import { useRouter } from "next/router";

export type LoginPayload = {
  emial: string;
  password: string;
};

export async function login(
  payload: LoginPayload,
  router: ReturnType<typeof useRouter>
) {
  const response = await fetch("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    credentials: "include", // 쿠키를 포함하여 요청
  });

  if (response.ok) {
    router.push("/"); // 로그인 성공 후 홈으로 리다이렉트
    return response.ok;
  }
}
