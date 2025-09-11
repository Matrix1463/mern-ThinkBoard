import ratelimit from "../config/upstash.js";

// Rate limiting is a way to limit the number of requests a client can make to a server
// in a given period of time. This helps to prevent abuse and ensure fair usage of server resources.

const rateLimiter = async (req,res,next) => {
    // Here we use a fixed key for simplicity, but in a real application,
    // you might want to use something like req.ip or req.user.id to
    // have different limits for different users.
    try {
        const {success} = await ratelimit.limit("my_limit_key");
        if(!success) {
            return res.status(429).json({message:"Too many requests, please try again later."})
        }
        next();
    } catch (error) {
        console.log("Error in rateLimiter middleware", error);
        next(error); // pass the error to the next middleware

    }
}

export default rateLimiter;