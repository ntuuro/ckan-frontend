/**
 * DATASETS TYPES
 * @author Elie Gashagaza
 * @authorEmail gashagaza@awesomity.rw
 * @since Jan 25 2023
 */

 export type DatasetRequest = {
    help: string;
    success: boolean;
    result: {
        count: number;
        facets: {};
        results: [];
        sort: string;
        search_facets: {};
      };
  };

  export interface DatasetAPIResponse  {
    help: string;
    success: boolean;
    result: {
        count: number;
        facets: {};
        results: [];
        sort: string;
        search_facets: {};
      };
  };

  export type GetDatasets = {
    page: number | string;
    size: number | string;
  }

  export type data = {
    help: string,
    result: [],
    success: boolean,
  }

  export interface OrgsAPIResponse {
    help: string,
    result: [],
    success: boolean
  }