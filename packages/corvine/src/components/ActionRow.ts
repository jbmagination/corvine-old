import { Base } from '../shared/Base';
import { Component, ComponentTypes } from '../shared/Component';
import { Props } from '../shared/Props';
import { Button } from './Button';
import { SelectMenu } from './SelectMenu';

export interface ActionRow {
  components?:
    | [SelectMenu]
    | [Button]
    | [Button, Button]
    | [Button, Button, Button]
    | [Button, Button, Button, Button]
    | [Button, Button, Button, Button, Button];
}

export class ActionRow extends Base implements Component {
  type = ComponentTypes.ActionRow;
  constructor(props?: Pick<Props<ActionRow>, 'components'>) {
    super();
    this.components = props?.components;
  }
}
