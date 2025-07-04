export interface List {
  id: string;
  title: string;
  folders: Folder[];
}

export interface Folder {
  id: string;
  title: string;
  description?: string;
  listId: string;
  items: Item[];
  created_at: string;
  updated_at: string;
}

export interface Item {
  id: string;
  name: string;
  checked: boolean;
  folderId: string;
  link?: string;
  created_at: string;
  updated_at: string;
}
