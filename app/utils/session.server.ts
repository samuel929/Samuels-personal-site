import { createCookieSessionStorage } from "@remix-run/node";
import { createThemeSessionResolver } from "remix-themes";



const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: "__remix-themes",
        path: '/',
        httpOnly: true,
        sameSite: "lax",
        secrets: ['secret'],
        secure: process.env.NODE_ENV === 'production'
    }
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
