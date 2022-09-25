export default async function handler(req, res) {
  const { userId, projectId } = JSON.parse(req.body);

  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${process.env.HARPER_API_KEY}`,
    },
    body: JSON.stringify({
      userId,
      projectId
    })
  }

  const results = await fetch('https://functions-test1-colbyfayock.harperdbcloud.com/users/progress/create', requestOptions).then(r => r.json());

  res.status(200).json({
    data: {
      id: results.inserted_hashes[0],
      userId,
      projectId
    },
    results
  });
}