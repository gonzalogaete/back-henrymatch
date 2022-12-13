const Interest = require("../../db/models/Interest");

const axios = require("axios").default;

module.exports = {
  getUser: async (req, res, next) => {
    try {
      const accessToken = req.headers.authorization.split(" ")[1];

      const userInfo = (
        await axios.get("https://barv11.us.auth0.com/userinfo", {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        })
      ).data;

      req.user = userInfo;

      next();
    } catch (err) {
        res.status(404).send({
            error: err.code,
            description: err.message,
        })
    }
  },

  getInterest: async(req,res,next)=>{
    try{
      const interest = await Interest.findAll();
      const allInterest = [...interest]
      if(!name){
        return allInterest;
      }else{
        return allInterest.filter((p) => p.name.includes(name));
      }
    }catch(err){
      res.status(400).send({
        error: err.code,
        description:err.message,
      })
    }
  }
};
