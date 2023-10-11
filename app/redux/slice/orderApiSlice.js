import { apiSlice } from './apiSlice';
import apiEndpoints from '../../config/apiEndpoints';

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: apiEndpoints.ORDERS,
        method: 'POST',
        body: { ...order },
        credentials: 'include',
      }),
    }),
    getOrderDetails: builder.query({
      query: (id) => ({
        url: `${apiEndpoints.ORDERS}/${id}`,
        credentials: 'include',
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrderDetailsQuery } =
  orderApiSlice;
