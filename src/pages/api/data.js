import data from '../../../server/data.json'

export default function handler(
  request,
  response
) {
  response.status(200).json({
    body: data,
    query: request.query,
    cookies: request.cookies,
  });
}