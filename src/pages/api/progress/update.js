export default async function handler(req, res) {
  const { id, userId, projectId, checkedItems } = JSON.parse(req.body);

  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${process.env.HARPER_API_KEY}`,
    },
    body: JSON.stringify({
      id,
      userId,
      projectId,
      checkedItems
    })
  }

  const results = await fetch('https://functions-test1-colbyfayock.harperdbcloud.com/users/progress/update', requestOptions).then(r => r.json());

  res.status(200).json({
    results
  })
}