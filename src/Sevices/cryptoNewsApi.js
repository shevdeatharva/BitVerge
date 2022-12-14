import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseNewsurl = 'https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw'

const cryptoNewsHeader = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'da9d9bfabdmsh1b735ac267c3802p13ca61jsn5bd84fc5a770',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }


const createNewsRequest = (url) => ({ url, headers: cryptoNewsHeader });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseNewsurl }),
  endpoints: (builder) => ({
    GetNewsCryptos: builder.query({
      query: ({newsCategory, count}) => createNewsRequest(baseNewsurl, '/', newsCategory, '/', count),

    })
  })
})

export const {useGetNewsCryptosQuery,}= cryptoNewsApi;