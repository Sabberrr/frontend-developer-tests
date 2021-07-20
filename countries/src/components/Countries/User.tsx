import React, { FC } from "react";
import { userType } from "../../types/ApiCallTypes";
const User: FC<any> = ({ userData }) => {
	console.log(userData);
	return (
		<div>
			<div>{userData["name"]["first"] + userData["name"]["last"]}</div>
			<div>{userData["gender"]}</div>
			<div>
				{userData["location"]["city"] + ", " + userData["location"]["state"]}
			</div>
			<div>{userData["registered"]["date"]}</div>
		</div>
	);
};

export default User;
