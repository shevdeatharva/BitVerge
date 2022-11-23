import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseNewsurl = 'https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw'

const cryptoNewsHeader = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'da9d9bfabdmsh1b735ac267c3802p13ca61jsn5bd84fc5a770',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }

// const baseNewsurl = 'https://crypto-news-live3.p.rapidapi.com/news';
// const cryptoNewsHeader = {
//     'X-RapidAPI-Key': 'da9d9bfabdmsh1b735ac267c3802p13ca61jsn5bd84fc5a770',
//     'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
// };

// const baseNewsurl= 'https://bing-news-search1.p.rapidapi.com'
// const cryptoNewsHeader = {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Key': 'da9d9bfabdmsh1b735ac267c3802p13ca61jsn5bd84fc5a770',
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  
// };

// const baseNewsurl= 'https://crypto-news-live3.p.rapidapi.com/news'
// const cryptoNewsHeader = {
//     'X-RapidAPI-Key': '0c709df4eemsh6161f6caf2cdc44p132b38jsnd5ad17446c9f',
//     'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
  
// };
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