import { NextRequest, NextResponse } from "next/server";
// This is the custom middleware for demonstration (understanding the idea)
// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL('/new-page', request.url));
// }
  
// import middleware from "next-auth/middleware";
// export default middleware;
export { default } from 'next-auth/middleware'; // equal the lines above in one go



export const config = {
  // matcher: ['/users']     // only execute when hit this endpoint

  // parameter options
  // *: zero or more  - affect current and any endpoint after it
  // +: one or more
  // ?: zero or one
  // matcher: ["/users/:id*"],
  matcher: ["/dashboard/:path*"]
};
