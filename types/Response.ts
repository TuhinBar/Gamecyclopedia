interface Game{
    id: string;
    name: string;
    tier?: string;
    topCriticScore: number;
    images: {
      box:{
        og: string;
        sm: string;
      }
    };
  }
  
  interface APIResponse {
    games: Game[];
  }

  interface ListResponse {
    games: Game[];
  }

export type {APIResponse, ListResponse};