import React from 'react'
import {Link} from 'react-router-dom'
import GifList from '../components/list'
import {searchGifs} from '../api'

class Result extends React.Component {
    constructor(){
        super()

        this.state = {
            gifs: []
        }
    }

    componentDidMount(){
        searchGifs(this.props.match.params.searchText).then(result => {
            this.setState({
                gifs: result
            })
        })
    }


    render() {
        console.log(this.state)
        return (
            <div className= "page results">
                <Link to="/">Home</Link>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}

export default Result