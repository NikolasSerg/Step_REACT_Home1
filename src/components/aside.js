import React from 'react';
import AsideItem from './aside/asideItem.js';
// import ContentItem from './content/contentItem.js';

class Aside extends React.Component {
    state = {
        article: {
            h2: "null",
            p: "null",
            messege: "null",
        }
    };

    render(){
        return(
            <div>
                {/*{this.state.map((iterator) => {
                    return(
                        <AsideItem h2 = {iterator.article.h2} p = {iterator.article.p} messege = {iterator.messege}/>
                    )

                        }
                    )
                }*/}
                <AsideItem messege = {this.props.messege} />
                <p>LOREM LOREM LOREM LOREM LOREM</p>
            </div>
        )
    }
}

export default Aside;