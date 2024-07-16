import { useState } from "react";

const todos = [
  {
    id: 100,
    title: "เรียนวิชาเขียนโปรแกรมเว็บ กลุ่ม 1",
    description: "วันนี้เฮาหางูกับหมูหวาน เเละ นีม ",
    cover: "/images/77.jpg",
    icon: "/images/10.jpg",
    enrollmrnt: true,
    checked: true
  },
  {
    id: 200,
    title: "เรียนวิชาเขียนโปรแกรมเว็บ กลุ่ม 2",
    description: "วันนี้กินKFC คนเดียว",
    cover: "/images/89.jpg",
    icon: "/images/899.jpg",
    enrollmrnt: false,
    checked: false
  },
  {
    id: 300,
    title: "เรียนวิชาเขียนโปรแกรมเว็บ กลุ่ม 3",
    description: "วันนี้เรียนกับ อาจารย์ ชุมพล สุดหล่อ อบอุ่น",
    cover: "/images/12.jpg",
    icon: "/images/ปกแจ็ก1.png",
    enrollmrnt: false,
    checked: false
  }
];

function IsCheecked({ chk }) {

  if (chk)

    return (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 0 1-1.5 0V6.75a3.75 3.75 0 1 0-7.5 0v3a3 3 0 0 1 3 3v6.75a3 3 0 0 1-3 3H3.75a3 3 0 0 1-3-3v-6.75a3 3 0 0 1 3-3h9v-3c0-2.9 2.35-5.25 5.25-5.25Z" />
        </svg> เปิดลงทะเบียน (Open)
      </>
    );
  else
    return (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
        </svg> ปิดลงทะเบียน (Closed)
      </>

    );
}

function Item({ id, title, desc, cov, ico, enr, chk }: { id: number, title: string, desc: string, cov: string, ico: string, enr: boolean, chk: boolean }) {
  // console.log("Key :",id);
  const [like, setLike] = useState(false);

  function hadleClickLike() {
    if (like)
      setLike(false);
    else
      setLike(true);
  }

  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url('${cov}')` }} title={title}>
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            <IsCheecked chk={chk} />
            <div className=" relative h-16 w-16">
              <button onClick={hadleClickLike}> {like ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" fill="#f472b6" />
              </svg> 
              ) : (
                <div className="absolute left-0 top-0 h-16 w-16">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </div>

              )
              }
              </button>
            </div>
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{desc}</p>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src={ico} title={title} />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">khettawan</p>
            <p className="text-gray-600">Aug 18 2023</p>
          </div>
        </div>
      </div>
    </div>

  );
}
export default function ToDoList() {
  const enrItem = todos.filter(subject =>
    subject.enrollmrnt === true ||
    subject.enrollmrnt === false

  );

  const items = enrItem.map(item =>
    <Item id={item.id} title={item.title} chk={item.checked} desc={item.description} cov={item.cover} ico={item.icon} enr={item.enrollmrnt} />
  );
  return (
    <div className="p-5 bg-purple-300" >
      <h1 className="text-xl font-bold">My to do lists:</h1>
      <ul>{items}</ul>
    </div>
  )
}