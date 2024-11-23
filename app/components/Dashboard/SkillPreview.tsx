const SkillPreview = ({ resumeInfo }: any) => {
  return (
    <div>
      {" "}
      <div className='my-6'>
        <h2
          className='text-center font-bold text-sm mb-2'
          style={{
            color: resumeInfo?.themeColor,
          }}
        >
          Skills
        </h2>
        <hr
          style={{
            borderColor: resumeInfo?.themeColor,
          }}
        />
        <div className='grid grid-cols-2 gap-3 my-4'>
          {resumeInfo?.skills.map((item: any, index: number) => (
            <div key={index} className='flex items-center justify-between'>
              <h2 className='text-xs'>{item?.name}</h2>
              <div className='h-2 bg-gray-200 w-[120px]'>
                <div
                  className='h-2'
                  style={{
                    backgroundColor: resumeInfo?.themeColor,
                    width: item?.rating + "%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillPreview;
