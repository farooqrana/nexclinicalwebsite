import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  // Rewrite favicon.ico to an existing asset to avoid 404s.
  if (url.pathname === "/favicon.ico") {
    url.pathname = "/logo.svg"; // served from public/
    return NextResponse.rewrite(url);
  }
  // Handle legacy service URL
  if (url.pathname === "/services/authorization-verification") {
    url.pathname = "/services/authorization";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
