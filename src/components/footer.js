import React from 'react';
import FooterItem from './footer/footerItem';

class Footer extends React.Component {
    state = {
        adresess: [
            'Украина, г.Киев, ул. Фрунзе, 30.б/16',
            'Украина, г.Ровно, ул.Соборна, 15/34',
            'Украина, г.Львов, ул.Центральная, 28/1'
        ]
    };

    render(){
        return(
            <ul>
                {this.state.adresess.map((iterator) => {
                            return (
                                <FooterItem text={iterator}/>
                            )
                        }
                    )
                };
            </ul>
        )
    }
}

export default Footer;