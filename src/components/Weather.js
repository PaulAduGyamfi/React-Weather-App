import React, {Component} from 'react'

class Weather extends Component{
    render(){
        return(
            <div>
                {this.props.error && <p>{this.props.error}</p>}
                <span className="location">
                    {this.props.city && this.props.country && <p>{this.props.city}, {this.props.country}</p>}
                    </span>

                <span className="degrees" style={{backgroundColor: this.props.city && this.props.country ? '#11517331' : '#022c43'}}>
                    {this.props.temperature && <p>Temperature: {this.props.temperature} °F</p>}
                    {this.props.feels_like && <p>Feels Like: {this.props.feels_like} °F</p>}
                </span>

                {this.props.description && <p>Description: {this.props.description}</p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity}%</p>}
                
            </div>
        )
    }
}

export default Weather