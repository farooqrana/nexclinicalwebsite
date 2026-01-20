import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  // Rewrite favicon.ico to an existing asset to avoid 404s.
  if (url.pathname === "/favicon.ico") {
    url.pathname = "/logo.svg"; // served from public/
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}
