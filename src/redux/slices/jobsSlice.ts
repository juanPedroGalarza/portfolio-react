import { createSlice, Slice } from '@reduxjs/toolkit';
import jobsData, { Job } from '../../features/data/jobsData.js';

export interface JobsState {
  jobs: Array<Job>;
}

export const jobsSlice: Slice<JobsState> = createSlice({
  name: 'jobsData',
  initialState: jobsData,
  reducers: {
    // add reducers on future
  },
});

export default jobsSlice.reducer;
