async function getData(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments`)
    const data = await res.json()
    return data
   }

   import { Button } from "@/component/TailwindMaterial/TailwindMaterial";
const Page = async() => {
    const data = await getData()
  console.log(data)
    return (
        <div>
            <Button>Click</Button>
            DashBoard{data.length}
        </div>
    );
};

export default Page;