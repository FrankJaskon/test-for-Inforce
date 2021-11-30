import React from 'react';
import {Provider} from 'react-redux';
import ItemList from './components/item-list';

import './App.css';

import s from './App.module.sass';

function App ({store}) {
	return <React.StrictMode>
		<Provider store={store}>
			<div className={s.testApp}>
				<ItemList />
			</div>
		</Provider>
	</React.StrictMode>
}

export default App;
