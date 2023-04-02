export default function getFileName(name:string): string{
  const text = name.toLowerCase().replaceAll(" ","_");
  
  return text
}