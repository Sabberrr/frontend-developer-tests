import React, { useEffect, FC } from "react";
import User from "./User";
import { userType } from "../../types";
// registered:
// age: 16;
// date: "2005-12-24T00:32:36.931Z";
const Countries: FC<any> = ({ data, toggleDisplay, displayed, gender }) => {
	let countryNode = data[0]["location"]["country"];
	let genderDisplay: string = "";
	console.log(gender);
	Object.keys(gender).forEach((val) => {
		if (gender[val] === true) genderDisplay = val;
	});
	const sortedAndDisplayUsers = function () {
		let sortedUsers = data.sort((a: any, b: any) => {
			return (
				Date.parse(a["registered"]["date"]) -
				Date.parse(b["registered"]["date"])
			);
		});
		return sortedUsers.map((val: any) => {
			if (val.gender === genderDisplay || genderDisplay === "all") {
				return <User userData={val}></User>;
			}
		});
	};
	return (
		<div>
			<button
				onClick={() => {
					toggleDisplay(countryNode);
				}}
			>
				{countryNode}
			</button>

			{displayed[countryNode] === true ? sortedAndDisplayUsers() : ""}
		</div>
	);
};

export default Countries;
