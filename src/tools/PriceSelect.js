import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import { ContextData } from '../context/Context';

export default function PriceSelect() {
    const { price, setPrice } = useContext(ContextData);

    const handleChange = (event) => {
        setPrice(event.target.value);
        console.log(price);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Price</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={price}
                label="Price"
                onChange={handleChange}
            >
                <MenuItem value={'0-0'}><i>All</i></MenuItem>
                <MenuItem value={'0-10'}>0-10</MenuItem>
                <MenuItem value={'10-20'}>10-20</MenuItem>
                <MenuItem value={'20-30'}>20-30</MenuItem>
            </Select>
        </FormControl>
    );
}