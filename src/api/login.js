import http from "@/http/http";

export function login(parameter) {
    return http.post('/post', parameter)
}
