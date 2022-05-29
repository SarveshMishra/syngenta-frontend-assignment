import React from 'react';
import styled from 'styled-components';

// Styled components to create dynamic circles based on props received from parent
const Circle = styled.div`
	width: 100px;
	height: 100px;
	background-color: ${(props) => (props.color ? `${props.color}` : '#cecece')};
	border-radius: 100%;
	display: ${(props) => (props.activeness === 'not-active' ? 'none' : 'block')};
	cursor: pointer;
`;

export const Balloon = ({ color, activeness, name }) => {
	// color is passed from parent to random color can be passed from parent
	// activeness is passed from parent to determine if the circle is active or not
	// name is passed from parent to distinguish between the different circles
	return (
		<>
			<Circle name={name} color={color} activeness={activeness}></Circle>
		</>
	);
};
