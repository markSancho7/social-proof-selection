import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import MediaQueri from './components/MediaQueri/MediaQueri';
import { StyledTotalContainer } from './components/TotalContainer/totalContainer';
import Valorations from './components/Valorations/Valorations';
import { cards } from './constants/cards';

const App = () => {
	return (
		<StyledTotalContainer>
			<MediaQueri>
				<Header></Header>
				<Valorations></Valorations>
			</MediaQueri>
			<Cards>
				{cards.map(card => {
					return <Card key={card.id} {...card}></Card>;
				})}
			</Cards>
		</StyledTotalContainer>
	);
};

export default App;
