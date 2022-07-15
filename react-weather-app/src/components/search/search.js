import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

//dummy component just for tests
const Search = ( {onSearchChange} ) => {
    
    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        
        setSearch(searchData);
        onSearchChange(searchData);

    }

    return(

        <AsyncPaginate
        
            placeholder = "Type the City name to know the Forecast there ..."
            debounceTimeout = {600}
            value = {search}
            onChange = {handleOnChange}
        
        />

    )
};

export default Search;

