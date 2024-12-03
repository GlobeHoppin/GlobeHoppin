const API_BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL || "http://localhost:8080";
export const EMAIL_NOTIFICATION_ENDPOINT = '/notification/email';
export const SIGNUP_API = API_BASE_URL + "/auth/signup";
export const LOGIN_API = API_BASE_URL + "/auth/signin";
export const REVIEW_GET_POST = API_BASE_URL + "/review/reviews";
export const GET_PROFILE = API_BASE_URL + "/user";
export const ADD_PIN = API_BASE_URL + "/pin";
