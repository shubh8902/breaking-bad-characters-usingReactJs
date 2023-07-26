import React, { useEffect, useState } from 'react';
import Character from './Character';
import { Box, Grid } from '@mui/material';
import { fetchData } from '../services/api';


function Characters({text}) {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getData();
    }, [text]);

    const getData = async () => {
        let response = await fetchData(text);setCharacters(response.data);
    };

    return (
        <Box style={{margin:20}}>
            <Grid container spacing={2}>
                {
                    characters.map((character) => (
                        <Grid item xs={3}>
                        <Character character={character} />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Characters;