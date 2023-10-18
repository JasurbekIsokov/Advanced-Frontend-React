import { CounterSchema } from "../../../../entities/counter/model/types/counterSchema";
import { UserSchema } from "../../../../entities/user/index";
import { LoginSchema } from "features/AuthByUserName";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm: LoginSchema;
}
