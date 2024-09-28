import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
   console.log(`tokenn is ${token}`)
  if (!token)
  
    return res.status(404).json({
      success: false,
      message: "Login First",
      
    });

  const decoded = jwt.verify(token, "dsfgsdfsdgsfd");
  
  req.user = await User.findById(decoded._id);
  
};
