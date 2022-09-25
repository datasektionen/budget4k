import express from "express";
import { StatusCodes } from "http-status-codes";

/**
 * Returns an error response of the following format:
 *
 *  * ```
 * {"detail": "Detailed message",
 *  "status": 400,
 *  "timestamp": "Thu Jan 01 1970 01:00:00 GMT+0100 (Central European Standard Time)",
 *  "path":   "/api/test/create"
 * }
 * ```
 *
 * @param req the request object
 * @param res the response object
 * @param detail the detailed message
 * @param status the HTTP status code
 */
export const errorResponse = (
  req: express.Request,
  res: express.Response,
  detail: string | any,
  status: number
) => {
  let detailedMessage = "";

  // Do not send stack traces in production
  if (typeof detail === "object") {
    if (process.env.NODE_ENV === "development")
      detailedMessage = detail.toString();
  } else {
    detailedMessage = detail;
  }

  return res.status(status).json({
    detail: detailedMessage,
    status,
    timestamp: new Date(),
    // Sounds like "originalUrl" would be the complete url, but it is in fact only the complete path
    path: req.originalUrl,
  });
};

/**
 * Returns a successful response with the following format:
 *
 *  * ```
 * {"detail": "Detailed message",
 *  "status": 200,
 *  "data": {},
 *  "timestamp": "Thu Jan 01 1970 01:00:00 GMT+0100 (Central European Standard Time)",
 *  "path":   "/api/test/create"
 * }
 * ```
 *
 * `status` defaults to 200 if not provided.
 *
 * `detail` defaults to "" if not provided.
 *
 * @param req the request object
 * @param res the response object
 * @param detail the detailed message
 * @param data the data to send
 * @param status the HTTP status code
 */
export const successResponse = (
  req: express.Request,
  res: express.Response,
  data: any,
  detail = "",
  status: number = StatusCodes.OK
) => {
  return res.status(status).json({
    detail,
    data,
    timestamp: new Date(),
    status,
    path: req.originalUrl,
  });
};
