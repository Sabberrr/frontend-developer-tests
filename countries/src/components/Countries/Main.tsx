import React, { useState, useEffect, FC, ReactNode } from "react";
import Countries from "./Countries";
import GenderFilter from "./genderFilter";
import { userCountriesAPI } from "../../api/userCall";
//types
import { userType } from "../../types/";
import { countriesObjType, countriesToggleType, genderType } from "../../types";
export default function Main() {
	const [data, setData] = useState<userType[]>([]);
	const [displayed, setCountryDisplay] = useState<countriesToggleType>({});
	const [gender, setGender] = useState<genderType>({
		male: false,
		female: false,
		all: true,
	});

	async function apiCall() {
		const apiData = await userCountriesAPI();
		// console.log(apiData.results);
		setData(apiData.results);
	}
	function toggleGender(gen: string) {
		let genderObj: genderType = gender;
		Object.keys(genderObj).forEach((val) => {
			genderObj[val] = false;
		});
		genderObj[gen] = true;
		setGender({ ...genderObj });
	}
	const toggleDisplay = function (country: string) {
		let obj: countriesToggleType = displayed;
		if (!obj[country]) obj[country] = true;
		Object.keys(obj).forEach((val) => {
			if (val !== country) obj[val] = false;
		});
		setCountryDisplay({ ...obj });
	};
	const remappingCountries = function () {
		const obj: countriesObjType = {};

		data.forEach((val) => {
			if (!obj[val["location"]["country"]]) {
				obj[val["location"]["country"]] = [];
			}
			obj[val["location"]["country"]].push(val);
		});

		let sorted = Object.keys(obj).sort((a, b) => {
			return obj[b].length - obj[a].length;
		});

		return sorted.map((val) => {
			console.log(obj[val]);
			return (
				<Countries
					data={obj[val]}
					toggleDisplay={toggleDisplay}
					gender={gender}
					displayed={displayed}
				></Countries>
			);
		});
	};
	useEffect(() => {
		apiCall();
	}, []);

	return (
		<div>
			<GenderFilter toggleGender={toggleGender}></GenderFilter>
			{remappingCountries()}
		</div>
	);
}
