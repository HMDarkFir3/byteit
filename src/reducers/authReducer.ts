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
      type: "loading" | "signOut";
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

function init(initialImage: string, initialUserColor: string[]) {
  return { image: initialImage, user_color: initialUserColor };
}

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case ActionType.Field: {
      return { ...state, [action.fieldName]: action.payload };
    }
    case ActionType.Success: {
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isSigned: true,
      };
    }
    case ActionType.SetUser: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case ActionType.SignOut: {
      return {
        ...state,
        isSigned: false,
      };
    }
    case ActionType.ChangeUserColor: {
      return {
        ...state,
        user_color: action.payload,
      };
    }
    case ActionType.Loading: {
      return { ...state, isLoading: true };
    }
    case ActionType.Error: {
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
