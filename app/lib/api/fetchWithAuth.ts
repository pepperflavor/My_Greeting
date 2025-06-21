// 인증 필요한 요청
// accessToken 만료시 자동 재시도

export async function fetchWithAuth(
  input: RequestInfo,
  init?: RequestInit
): Promise<Response> {
  const res = await fetch(input, {
    ...init,
    credentials: "include", // 쿠키를 포함하여 요청
  });

  if (res.status !== 401) {
    return res;
  }

  // 1차 요청 401이면 access token 만료면 리프레시 재발급
  const refreshRes = await fetch("/auth/refresh", {
    method: "POST",
    credentials: "include", // 쿠키를 포함하여 요청
  });

  // 재발급 성공하면 원래 요청 재시도 해줌
  if (refreshRes.ok) {
    return await fetch(input, {
      ...init,
      credentials: "include",
    });
  }

  // 재발급 실패-> 로그아웃
  await fetch("/auth/logout", {
    method: "POST",
    credentials: "include",
  });

  window.location.href = "/"; // 홈으로 리다이렉트
  throw new Error("Unauthorized, please log in again.");
}
