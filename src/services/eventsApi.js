import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const eventsApiHeaders = {
    'x-rapidapi-host': 'coingecko.p.rapidapi.com',
  'x-rapidapi-key': '6a899945a5msh83d6d2a7395aaffp10f551jsnaead65f8c644'
}

const baseUrl = 'https://coingecko.p.rapidapi.com';

const createRequest = (url)=> ({
  url, headers: eventsApiHeaders
})
export const eventsApi = createApi({
  reducerPath:'eventsApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
   
    getEvents: builder.query({
      query: () => createRequest(`/events`)
    })
  })
});

export const {
  useGetEventsQuery
} = eventsApi;