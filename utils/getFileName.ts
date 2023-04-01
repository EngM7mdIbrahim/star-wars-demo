export default function getFileName(name:string): string{
  const text = name.toLowerCase().replaceAll(" ","_");
  console.log(text)
  return text
}