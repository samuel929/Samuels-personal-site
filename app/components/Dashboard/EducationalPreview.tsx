const EducationalPreview = ({ resumeInfo }: any) => {
  return (
    <div>
      <div className='my-6'>
        <h2
          className='text-center font-bold text-sm mb-2'
          style={{
            color: resumeInfo?.themeColor,
          }}
        >
          Education Experiance
        </h2>
        <hr
          style={{
            borderColor: resumeInfo?.themeColor,
          }}
        />
        {resumeInfo?.education.map((item: any, index: number) => (
          <div key={index} className='my-5'>
            <h2
              className='text-sm font-bold'
              style={{
                color: resumeInfo?.themeColor,
              }}
            >
              {item.universityName}
            </h2>
            <h2 className='text-xs flex justify-between'>
              {item?.degree} in {item.major}
              <span>
                {item.startDate} - {item.endDate}
              </span>
            </h2>
            <p className='text-xs my-2'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalPreview;
