import { PartialEmoji } from '../shared/PartialEmoji';
import {
  Component,
  ComponentTypes,
  SelectButtonShared,
} from '../shared/Component';
import { Base } from '../shared/Base';
import { OmitType, Props } from '../shared/Props';

export enum ButtonStyles {
  Primary = 1,
  Secondary,
  Success,
  Danger,
  Link,
}

export interface Button extends SelectButtonShared {
  style: ButtonStyles;
  label?: string;
  emoji?: PartialEmoji;
  url?: string | never;
}

export class Button extends Base implements Component {
  type = ComponentTypes.Button;

  constructor(props: OmitType<Props<Button>>) {
    super();
    Object.assign(this, props);
  }
}
