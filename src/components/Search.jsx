
// get value of search 
// loop through data and check if search value is in data
// if yes display individual messages
// if not hide messages
const Search = (props) => {

//change state of search input according to search value
   const handleInputChange = (event) => {
         console.log(event.target.value);
         props.setSearchValue(event.target.value);
         
   }

   return (
       <>
            <div className="search">
                <input type="text" placeholder="Search" onChange={handleInputChange} />
            </div>
       </>
   )
}

export default Search;