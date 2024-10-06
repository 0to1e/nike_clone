// backend/utils/cookieGenerator.js
export const generateCookie = async (res, user) => {
  const token = await user.generateToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRY * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    sameSite:"Lax",
  };

  return res.cookie("token", token, options);
};
