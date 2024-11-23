const ProffesionalExperiance = ({ resumeInfo }: any) => {
  return (
    <div className='my-6'>
      <h2
        className='text-center font-bold text-sm mb-2'
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Professional Experiance
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      {resumeInfo?.experience.map((item: any, index: number) => (
        <div key={index} className='my-5'>
          <h2
            className='text-sm font-bold'
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            {item?.title}
          </h2>
          <h2 className='text-xs flex justify-between'>
            {item?.companyName},{item?.city},{item.state}
            <span>
              {item.startDate}
              {item?.curretlyWorking ? "Present" : item.current}
            </span>
          </h2>
          <p className='text-xs my-2'>{item.workSummery}</p>
        </div>
      ))}
    </div>
  );
};

export default ProffesionalExperiance;
