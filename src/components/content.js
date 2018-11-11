import React from 'react';
import ContentItem from './content/contentItem.js';

class Content extends React.Component {
    state = {
        article: [
            {h2: "Lorem",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
            date: new Date().toLocaleDateString()},
            {h2: "Lorem2",
                text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
                date: new Date(2011, 1, 1).toLocaleDateString()}
        ]
    };

    render(){
        return(
            <section>
                {this.state.article.map((iterator) =>
                        {
                            return (
                                <ContentItem h2 = {iterator.h2} text = {iterator.text} date = {iterator.date} />
                                )
                        }
                    )
                }
            </section>
        )
    }
}

export default Content;