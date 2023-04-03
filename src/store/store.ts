import { configureStore } from '@reduxjs/toolkit'
import articlesSlice from './slice/articlesSlice'
// import countriesSlice from '../store/slices/countriesSliceTestTest'



export const store = configureStore({
  reducer: {
    // countriesAll : countriesAllSlice,
    articles : articlesSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch