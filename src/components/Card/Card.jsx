import {
	StyledCardContainer,
	StyledCardDescription,
	StyledCardImg,
	StyledCardTitle,
	StyledCardVerified,
	StyledTitleContainer
} from './styles';

const Card = props => {
	return (
		<StyledCardContainer
			$gridColumn={props.$gridColumn}
			$gridRow={props.$gridRow}
		>
			<StyledTitleContainer>
				<StyledCardImg src={props.img}></StyledCardImg>
				<div>
					<StyledCardTitle>{props.name}</StyledCardTitle>
					<StyledCardVerified>{props.verified}</StyledCardVerified>
				</div>
			</StyledTitleContainer>

			<StyledCardDescription>{props.description}</StyledCardDescription>
		</StyledCardContainer>
	);
};
export default Card;
