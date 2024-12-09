export interface IRegisterFormData {
  first_name: string;
  last_name: string;
  user_name: string;
  email: string;
  password: string;
  rpassword?: string;
}

export interface ILoginFormData {
  user_name: string;
  password: string;
}

//Forward Refs for login and registration forms
export interface ILoginFormRef {
  resetLoginForm: () => void;
}

export interface IRegisterFormRef {
  resetRegistrationForm: () => void;
}
