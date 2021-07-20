import React, { FC } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Dropdown } from "react-bootstrap";
const GenderFilter: FC<any> = ({ toggleGender }) => {
	return (
		<div style={{ display: "block", width: 700, padding: 30 }}>
			<Dropdown>
				<Dropdown.Toggle variant="success">Filter by Gender</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item
						href="#"
						onClick={() => {
							toggleGender("male");
						}}
					>
						Male
					</Dropdown.Item>
					<Dropdown.Item
						href="#"
						onClick={() => {
							toggleGender("female");
						}}
					>
						Female
					</Dropdown.Item>
					<Dropdown.Item
						href="#"
						onClick={() => {
							toggleGender("all");
						}}
					>
						All
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};
export default GenderFilter;
