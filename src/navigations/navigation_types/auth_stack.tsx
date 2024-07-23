import { StackScreenProps } from "@react-navigation/stack";

export type AuthStackParamList = {
  LoginScreen: undefined;
  RegisterSuccessFullScreen: undefined;
  PersonalScreen: undefined;
  BusinessScreen: undefined;
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> =
  StackScreenProps<AuthStackParamList, Screen>;
