export default function getSpacedWord(name:string): string{
  const text = name.toLowerCase().replaceAll("_"," ");
  return text
}