import { styled } from 'styled-components';
const StyledTotalContainerValoration = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 1250px) {
		margin-top: 170px;
		margin-left: 100px;
	}
`;

const StyledContainerValorations = styled.div`
	display: block;
	align-items: center;
	border-radius: 8px;
	background: #f7f2f7;
	width: 327px;
	height: 78px;
	text-align: center;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 10px;
	@media (min-width: 1250px) {
		width: 445px;
		height: 70px;
		flex-shrink: 0;
		position: absolute;
		left: ${props => props.$moveLeft + 'px'};
		top: ${props => props.$moveTop + 'px'};
	}
`;

const StyledImgValorations = styled.img`
	height: 20px;
	width: 20px;
	margin-top: 13px;
	margin-left: 10px;
	margin-bottom: 5px;
`;

const StyledTitle = styled.h3`
	color: #512051;
	font-family: League Spartan;
	font-size: 17px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	margin: 0px;
`;

export {
	StyledTitle,
	StyledContainerValorations,
	StyledImgValorations,
	StyledTotalContainerValoration
};
