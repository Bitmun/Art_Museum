export interface DataResponse<T> {
  data: T;
  pagination: {
    total_pages: number;
    offset: number;
    current_page: number;
  };
}

export interface ArtHook<T> {
  response: DataResponse<T[]> | null;
  isLoading: boolean;
  error: string | null;
}
