import { styled } from 'styled-components';

const StyledCard = styled.div`
	@media (min-width: 1250px) {
		display: grid;
		grid-template-columns: repeat(3, 350px);
		grid-template-rows: repeat(3, 10px);
		gap: 20px;
	}
`;
export { StyledCard };
