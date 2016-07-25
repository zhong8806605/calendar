import '../main.css'
export default class CalendarBody extends React.Component{
	getMonthdays(){
		var year  = this.props.year;
		var month = this.props.month;
		var temp  = new Date(year,month,0);
		return temp.getDate();
	}
	getFirstDay(){
		var year  = this.props.year;
		var month = this.props.month;
		var temp   = new Date(year,month - 1,1);
		return temp.getDay();
	}
	render(){
		var arry1 = [], arry2 = [];
		var currDays = this.getMonthdays();
		var firstDay = this.getFirstDay();
		var currDate = new Date();
		var currDay  = currDate.getDate();
		var currMonth = currDate.getMonth() + 1;
		var currYear = currDate.getFullYear();

		console.log(currMonth,currYear);
		for(let i=0; i < firstDay; i++)
		{
			arry1[i] = [i];
		}
		for(let i = 0; i < currDays; i++ ){
			arry2[i] = (i+1);
		}

		var node1 = arry1.map((item) => {return <li key ={item}></li>});
		var node2 = arry2.map((item) => {return (item === currDay && currYear === this.props.year && currMonth === this.props.month )?
											 <li className = 'currDay' key={item}>{item}</li> : <li key = {item} >{item}</li>})		
		return<div>
				<div className = 'weekDay'>
					<ul className= 'weekDayList'>
						<li>Sun</li>
						<li>Mon</li>
						<li>Tue</li>
						<li>Wed</li>
						<li>Thu</li>
						<li>Fri</li>
						<li>Sai</li>
					</ul>
				</div>
				<div className = 'calenderDay'>
					<ul className= 'weekDayList'>
						{node1}{node2}
					</ul>					
				</div>
			</div>;
	}
}