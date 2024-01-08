import {
	StyledContainerValorations,
	StyledImgValorations,
	StyledTitle,
	StyledTotalContainerValoration
} from './styles';

const Valorations = props => {
	return (
		<StyledTotalContainerValoration>
			<StyledContainerValorations $moveLeft={600} $moveTop={190}>
				<StyledImgValorations src='./public/images 3/icon-star.svg' alt='' />
				<StyledImgValorations src='./public/images 3/icon-star.svg' alt='' />
				<StyledImgValorations src='./public/images 3/icon-star.svg' alt='' />
				<StyledImgValorations src='./public/images 3/icon-star.svg' alt='' />
				<StyledImgValorations src='./public/images 3/icon-star.svg' alt='' />
				<StyledTitle>Rated 5 Stars in Reviews</StyledTitle>
			</StyledContainerValorations>
			<StyledContainerValorations $moveLeft={640} $moveTop={280}>
				<StyledImgValorations src='./public/images 3/icon-star.svg' alt='' />
				<StyledImgValorations src='./public/images 3/icon-star.svg' alt='' />
				<StyledImgValorations src='./public/images 3/icon-star.svg' alt='' />
				<StyledImgValorations src='./public/images 3/icon-star.svg' alt='' />
				<StyledImgValorations src='./public/images 3/icon-star.svg' alt='' />
				<StyledTitle>Rated 5 Stars in Report Guru</StyledTitle>
			</StyledContainerValorations>
			<StyledContainerValorations $moveLeft={680} $moveTop={370}>
				<StyledImgValorations src='./public/images 3/icon-star.svg' alt='' />
				<StyledImgValorations src='./public/images 3/icon-star.svg' alt='' />
				<StyledImgValorations src='./public/images 3/icon-star.svg' alt='' />
				<StyledImgValorations src='./public/images 3/icon-star.svg' alt='' />
				<StyledImgValorations src='./public/images 3/icon-star.svg' alt='' />
				<StyledTitle>Rated 5 Stars in BestTech</StyledTitle>
			</StyledContainerValorations>
		</StyledTotalContainerValoration>
	);
};
export default Valorations;
