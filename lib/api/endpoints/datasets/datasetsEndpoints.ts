
import {
    DatasetRequest,
    OrgsAPIResponse
} from "../../../types/datasets";
import { ApiResponseMetadata } from "../../../types/shared";
import { api } from "../../api";

 /**
  * DATASETS ENDPOINTS
  * @author Elie Gashagaza
  * @authorEmail gashagaza@awesomity.rw
  * @since Jan 25 2023
  */

const ordersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    datasets: builder.query<DatasetRequest, void>({
      providesTags: [],
      query: () => ({
        url: `/package_search?rows=1000&start=0`,
        method: "GET"
      })
    }),

    getOrganisations: builder.query<OrgsAPIResponse, void>({
      providesTags: [],
      query: () => ({
        url: `/group_list`,
        method: "GET"
      })
    }),
  })
});

export const { 
  useDatasetsQuery,
  useGetOrganisationsQuery
 } = ordersApi;
