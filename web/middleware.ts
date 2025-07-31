import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Create route matchers to identify which token type each route should require
const isOAuthAccessible = createRouteMatcher(["/oauth(.*)"]);
const isApiKeyAccessible = createRouteMatcher(["/api(.*)"]);
const isMachineTokenAccessible = createRouteMatcher(["/m2m(.*)"]);
const isUserAccessible = createRouteMatcher(["/user(.*)"]);
const isAccessibleToAnyValidToken = createRouteMatcher(["/any(.*)"]);
const isPublicRoute = createRouteMatcher(["/sign-in(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  // Check if the request matches each route and enforce the corresponding token type
  if (isOAuthAccessible(req)) await auth.protect({ token: "oauth_token" });
  if (isApiKeyAccessible(req)) await auth.protect({ token: "api_key" });
  if (isMachineTokenAccessible(req))
    await auth.protect({ token: "machine_token" });
  if (isUserAccessible(req)) await auth.protect({ token: "session_token" });
  if (isAccessibleToAnyValidToken(req)) await auth.protect({ token: "any" });

  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
