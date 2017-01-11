import React, {Component, PropTypes} from 'react';
import './SlideOut.scss';
import {Link} from 'react-router';
import {SidebarMenu} from "config";


export default class SlideOut extends Component {

    render() {

        return (
            <nav>
                <ul>
                    {
                        SidebarMenu.map((item) =>{
                            return <li key={item.url}><Link to={item.url}><p>{item.name}</p><i className={item.icon}></i></Link></li>
                        })
                    }
                </ul>
            </nav>
        );
    }
}
