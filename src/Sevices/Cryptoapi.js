import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react' 
 



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
      query: ({ coinId, timeperiod }) => createRequest(baseurl, `/`, coinId,timeperiod),
    })
  })
})
  
export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;