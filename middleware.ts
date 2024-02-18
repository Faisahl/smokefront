import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const verified = req.cookies.get("isAuth");

  if (verified?.value !== "true" && req.url.includes("/checkout")) {
    return NextResponse.redirect("http://localhost:3000");
  }
}
