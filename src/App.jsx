import Header from './components/Header/Header';
import { StyledTotalContainer } from './components/TotalContainer/totalContainer';
import Valorations from './components/Valorations/Valorations';

const App = () => {
	return (
		<StyledTotalContainer>
			<Header></Header>
			<Valorations></Valorations>
		</StyledTotalContainer>
	);
};

export default App;
