export interface IApiPokemon {
  name: string;
  url: string;
}

export interface IApiPokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<IApiPokemon>;
}

export interface Ability2 {
    name: string;
    url: string;
}

export interface Ability {
    ability: Ability2;
    is_hidden: boolean;
    slot: number;
}

export interface Form {
    name: string;
    url: string;
}

export interface Version {
    name: string;
    url: string;
}

export interface GameIndice {
    game_index: number;
    version: Version;
}

export interface Move2 {
    name: string;
    url: string;
}

export interface MoveLearnMethod {
    name: string;
    url: string;
}

export interface VersionGroup {
    name: string;
    url: string;
}

export interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: MoveLearnMethod;
    version_group: VersionGroup;
}

export interface Move {
    move: Move2;
    version_group_details: VersionGroupDetail[];
}

export interface Species {
    name: string;
    url: string;
}

export interface DreamWorld {
    front_default: string;
    front_female?: any;
}

export interface OfficialArtwork {
    front_default: string;
}

export interface Other {
    dream_world: DreamWorld;
    'official-artwork': OfficialArtwork;
}

export interface Icons {
    front_default: string;
    front_female?: any;
}


export interface Icons2 {
    front_default: string;
    front_female?: any;
}


export interface Sprites {
    back_default: string;
    back_female?: any;
    back_shiny: string;
    back_shiny_female?: any;
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
    other: Other;
}

export interface Stat {
    name: string;
    url: string;
}

export interface Stats {
    base_stat: number;
    effort: number;
    stat: Stat;
}

export interface Type {
    name: string;
    url: string;
}

export interface Types {
    slot: number;
    type: Type;
}

export interface IApiPokemonDetails {
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  game_indices: GameIndice[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface IPokemonDetails {
  name: string;
  weight: number;
  height: number;
  images: Sprites;
}
