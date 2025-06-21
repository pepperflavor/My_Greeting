import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;

  const isProtected = req.nextUrl.pathname.startsWith("/main");

  if (!isProtected) {
    return NextResponse.next();
  }

  // 엑세스 토큰 먼저 검증
  if (accessToken) {
    try {
      jwt.verify(accessToken, "your-secret-key");
      return NextResponse.next(); // 엑세스토큰 유효하면 통과
    } catch (error) {
      console.error("Access token verification failed:", error);
    }
  }
  // 엑세스 토큰이 없거나 유효하지 않으면 리프레시 토큰 검증
  if (refreshToken) {
    try {
      const payload = jwt.verify(refreshToken, "your-secret-key");
      const response = NextResponse.next();

      const newAccessToken = jwt.sign(
        { userId: payload.userId },
        process.env.JWT_SECRET,
        { expiresIn: '15m' }
      );
      
    } catch (error) {}
  }
}
