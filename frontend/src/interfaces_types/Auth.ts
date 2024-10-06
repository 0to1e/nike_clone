export type IRegisterFormData = {
  first_name: string;
  last_name: string;
  user_name: string;
  email: string;
  password: string;
  rpassword?: string;
};

export type ILoginFormData = {
  user_name: string;
  password: string;
};

//Forward Refs for login and registration forms
export type ILoginFormRef = {
  resetLoginForm: () => void;
};

export type IRegisterFormRef = {
  resetRegistrationForm: () => void;
};
