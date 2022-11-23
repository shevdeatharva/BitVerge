import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react' 
 

// const baseurl = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
// // const baseurl="https://api.coinranking.com/v2/coins"
// const cryptoApiHeaders = {
//   'X-RapidAPI-Key': 'da9d9bfabdmsh1b735ac267c3802p13ca61jsn5bd84fc5a770',
//   'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
// };

// // 'x-access-token': 'coinrankingd9bf7b179b866221709f52298c9633ad5254b801e91c0824',

// // 'Access-Control-Allow-Origin': '*'

const baseurl= 'https://coinranking1.p.rapidapi.com/coins'

 const cryptoApiHeaders= {
    'X-RapidAPI-Key': '0c709df4eemsh6161f6caf2cdc44p132b38jsnd5ad17446c9f',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }





const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseurl }),
  endpoints: (builder) => ({
    GetCryptos: builder.query({
      query: (count) => createRequest(baseurl, `/stats`, count),

     }),
    GetCryptoDetails: builder.query({
      query: (coinId) => createRequest(baseurl,  `/coins`, coinId),
    }),
    GetCryptoHistory: builder.query({
      query: (coinId, timeperiod) => createRequest(baseurl, `/`, coinId,{timeperiod}),
    })
  })
})
  
export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;