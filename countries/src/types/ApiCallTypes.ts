export interface apiCall {
	results: userType[];
	info: info;
}

export type name = {
	tite: string;
	first: string;
	last: string;
};
export type info = {
	page: number;
	results: number;
	seed: String;
	version: String;
};
export type dob = {
	date: string;
	age: number;
};
export type id = {
	name: string;
	value: string;
};
export type street = {
	name: string;
	number: number;
};
export type coordinates = {
	latitude: string;
	longitude: string;
};
export type timezone = {
	description: string;
	offset: string;
};
export type location = {
	street: street;
	city: string;
	state: string;
	country: string;
	postcode: number;
	coordinates: coordinates;
	timezone: timezone;
};
export type login = {
	uuid: string;
	username: string;
	password: string;
	salt: string;
	md5: string;
	sha256: string;
	sha1: string;
};
export type picture = {
	large: string;
	medium: string;
	thumbnail: string;
};
export type registered = {
	age: number;
	date: string;
};
export interface userType {
	cell: string;
	dob: dob;
	email: string;
	gender: string;
	id: id;
	location: location;
	login: login;
	name: name;
	nat: string;
	phone: string;
	picture: picture;
	registered: registered;
}
