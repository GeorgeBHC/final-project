import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import { exerciseOptions, fetchData } from "../utilites/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ( searchedExercises, bodyPart, setBodyPart) => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState ([]);
  const [bodyParts, setBodyParts] = useState ([]);
 
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
    
      setBodyParts(['all',bodyPartsData]);
    }

    fetchExercisesData()
  }, )

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

     const searchedExercises = exercisesData.filter(
     (exercise) => exercise.name.toLocaleLowerCase().includes(search)
     || exercise.target.toLocaleLowerCase().includes(search)
     || exercise.equipment.toLocaleLowerCase().includes(search)
     || exercise.bodypart.toLocaleLowerCase().includes(search)
     );

     setSearch('');
     setExercises(searchedExercises)
  }
}

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Great Exercises You <br />
        Should Do
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#E9EDEC",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
          <HorizontalScrollbar  data={bodyParts}
          bodyPart={bodyPart} setBodyPart=
          {setBodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
