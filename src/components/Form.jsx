import searchIcon from '../image/search-icon.svg'

function Form() {
  return (
    <>
      <form className="flex gap-6 w-full h-[30px] boreder mb-[34px]">
        <div>
        <img src={searchIcon} alt="Search icon" />
        </div>
        <input className="bg-[#10141E] w-[320px] text-[#fff] outline-none opacity-40 hover:border-b-2 placeholder:text-[#fff]" type="text" placeholder='Search for movies or TV series' />
      </form>
    </>
  )
}

export default Form