export function NavBar(props) {
  return (
    <div className="Header flex flex-col items-center">
      <h1 className="text-center text-5xl py-7 font-medium text-[#2F9DCF]">
        เที่ยวไหนดี
      </h1>
      <div className="Search-container w-4/5">
        <label>ค้นหาที่เที่ยว</label>
        <div className="Search border-b border-gray-300 py-1">
          <input
            type="text"
            placeholder="หาที่เที่ยวแล้วไปกัน ..."
            className="placeholder-gray-400 w-full text-center bg-transparent focus:outline-none"
            onChange={(e) => {
              props.inputText(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
