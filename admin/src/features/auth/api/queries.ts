import { useMutation } from "@tanstack/react-query";
import API from "./api";

export const queries = {
    useLogin: () => useMutation(API.login),
    useSignup: () => useMutation(API.signup),
};
