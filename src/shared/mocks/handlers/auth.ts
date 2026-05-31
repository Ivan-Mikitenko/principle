import { http, HttpResponse } from "msw";

import type { LoginRequest } from "@shared/mocks/handlers/types.ts";

export const authHandlers = [
    http.post("/api/auth/login", async ({ request }) => {
        const body = (await request.json()) as LoginRequest;

        if (body.email === "289a00@bk.ru" && body.password === "123456") {
            return HttpResponse.json({
                accessToken: "mock-token",
                user: {
                    id: "1",
                    email: "289a00@bk.ru",
                },
            });
        }

        return HttpResponse.json({ message: "Unauthorized" }, { status: 401 });
    }),

    http.get("/api/auth/me", ({ request }) => {
        const auth = request.headers.get("Authorization");

        if (auth !== "Bearer mock-token") {
            return HttpResponse.json(
                { message: "Unauthorized" },
                { status: 401 },
            );
        }

        return HttpResponse.json({
            id: "1",
            email: "admin@test.com",
        });
    }),
];
