export function firebaseError(error: any) {
  let e;
  if (error.message === "Firebase: Error (auth/email-already-in-use).") {
    return "Email already in use";
  }
  if (error.message === "Firebase: Error (auth/popup-closed-by-user).") {
    return "Authentication Failed";
  }
  if (error.message === "Firebase: Error (auth/invalid-credential).") {
    return "Email or password incorrect";
  }

  if (
    error.message ===
    "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
  ) {
    return "Too many requests, please try again later";
  }
  return error.message;
}
