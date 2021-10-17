import { Base } from '../shared/Base';
import {
  Component,
  ComponentTypes,
  SelectButtonShared,
} from '../shared/Component';
import { PartialEmoji } from '../shared/PartialEmoji';
import { OmitType, Props } from '../shared/Props';

export interface SelectMenuOptions {
  label: string;
  value: string;
  description?: string;
  emoji?: PartialEmoji;
  default?: boolean;
}

export interface SelectMenu extends SelectButtonShared {
  custom_id: string;
  options: SelectMenuOptions[];
  placeholder?: string;
  min_values?: number;
  max_values?: number;
}
export class SelectMenu extends Base implements Component {
  type = ComponentTypes.SelectMenu;
  constructor(props: OmitType<Props<SelectMenu>>) {
    super();
    Object.assign(this, props);
  }
}
