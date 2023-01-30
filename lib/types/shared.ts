export type ApiResponseMetadata<T> = {
    statusCode: number;
    message?: string;
    payload?: T | any;
  };
  
  export type GenericResponse = ApiResponseMetadata<void>;
  
  export type BackendErrorTypes = {
    data: {
      message: string;
      payload: [
        {
          fieldName: string;
          messageError: string;
          rejectedValue: string;
        }
      ];
    };
    status: number;
  };
  
  export type Pagination = {
    pageable: {
      sort: {
        sorted: boolean;
        unsorted: boolean;
        empty: boolean;
      };
      pageNumber: number;
      pageSize: number;
      offset: number;
      paged: boolean;
      unpaged: boolean;
    };
    last: boolean;
    totalPages: number;
    totalElements: number;
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    numberOfElements: number;
    first: boolean;
    size: number;
    number: number;
    empty: boolean;
  };
  