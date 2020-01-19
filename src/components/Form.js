import React, {Component} from 'react'

class Form extends Component{
    render() {
        return(
            <form onSubmit={this.props.getWeather} autoComplete={'off'}>
                <div>
                <input type="text" name="city" placeholder="City" />
                <input type="text" name="country" placeholder="Country"/>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form