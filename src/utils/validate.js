export const checkValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);

  const isPasswordValid = /^.{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not Valid";

  if (!isPasswordValid) return "Password is not Valid";

  return null;
};
