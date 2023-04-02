export default function getIDFromURL(url: string): string{
  const urlTokens = url.split('/')
  urlTokens.pop()!
  console.log(urlTokens)
  return urlTokens.pop()!;
}