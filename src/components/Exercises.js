import React, { useEffect, useState } from 'react';
import  Pagination  from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';

import { exerciseOptions,fetchData } from '../utilites/fetchData';

const Exercises = ({ exercises, setExercises, bodyPart}) => {

  const [currentPage, setCurrentPage] = useState (1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;

  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value) => {
    setCurrentPage(value)

    window.scrollTo({ top: 1800, behavior: 'smooth'})
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if(bodyPart === 'all') {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions);
      } else  {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodypart/${bodyPart}`,
          exerciseOptions);
      }
      setExercises(exercisesData);
    }

    fetchExercisesData()
  }, [bodyPart]);
  return (
    <Box id="exercises"
    sx={{mt: { lg: '110px'}}}
    mt="50px"
    p="20px"
    >
    <Typography variant='h3' mb='46px'>
      Showing results
      </Typography>
      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px'}}} flexWrap='wrap' justifyContent='center'>
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.lenght > 9 && (
          <Pagination 
          color='standard'
          shape='rounded'
          defaultPage={1}
          count={Math.cell(exercises.lenght / exercisesPerPage)}
          page={currentPage}
          onChange={(e) => paginate(e,)}
          size='large'
          />
        )}
      </Stack>
      </Box>
  )
}

export default Exercises