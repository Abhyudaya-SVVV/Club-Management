const asyncHandler = ( requrestHanderler) =>{
    return ( req, res, next) => {
        Promise
        .resolve( requrestHanderler( req,res,next))
        .catch((err) => next(err))
    }    
}

export {asyncHandler}