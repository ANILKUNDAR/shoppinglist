import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/shoppingList';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemModal from './components/Itemmodel';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<AppNavbar />
					<Container>
						<ItemModal />
						<ShoppingList />
					</Container>
				</div>
			</Provider>
		);
	}
}

export default App;
