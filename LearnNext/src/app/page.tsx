//server component by default
//fetch data inside a server component
//access backend resourses directly
//keep sensitive info in the server sice
//not to be exposed on the clint side

//you can not
//use hooks --> not possible
//add event
//browser api

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Hello from Me</h1>
      </main>
    </div>
  );
}
