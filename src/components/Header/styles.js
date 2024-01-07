import { styled } from 'styled-components';

const StyledContainer = styled.div`
	box-sizing: border-box;
	margin-top: 100px;
	height: 262px;
	width: 327px;
	@media (min-width: 1250px) {
		width: 445px;
		height: 154px;
	}
`;

const StyledTitle = styled.h1`
	width: auto;
	height: 100px;
	color: #512051;
	font-family: League Spartan;
	font-size: 56px;
	font-style: normal;
	font-weight: 700;
	line-height: 48px; /* 85.714% */
	letter-spacing: -2px;
	text-align: center;
	@media (min-width: 1250px) {
		width: 445px;
		height: 154px;
		text-align: start;
	}
`;

const StyledDescription = styled.p`
	width: auto;
	color: #927b91;
	font-family: League Spartan;
	font-size: 19px;
	font-style: normal;
	font-weight: 500;
	line-height: 25px; /* 131.579% */
	letter-spacing: -0.633px;
	text-align: center;
	margin-top: 50px;
	@media (min-width: 1250px) {
		width: 445px;
		height: 154px;
		margin-top: -40px;
		text-align: start;
	}
`;

export { StyledTitle, StyledDescription, StyledContainer };
