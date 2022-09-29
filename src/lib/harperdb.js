/**
 * harperClient
 */

export async function harperClient(body) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${process.env.HARPER_API_KEY}`,
    },
    body: JSON.stringify(body),
    redirect: 'follow',
  }

  const response = await fetch(process.env.HARPER_DATABASE_URL, requestOptions);
  const result = await response.text();

  return JSON.parse(result, (key, value) => {
    if ( !isNaN(Date.parse(value)) ) {
      return new Date(value);
    }
    return value;
  });
}