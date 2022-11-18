import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react' 
 

const baseurl = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'da9d9bfabdmsh1b735ac267c3802p13ca61jsn5bd84fc5a770',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};





const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseurl }),
  endpoints: (builder) => ({
    GetCryptos: builder.query({
      query: (count) => createRequest(baseurl,'/', count),

    }),
    GetCryptoDetails: builder.query({
      query: (coinId) => createRequest(baseurl, '/', coinId),
    })
  })
})
  
export const { useGetCryptosQuery, useGetCryptoDetailsQuery, } = cryptoApi;