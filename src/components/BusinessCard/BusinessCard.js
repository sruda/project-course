import * as React from 'react';
import store from './../../store/store.config';


class BusinessCard extends React.Component{

    constructor(){
        super();
        this.state = {shown: true};
    }

    render(){

        const shown = {
			display: this.state.shown ? "block" : "none"
		};
		
		const hidden = {
			display: this.state.shown ? "none" : "block"
        }

        return(
            <div className='container-ppal'>
            
                <div style={ hidden }  className='columnb'>
                    <button 
                    onClick = {this.props.onSaveEditClick(this.props.user.id)} >Save Edit!</button>
                </div>
            
            <ul>
                <div className='container'>
                    <button onClick={this.props.onClickDelete(this.props.user)}>x</button>
                    <button onClick={this.props.onClickEdit(this.props.user.id)}>Edit</button>    
                    <div className='logo'>
                        <span>Stylepills</span>
                        <img src="http://stylepills.co/static/media/Stylepills-main-short-logo.e188c5a5.svg"
                        alt='logo'></img>
                    </div>
                    <p id='name'>{this.props.user.firstName} {this.props.user.lastName}</p>
                    <p className='title'>First Job Title</p>
                    <p className='title'>Second Job Title</p>
                    <p id='country'>{this.props.user.country}</p>
                    <br/>
                    <p id='address'>{this.props.user.address}</p>
                    <br/>
                    <p id='phoneNumber'>P - {this.props.user.phoneNumber} / M - {this.props.user.phoneNumber} / F - {this.props.user.phoneNumber}</p>
                    <p id='email'>{this.props.user.email}</p> 
                </div>             
            </ul>
        </div>
        )
    }
}

export default BusinessCard;