export default async function handler(req, res) {
  const { userId, projectId } = req.query

  const requestOptions = {
    headers: {
      'Authorization': `Basic ${process.env.HARPER_API_KEY}`,
    }
  }

  const params = {
    userId,
    projectId
  };

  const paramsString = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');

  const results = await fetch(`https://functions-test1-colbyfayock.harperdbcloud.com/users/progress?${paramsString}`, requestOptions).then(r => r.json());

  res.status(200).json({
    data: results
  })
}