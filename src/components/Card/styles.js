import { styled } from 'styled-components';

const StyledCardContainer = styled.div`
	box-sizing: border-box;
	padding: 30px;
	width: 327px;
	height: 234px;
	border-radius: 8px;
	background: #512051;
	margin-bottom: 20px;
	margin-top: 20px;
	grid-column: ${props => props.$gridColumn};
	grid-row: ${props => props.$gridRow};
`;
const StyledTitleContainer = styled.div`
	display: flex;
`;

const StyledCardImg = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 40px;
`;

const StyledCardTitle = styled.h3`
	color: #fff;
	margin: 0px;
	margin-left: 30px;
	font-family: League Spartan;
	font-size: 17px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;

const StyledCardVerified = styled.h4`
	color: #ee69a4;
	margin: 0px;
	margin-left: 30px;
	margin-top: 10px;
	font-family: League Spartan;
	font-size: 17px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;

const StyledCardDescription = styled.p`
	color: #fff;
	margin-left: auto;
	margin-right: auto;
	font-family: League Spartan;
	font-size: 17px;
	font-style: normal;
	font-weight: 500;
	line-height: 22px; /* 129.412% */
	letter-spacing: -0.304px;
	width: 263px;
`;

export {
	StyledCardContainer,
	StyledCardImg,
	StyledCardTitle,
	StyledCardVerified,
	StyledCardDescription,
	StyledTitleContainer
};
