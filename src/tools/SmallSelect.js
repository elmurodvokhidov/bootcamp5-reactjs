import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import { ContextData } from '../context/Context';

export default function SelectSmall() {
    const { category, setCategory } = useContext(ContextData);

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Category</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={category}
                label="Category"
                onChange={handleChange}
            >
                <MenuItem>
                    <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Fruits</MenuItem>
                <MenuItem value={2}>Vegetables</MenuItem>
                <MenuItem value={3}>Tropics</MenuItem>
            </Select>
        </FormControl>
    );
}