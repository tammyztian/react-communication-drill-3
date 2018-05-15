import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm:''
        }
    }

    render() {

        const search = this.state.searchTerm;

        const fields = ["name", "actor", "description"]

        const characters = this.props.characters.filter(item => {
             for (let field of fields) {
                if (item[field].toLowerCase().includes(search)){
                    return true
                }  
            } return false
            // if (item.name.toLowerCase().includes(search) || item.actor.toLowerCase().includes(search) || item.description.toLowerCase().includes(search)) {
            //     return true 
            // } return false
        })


        return (
            <div className="live-search">
                <SearchForm onChange={(value) => this.setState({searchTerm: value})}/>
                <CharacterCount count={characters.length} />
                <CharacterList characters={characters} />
            </div>
        );
    }
}
