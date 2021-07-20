import { apiCall } from "../types";

export const userCountriesAPI = async function (): Promise<apiCall> {
	const response = await fetch("https://randomuser.me/api/?results=100");
	const data = await response.json();
	return data;
};
