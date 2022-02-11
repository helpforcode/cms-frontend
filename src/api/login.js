import http from "@/http/http";

export function login(parameter) {
    return http.post('/admin/user/login', parameter)
}
