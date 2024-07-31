const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl} `);
    res.status(404);
    next(error);
};
const errorHandler = (req, res, next) => {
    const statusCode = res.statuscode === 200 ? 500 : res.statuscode;
    res.status(statusCode);
    res.json({
        messaage: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    })
};

export { notFound, errorHandler }