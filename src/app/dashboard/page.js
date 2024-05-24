async function getData(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments`)
    const data = await res.json()
    return data
   }
const Page = async() => {
    const data = await getData()
  console.log(data)
    return (
        <div>
            DashBoard{data.length}
        </div>
    );
};

export default Page;