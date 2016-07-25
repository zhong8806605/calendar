import CalendarHeader from './CalendarHeader';
import Caledarbody from './CalendarBody';
import '../main.css';
import React from 'react';
import ReactDOM from 'react-dom';

export default class CalendarControl extends React.Component{
	constructor(){
		super();
		var newDate =  new Date();
        this.state = {
             year : newDate.getFullYear(),
            month : newDate.getMonth()+1
        };		
	}
	handleFilterUpdate(fileterYear,filterMonth) {
		this.setState({
			year:fileterYear,
			month:filterMonth
		});
	}
	render(){
		return <div id = 'calendarControl'>
				<CalendarHeader
					year = {this.state.year}
					month = {this.state.month}
					updateFilter = {this.handleFilterUpdate.bind(this)}
				/>
				<Caledarbody
					year = {this.state.year}
					month = {this.state.month}
				/>			
			</div>;
	}
}