export const validateEmailFormat = (value: string) => {
  if (value.includes("@")) {
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(value)) {
      return "Invalid Email format";
    }
  }
  return true;
};

export const validatePasswordMatch =
  (getPassword: () => string) => (value?: string) => {
    const password = getPassword(); // Access the current password
    return value === password || (value ? "Passwords don't match" : true);
  };
