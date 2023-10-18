import { CounterSchema } from "entities/counter/model/types/counterSchema";
import { LoginSchema } from "features/AuthByUserName/model/types/loginSchema";

export interface User {
  id: string;
  username: string;
}

export interface UserSchema {
  authData?: User;
}

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm: LoginSchema;
}
