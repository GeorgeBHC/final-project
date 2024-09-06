import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOptions, fetchData } from '../utilites/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [ExerciseDetail, setExerciseDetail] = useState({});
  const {id} = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'htps://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapid.api.com';

      const exerciseDetail = await fetchData(`${exerciseDbUrl}/exercises/${id}`,exerciseOptions);
      setExerciseDetail(exerciseDetailData)
    }

    fetchExercisesData();
  });

  return (
    <Box>
      <Detail exerciseDetail={} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail