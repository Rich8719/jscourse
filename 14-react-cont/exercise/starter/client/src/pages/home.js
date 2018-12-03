import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Search from '../components/search'
import {getSearchResults} from '../api'

class Home extends Component {
    constructor(){
        super()

        this.state = {
            searchResults: []
        }
    }

    componentDidMount(){
        getSearchResults().then(result => {
            this.setState({
                searchResults: result
            })
        })
    }


    render() {
        return (
            <div className="page home">
                <Search hideHomeLink={true}
                    buttonClass="__large"
                />

                <ul className="search-list">
                    {this.state.searchResults.map(result =>{
                        return (
                            <li className = "js-search-results"
                                key = {result.id}
                                >
                                <Link to = {`/${result.text}`}>
                                    {result.text} - {result.date}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Home