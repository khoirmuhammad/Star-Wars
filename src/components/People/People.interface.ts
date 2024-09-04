export interface People {
    id: number;
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    birth_year: string;
    gender: string
}
  
export interface PeopleListProps {
    people: People[]; //An array of people objects
    onPageChange: (page: number) => void; //A function that gets called when the page needs to be changed
    currentPage: number; //The current page number in the pagination
    totalPages: number; //The total number of pages available
    hasPrevious: boolean; //A boolean indicating if there is a previous page available
    hasNext: boolean; //A boolean indicating if there is a next page available
}

export interface PeopleDetailProps {
    data: {
      name: string;
      height: string;
      mass: string;
      hair_color: string;
      skin_color: string;
      eye_color: string;
      birth_year: string;
      gender: string;
      homeworld: string;
      films: string[];
      species: string[];
      starships: string[];
      vehicles: string[];
      created: Date;
      edited: Date;
      url: string;
    };
}