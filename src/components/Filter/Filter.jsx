import PropTypes from 'prop-types';
import { Component } from "react";
import { FilterStyled } from './FilterStyled';


class Filter extends Component {

    handleInputChange = event => {
        this.props.filterContact(event.target.value);
    };

    render(){
        return (
            <FilterStyled>
                <input 
                value={this.props.filter} 
                onChange={this.handleInputChange} 
                type="text" 
                name="search" />
            </FilterStyled>
        )
    }
}

Filter.propTypes = {
    filterContact: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,  
}

export default Filter;