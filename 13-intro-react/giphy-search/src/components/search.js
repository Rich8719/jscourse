// components/search.js

import React, {Component} from 'react'
import './search.css'

class Search extends Component{
    //implementing states. The state of the program, mutable, unlike props which are fixed.
    //constructor function is called when component is initialized
    constructor() {
        //make call to parent class' (Component) constructor. 
        //Pass to super(). Need to do this in constructor function before we can use this key word.
        super()
        //define an initial state
        this.state ={
            searchText: null
        }
    }

    handleSubmit = (e) => {
        console.log(e)
        e.preventDefault()
        const key = 'XvPOxKdQreOgBQ9YKlivmoMHS3aQGJnH'
        const searchText = this.state.searchText
        const url = `http://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchText}`

        fetch(url).then(response => {
            return response.json()
        }).then(response => {
            console.log(response)
            // we call the function that was passed into it from the parent
            this.props.updateParentState(response.data)
        })
    }

    handleChange = (e) => {
        const val = e.target.value
        this.setState({
            searchText: val
        })
    }


    render () {
        //hideHomeLink is a prop definied in app.js. We have access to it here
        //commented out as included in more complex definition
        // const hideHomeLink = this.props.hideHomeLink
        // here, we are destructuring the props object. We give buttonClass a default of "normal". 
        // if the component receives buttonClass as a prop, it will override the value.
        const {hideHomeLink, buttonClass = 'normal'} = this.props
        
        return (
            <div className="search">
            {/* have to use ternary operators in jsx. checks if hideHomeLink is true. In this case if true it skips rendering the resule */}
                {!hideHomeLink && 
                    <a className = "home-link" href="/">Home</a>
                }

                <form action ="/" method="post" id="search-form" className = "search-form form" onSubmit={this.handleSubmit}>
                    <input className="input __text" type="text" id="search" name="search"></input>
                    <input className={`input __submit ${buttonClass}`} type="submit" value="search"></input>
                </form>
            </div>
        )
    }
}

export default Search