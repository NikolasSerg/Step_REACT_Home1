import React from 'react';
import ContentItem from './content/contentItem.js';
import Aside from './aside.js';

class Content extends React.Component {
	constructor (props) {
	super(props);
	this.handlerClick = this.handlerClick.bind(this);
	this.state = {
		selected: null,
		article: [
			{
				id: 1,
				h2: "Lorem",
				text: "Хотите программировать действительно быстро?C# — это \n" +
				"мощный язык программирования. БлагодаряVisual Studioвам \n" +
				"не потребуется писать непонятный код, чтобы заставить кнопку рабо-тать. Вместо того чтобы запоминать параметры метода для имении \n" +
				"для ярлыкакнопки, вы сможете создать действительно классное \n" +
				"приложение. Звучит заманчиво? Тогда переверните страницу и при-ступим к делу.",
				publishing: "ПИТЕР",
				date: "2014",
				typeBook: "Книги для новичков",
				description: "Содержит упражнения. Рекомендуется многими как хорошая книга для начинающих.",
				img: <img src="../../img/C%23.jpg" alt=""/>
			},
			{
				id: 2,
				h2: "Lorem2",
				text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
				date: new Date(2011, 1, 1).toLocaleDateString(),
				press: false
			}
		]
	};
}

    render(){
		const select = this.state.selected !== null ? <Aside  h2 = {this.state.selected.h2} /> : <div>nope</div>;

        return(
            <section>
                {this.state.article.map((iterator) =>
                        {
                            return (
                            	<div>
	                                <ContentItem  key={iterator.id}  h2 = {iterator.h2} text = {iterator.text} date = {iterator.date} press ={iterator.press} handlerClick = {this.handlerClick}/>

	                            </div>
                                )
                        }
                    )
                }
	            {select}
            </section>
        )
    }
	handlerClick = (value) => {
		// console.log(e.target);
		console.log(this);
		console.log(value);
		this.setState({selected: value});
		console.log(this.state.selected);

		};
    // componentDidUpdate(){
	 //    console.log(this.state.article[0].press + 'componentDidUpdate');
	 //    console.log(this.state.article[1].press + 'componentDidUpdate');
    // }


}

export default Content;