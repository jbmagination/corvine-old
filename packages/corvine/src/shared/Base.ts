export abstract class Base {
  toJSONString() {
    return JSON.stringify(this, null, 2);
  }
  toObject() {
    return JSON.parse(this.toJSONString());
  }
}
