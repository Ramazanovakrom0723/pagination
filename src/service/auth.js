import http from './config'
const auth = {
    sign_in: (data)=> http.post("/auth/login",data),
    sign_up: (data)=> http.post("/auth/register", data),
    auth_verify: (data)=> http.post("/auth/verify", data),
    forgot_password: (data)=> http.post("/auth/forgot", data),
    update_password: (data)=> http.post("/auth/update-password", data)
}
export default auth