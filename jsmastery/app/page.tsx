import Hello from "../components/hello";


export default function page() {
  console.log("what type o compoenet am i ?");
  return (
    <div className="text-4xl">
      <Hello/>
      Ewlcome to next js
   </div>
 ) 
}