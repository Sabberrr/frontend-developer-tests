import React, { useEffect, FC } from "react";
import User from "./User";
import { userType } from "../../types";
import Table from "react-bootstrap/Table";
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
				Date.parse(b["registered"]["date"]) -
				Date.parse(a["registered"]["date"])
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

			{displayed[countryNode] === true ? (
				<Table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Gender</th>
							<th>Location</th>
							<th>RegisterDate</th>
						</tr>
					</thead>
					{sortedAndDisplayUsers()}
				</Table>
			) : (
				""
			)}
		</div>
	);
};

export default Countries;
