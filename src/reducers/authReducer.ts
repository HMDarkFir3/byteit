import { UserDTO } from "../dtos/UserDTO";

enum ActionType {
  Field = "field",
  Success = "success",
  SetUser = "setUser",
  SignOut = "signOut",
  ChangeUserColor = "changeUserColor",
  Loading = "loading",
  Error = "error",
}

export interface AuthState {
  user: UserDTO;
  email: string;
  password: string;
  image: string;
  name: string;
  user_color: string[];
  error: string;
  isLoading: boolean;
  isSigned: boolean;
}

export type AuthAction =
  | {
      type: "field";
      fieldName: string;
      payload: string;
    }
  | {
      type: "signOut";
    }
  | {
      type: "loading";
      payload: boolean;
    }
  | {
      type: "success" | "setUser";
      payload: UserDTO;
    }
  | {
      type: "changeUserColor";
      payload: string[];
    }
  | {
      type: "error";
      payload: string;
    };

export const initialState = {
  user: {} as UserDTO,
  email: "",
  password: "",
  image: "",
  name: "",
  user_color: ["", ""],
  error: "",
  isLoading: false,
  isSigned: false,
};

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "field": {
      return { ...state, [action.fieldName]: action.payload };
    }
    case "success": {
      return {
        ...state,
        email: "",
        password: "",
        user: action.payload,
        isLoading: false,
        isSigned: true,
      };
    }
    case "setUser": {
      return {
        ...state,
        user: action.payload,
      };
    }
    case "signOut": {
      return {
        ...state,
        isSigned: false,
      };
    }
    case "changeUserColor": {
      return {
        ...state,
        user_color: action.payload,
      };
    }
    case "loading": {
      return { ...state, isLoading: action.payload };
    }
    case "error": {
      return {
        ...state,
        user: {} as UserDTO,
        email: "",
        password: "",
        error: action.payload,
        isLoading: false,
        isSigned: false,
      };
    }
    default: {
      return { ...state };
    }
  }
};
