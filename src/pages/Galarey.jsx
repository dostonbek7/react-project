function Galarey({ data }) {
  return (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 gap-5">
        {data.map((item) => {
          const { id, img, date, janr, icon, movieName, ageBorder } = item;
          return (
            <>
              <div className="relative" key={id}>
                <img className="object-cover w-[430px] h-[230px] rounded-lg" src={img} alt="" width={470} height={230} />
                <div className="flex items-center justify-items-start flex-col gap-1 mb-2 absolute left-8 bottom-2 ">
                  <div className="flex items-center gap-2">
                  <p className="text-white md:text-[13px] text-lg font-light opacity-75">{date}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3"
                    height="3"
                    viewBox="0 0 3 3"
                    fill="none"
                  >
                    <circle
                      opacity="0.5"
                      cx="1.5"
                      cy="1.5"
                      r="1.5"
                      fill="white"
                    />
                  </svg>
                  <img src={icon} alt="" />
                  <p className="text-white md:text-[13px] text-sm font-light opacity-75">{janr}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3"
                    height="3"
                    viewBox="0 0 3 3"
                    fill="none"
                  >
                    <circle
                      opacity="0.5"
                      cx="1.5"
                      cy="1.5"
                      r="1.5"
                      fill="white"
                    />
                  </svg>
                  <p className="text-white md:text-[13px] text-sm font-light opacity-75">{ageBorder}</p>
                  </div>
                  <div>
                  <h4 className="text-[#fff] text-[24px] font-medium">
                  {movieName}
                </h4>
                  </div>

                </div>
              </div>
            </>
          );
        })}
      </div>
);
}

export default Galarey;
