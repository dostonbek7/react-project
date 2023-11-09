function Category({ data }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-4 gap-10">
      {data.map((item) => {
        const { id, img, date, janr, icon, movieName, ageBorder } = item;
        return (
          <div key={id}>
            <div>
            <img className="object-cover md:w-56 lg:w-[430px] h-60 rounded-lg mb-2"
              src={img}
              alt=""
            />
            <div className="flex items-center gap-2">
              <p className="text-white text-lg font-light opacity-75">{date}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3"
                height="3"
                viewBox="0 0 3 3"
                fill="none"
              >
                <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white" />
              </svg>
              <img src={icon} alt="" />
              <p className="text-white text-lg font-light opacity-75">{janr}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3"
                height="3"
                viewBox="0 0 3 3"
                fill="none"
              >
                <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white" />
              </svg>
              <p className="text-white text-lg font-light opacity-75">{ageBorder}</p>
            </div>
            <h4 className="text-[#fff] text-[24px] font-medium">{movieName}</h4>
          </div>
          </div>
        );
      })}
    </div>
  );
}

export default Category;
