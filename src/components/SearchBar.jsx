import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Input }  from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  return (
    <Paper
    component="form"
    onSubmit={() => {}}
    sx={{
        borderRadius: 20,
        border: 'apx solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 }
    }}
    >
        <Input
        className="search-bar"
        placeholder="Search..."
        value=""
        onChange={()=> {}}
        />
        <IconButton type="submit" sx={{p: '10px', color: 'red'}}>
        <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar