import React, { FC } from "react";
import { userType } from "../../types/ApiCallTypes";
const User: FC<any> = ({ userData }) => {
	console.log(userData);
	return (
		<tbody>
			<tr>
				<td>{userData["name"]["first"] + " " + userData["name"]["last"]}</td>
				<td>{userData["gender"]}</td>
				<td>
					{userData["location"]["city"] + ", " + userData["location"]["state"]}
				</td>
				<td>{userData["registered"]["date"]}</td>
			</tr>
		</tbody>
	);
};

export default User;
