import React from 'react';
import Seat from './Seat'

class SeatsInRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            seats: this.props.seats
        }
    }

    render() {
        let i = 0;
        const result = this.state.seats.map( item => {
            if(item.seat === "false") {
                i++;
                return <li key={"empty-"+item.row+i} style={{backgroundColor:"#888"}}></li>   
            }

            if(item.isOccupied === true) {
                return (
                    <li 
					key={item.row+item.seat} 
					style={{backgroundColor:"#ac3838"}}>
					{item.row+item.seat}
                    </li>
                )
            }

            return (
                <Seat 
                    key={item.row+item.seat} 
                    onClick={this.selectSeat}
                    seatNumber={item.row+item.seat}>
                </Seat>
            )
        });

        return result
    }
}

export default SeatsInRow;