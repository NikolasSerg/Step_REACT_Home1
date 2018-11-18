import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header.js'
import Content from './components/content.js'
import Footer from './components/footer.js'
import Aside from "./components/aside";

class Main extends React.Component{
	state = {
		item: null
	};
	render(){
		return(
		    <main>
                <Header />
				<Content />
                <Footer />
            </main>
		)
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));