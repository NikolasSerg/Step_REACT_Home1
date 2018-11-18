import React from 'react';
import ContentItem from './content/contentItem.js';
import Aside from './aside.js';
// import JS from '../img/javascript.png';
// import HTML5 from '../img/html5-css3.jpg';


class Content extends React.Component {
	constructor (props) {
	super(props);
	this.handlerClick = this.handlerClick.bind(this);
	this.state = {
		selected: null,
		article: [
			{
				id: 1,
				h2: "Флэнаган – JavaScript – Подробное руководство 6-ое издание",
				text: "Книга, которую необходимо прочитать каждому уважающему себя специалисту по JavaScript. Это уже шестая по счету редакция популярного во всем мире руководства, в которой собрано огромное количество исчерпывающей информации. Кроме чисто теоретических данных о JavaScript, здесь также можно получить массу полезных данных о практическом применении технологии при создании приложений под Web 2.0. Таком образом, это своебразная настольная книга, в которой можно не только найти ответ на любой вопрос , касающийся JavaScript, но и углубить свои знания с помощью практических примеров, приведенных в публикации.",
				date: " 2014 год",
				production: " Питер ",
				// img: {JS}
				img: "http://assets.nnm-club.ws/forum/image.php?link=http://s018.radikal.ru/i527/1704/4f/83238a83e65c.jpg"
				// img: <img src="../src/img/javascript.png" alt="javascript"/>
				// img: <img src="../img/javascript.png" alt="javascript"/>
				// img: <img src="../../img/javascript.png" alt="javascript"/>
			},
			{
				id: 2,
				h2: "Фрейн – HTML5 CSS3 – разработка сайтов для любых браузеров и устройств",
				text: "Сегодня как никогда остро стоит проблема адаптивного веб-дизайна. Все больше планшетных компьютеров, смартфонов и даже телевизоров используется для выхода в Интернет. Разработчикам веб-страниц требуется принимать во внимание огромное разнообразие размеров экранов, а также учитывать особенности соответствующего пользовательского взаимодействия. Адаптивный веб-дизайн позволяет наилучшим образом отобразить содержимое сайтов на экранах устройств, используемых для просмотра. При этом веб-страницы будут хорошо смотреться на дисплеях не только современных устройств, но и тех, что появятся в ближайшее время.",
				date: "2017 год",
                production: "Питер",
                img: "https://simg.marwin.kz/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/migrated/article/19668/28_tn3.jpg"
                // img: <img src="../../img/html5-css3.jpg" alt="html5-css3"/>
                // img: <img src="../img/html5-css3.jpg" alt="html5-css3"/>
                // img: <img src="./img/html5-css3.jpg" alt="html5-css3"/>
                // img: <img src="../src/img/html5-css3.jpg" alt="html5-css3"/>
                // img: {HTML5}
			},

            {
                id: 3,
                h2: "Marijn Haverbeke-Вячеслав Голованов -Выразительный JavaScript: Введение",
                text: "Эта книга на английском языке, но бесплатный перевод можно найти на Хабре. Если я не ошибаюсь, то официально книга в Украине не издавалась, но некоторым энтузиастам удалось сделать замечательный перевод. Здесь отличная вводная часть, интересные задачки для тренировки и информация сугубо по теме. Поэтому, я бы рекомендовал эту книгу всем начинающим. Она читается намного легче, чем “JavaScript. Подробное руководство”, а задания для самопроверки помогают лучше закрепить пройденный материал.",
                date: "2017 год",
                production: "Питер",
                img: "https://images-eu.ssl-images-amazon.com/images/I/51mvaK65SKL.jpg"
            }
		]
	};
}

    render(){
		const select = this.state.selected !== null ? <Aside  h2 = {this.state.selected.h2} /> : <div>nope</div>;

        return(
            <main className="row">
				<section className="col-8">
					<h1>5 лучших книг для начинающих Front-end разработчиков</h1>
					<br/>
					<br/>
                    {this.state.article.map((iterator) =>
                        {
                            return (
								<div>
									<ContentItem key={iterator.id}  h2 = {iterator.h2} text = {iterator.text} date = {iterator.date} production ={iterator.production} img={iterator.img} handlerClick = {this.handlerClick}/>

								</div>
                            )
                        }
                    )
                    }
				</section>
				<aside className="col-4 border border-primary">
                    {select}
				</aside>

            </main>
        )
    }
	handlerClick = (value) => {
		// console.log(e.target);
		// console.log(this);
		// console.log(value);
		this.setState({selected: value});
		console.log(this.state.selected);

		};


}

export default Content;