import { createSlice, createAsyncThunk, PayloadAction, createAction } from "@reduxjs/toolkit";
import articlesAPI from '../../services/articlesAPI';

const initialState = {
    articles: []
}

export const getArticlesAll = createAsyncThunk('articles/getArticlesAll', async () => {
    try {
        const response = await articlesAPI.getArticles();
        return response.data.articles
    } catch (error) {

    }
})
const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getArticlesAll.pending, (state) => { })
            .addCase(getArticlesAll.fulfilled, (state, action) => {
                state.articles = action.payload;
            })
            .addCase(getArticlesAll.rejected, (state, action) => { })
    },
})

export default articlesSlice.reducer