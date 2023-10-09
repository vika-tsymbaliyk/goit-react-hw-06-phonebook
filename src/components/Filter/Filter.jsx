import { useDispatch, useSelector } from "react-redux";
import { FilterWrap, FilterLabel } from "./Filter.styled";
import PropTypes from 'prop-types';
import { getFilter } from "redux/selectors";


export const Filter =()=>{


    return(
        <FilterWrap>
            <FilterLabel htmlFor="filter">Find contacts by name
            {/* <input name="filter" type="text" value={filter} placeholder="Search contact"
            onChange={evt => searchContact(evt.target.value)} /> */}
            </FilterLabel>
        </FilterWrap>
    )
}

Filter.propTypes = {
    filter: PropTypes.string ,
    onSearchContact: PropTypes.func.isRequired,
}