import { NextResponse } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.PRASHEEL_ACCESS_TOKEN;
    // console.log("middleware");
    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}
