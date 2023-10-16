import { UserSchema } from "./../../../../entities/user/model/types/user";
import { CounterSchema } from "entities/counter/model/types/counterSchema";
import { LoginSchema } from "./../../../../features/AuthByUserName/model/types/loginSchema";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm: LoginSchema;
}
