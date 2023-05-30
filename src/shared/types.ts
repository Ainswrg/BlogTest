interface Action<T = any> {
  type: T;
}
interface AnyAction extends Record<string, any>, Action {}

type DispatchFunction = <A extends Action<any>>(action: A) => A;

export type { Action, AnyAction, DispatchFunction };
