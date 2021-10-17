/* eslint-disable @typescript-eslint/ban-types */
export type Props<T> = {
  [P in keyof T as T[P] extends Function ? never : P]: T[P];
};

export type OmitType<T> = Omit<T, 'type'>;
