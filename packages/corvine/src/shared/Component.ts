export enum ComponentTypes {
  ActionRow = 1,
  Button,
  SelectMenu,
}

export interface Component {
  type: ComponentTypes;
}

export interface SelectButtonShared {
  custom_id?: string;
  disabled?: boolean;
}
