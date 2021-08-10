import React, {useRef} from 'react'

export const Searchbar = (props) => {
    console.log(props)
    const inputEl = useRef("");
    const getSearchTerm = () =>{
        props.searchKeyword(inputEl.current.value)
    };

   
    
    return (
        <div >
            <div class="row height d-flex justify-content-center align-items-center box-design">
        <div class="col-md-6 ">
            <div class="form shadow"> 
            <i class="fa fa-search"></i> 
            <input type="text" 
            class="form-control form-input box-design" 
            placeholder="Search" 
            ref ={inputEl}
            value={props.term} 
            onChange={getSearchTerm}/> 
            <span class="left-pan">
            <i class="fa fa-globe">
            </i></span> 
            </div>
        </div>
    </div> 
        </div>
    )
}
