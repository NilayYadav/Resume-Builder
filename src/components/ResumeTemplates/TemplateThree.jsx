import { useDetails } from "../../context/DetailsProvider";

export function TemplateThree({ refrence }) {
  const { detailState } = useDetails();
  const {
    image,
    firstName,
    lastName,
    email,
    phone,
    address,
    pincode,
    city,
    workExperience,
    education,
    skills,
  } = detailState;

  return (
    <div ref={refrence}>
      <div className="text-3xl font-bold flex items-center justify-center py-5 bg-green text-white">
        {image && (
          <img
            className="w-24 h-24 rounded-full mr-5 object-cover"
            src={URL.createObjectURL(image)}
            alt=""
          />
        )}
        {`${firstName} ${lastName}`}
      </div>
      <div className="flex">
        <div className="w-1/2">
          <div className="my-8 ml-10 mr-5">
            <p className="text-2xl font-bold text-green">Contact</p>
            <div className="text-xl">
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
              <p>Address: {address + ", " + city + "-" + pincode}</p>
            </div>
          </div>

          <div className="my-8 ml-10 mr-5">
            <p className="text-2xl font-bold text-green">Skills</p>
            <ul className="ml-5 list-disc text-xl">
              {skills?.map(({ id, skill, level }) => (
                <li key={id}>
                  <p>
                    {skill} - <span>{level}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-1/2">
          <div className="my-8 ml-10 mr-5">
            <p className="text-2xl font-bold text-green">Education</p>
            <ul className="ml-5 list-disc text-xl">
              {education?.map(
                ({ id, degree, city, school, startDate, endDate }) => (
                  <li key={id}>
                    <p>{school + " - " + city}</p>
                    <p>
                      {degree}{" "}
                      <span>{"(" + startDate + " - " + endDate + ")"}</span>{" "}
                    </p>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="my-8 ml-10 mr-5">
            <p className="text-2xl font-bold text-green">Experience</p>
            <ul className="ml-5 list-disc text-xl">
              {workExperience?.map(
                ({ id, job, company, startDate, endDate }) => (
                  <li key={id}>
                    <p>{job}</p>
                    <p>
                      {company} - <span>({startDate + "-" + endDate})</span>
                    </p>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
