export default function getIDFromURL(url: string): string{
  const urlTokens = url.split('/')
  urlTokens.pop()!
  const id =  urlTokens.pop()!;
  console.log('ID: ', id);
  return id;
}