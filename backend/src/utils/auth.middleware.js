import jwt from 'jsonwebtoken';
import { User } from '../model/user.model.js';
import { ApiError } from '../utils/ApiError.js';

const authenticate = async (req, res, next) => {
    console.log(req.cookies);
    const token = req.cookies?.accessToken || req.header("Authorization").replace("Bearer ", "");

    if (!token) {
        return next(new ApiError(401, 'No token provided'));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded._id).select("-password -");

        if (!user) {
            return next(new ApiError(401, 'User not found'));
        }

        req.user = user;
        next();
    } catch (error) {
        next(new ApiError(401, 'Invalid token'));
    }
};

export { authenticate };
