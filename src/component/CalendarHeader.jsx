
export default class CalendarHeader extends React.Component{
	constructor(){
        super();
        this.handLeftClick = this.handLeftClick.bind(this);
        this.handRightClick = this.handRightClick.bind(this);
	}
    handLeftClick(){
        let month = this.props.month - 1;
        let year  = this.props.year;
        if(month < 1 )
        {
            month = 12;
            year -- ;
        }
      //  this.setState(this.props);
        this.props.updateFilter(year,month);
    };

    handRightClick(){
        let month = this.props.month + 1;
        let year  = this.props.year;
        if(month > 12 )
        {
            month = 1;
            year ++ ;
        }
      //  this.setState(this.props);
        this.props.updateFilter(year,month);
    }
  	render(){
        return  <div id = "calendarHeader">
        	       <p>{this.props.year}年{this.props.month}月</p>
        	       <div className = "leftControl"  onClick = {this.handLeftClick}></div>
        	       <div className = "rightControl" onClick = {this.handRightClick}></div>
                </div>;
    }
}