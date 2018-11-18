import React from 'react';

class Footer extends React.Component {
    state = {
        adresses: [
	        {id:"1fotter", adress:'Украина, г.Киев, ул. Фрунзе, 30.б/16'},
	        {id:"2fotter", adress:'Украина, г.Ровно, ул.Соборна, 15/34'},
	        {id:"3fotter", adress:'Украина, г.Львов, ул.Центральная, 28/1'}
        ]
    };

    render(){
        return(
            <ul>
                {this.state.adresses.map((iterator) => {
                            return (
	                            <li key = {iterator.id}>{iterator.adress}</li>
                            )
                        }
                    )
                };
            </ul>
        )
    }
}

export default Footer;