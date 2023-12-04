const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  switch (statusCode) {
    case 400:
      res.status(400).json({
        title: "Validation Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 401:
      res.status(401).json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 403:
      res.status(403).json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 404:
      res.status(404).json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 409:
      res.status(409).json({
        title: "Conflict",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 500:
      res.status(500).json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      console.error("Unhandled Error:", err);
      res.status(500).json({
        title: "Internal Server Error",
        message: "An unexpected error occurred.",
        stackTrace: err.stack,
      });
  }
};

module.exports = errorHandler;
