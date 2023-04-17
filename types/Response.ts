interface Game{
    id: string;
    name: string;
  }
  
  interface APIResponse {
    games: Game[];
  }

  interface ListResponse {
    games: Game[];
  }

export type {APIResponse, ListResponse};