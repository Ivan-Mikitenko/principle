import { baseApi } from "@shared/api/base-api";
import type {
    LoginRequest,
    LoginResponse,
} from "@shared/mocks/handlers/types.ts";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (body) => ({
                url: "/auth/login",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useLoginMutation } = authApi;
