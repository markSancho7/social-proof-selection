import { styled } from 'styled-components';

const StyledContainer = styled.div`
	box-sizing: border-box;
	margin-top: 100px;
	height: 262px;
	width: 374px;
`;

const StyledTitle = styled.h1`
	width: 445px;
	height: 100px;
	color: #512051;
	font-family: League Spartan;
	font-size: 56px;
	font-style: normal;
	font-weight: 700;
	line-height: 48px; /* 85.714% */
	letter-spacing: -2px;
	text-align: center;
`;

const StyledDescription = styled.p`
	color: #927b91;
	font-family: League Spartan;
	font-size: 19px;
	font-style: normal;
	font-weight: 500;
	line-height: 25px; /* 131.579% */
	letter-spacing: -0.633px;
	text-align: center;
`;

export { StyledTitle, StyledDescription, StyledContainer };
