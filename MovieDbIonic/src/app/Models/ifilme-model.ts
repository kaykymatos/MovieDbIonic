export interface IFilmeModel {
    poster_path?: string;
    title?: string;
    original_title?: string;
    release_date?: string;

    adult?: boolean;
    overview?: string;   
    first_air_date?: string;
    genre_ids?: number[];
    id?: number;    
    original_name?: string;
    original_language?: string;    
    name: string;
    backdrop_path?: string;
    popularity?: number;
    vote_count?: number;
    video?: boolean;
    vote_average?: number;
}
