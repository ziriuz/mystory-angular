export class Group {
  id: number;
  code: string;
  name: string;
  short_name: string;
}

export class CatalogResponse {
  success: boolean;
  topic: string;
  message: string;
  items: Group[];
}

export class CatalogItemResponse {
  success: boolean;
  topic: string;
  message: string;
  catalog: Group;
}