/** @format */

import axios from "axios";
import { GET_PROFILE, LOGIN_API, SIGNUP_API } from "../ApiEndpoints";
import { getTokenFromSessionStorage, saveProfileToSessionStorage, saveTokenToSessionStorage } from "./utils";

export const axiosInstance = axios.create({});
export const apiConnector = (method, url, bodyData, headers, params) => {
	return axiosInstance({
		method: `${method}`,
		url: `${url}`,
		data: bodyData ? bodyData : null,
		headers: headers ? headers : null,
		params: params ? params : null,
	});
};


export const signup = async (data) => {
	try {
		const response = await apiConnector("POST", SIGNUP_API, data);
		console.log("SIGNUP API RESPONSE............", response);

		if (response.error) {
			throw new Error(response.error.message);
		}
		await saveTokenToSessionStorage(response.data.token);
		await getProfile();
	} catch (error) {
		console.log("SIGNUP API ERROR............", error);
		throw error;
	}
};

export const signin = async (data) => {
	try {
		const response = await apiConnector("POST", LOGIN_API, data);
		console.log("LOGIN API RESPONSE............", response);
		if (response.error) {
			throw new Error(response.error.message);
		}
		await saveTokenToSessionStorage(response.data.token);
		await getProfile();
	} catch (error) {
		console.log("LOGIN API ERROR............", error);
		throw error;
	}
};

export const getProfile = async () => {
	try {
		const response = await apiConnector("GET", GET_PROFILE, null, {
			Authorization: `Bearer ${getTokenFromSessionStorage()}`,
		});
		console.log("PROFILE API RESPONSE............", response);
		if (response.error) {
			throw new Error(response.error.message);
		}
		await saveProfileToSessionStorage(response.data.user);
	} catch (error) {
		console.log("PROFILE API ERROR............", error);
		throw error;
	}
}