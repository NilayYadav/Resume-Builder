import { useDetails } from "../../context/DetailsProvider";

export function TemplateFour({ refrence }) {
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
    <div ref={refrence} className="flex">
      <div className="w-52 h-screen bg-orange">
        {image && (
          <img
            className="w-24 h-24 rounded-full object-cover m-auto p-1"
            src={URL.createObjectURL(image)}
            alt=""
          />
        )}
      </div>
      <div>
        <div className="text-orange font-bold text-4xl text-center m-2">
          {firstName + " " + lastName}
        </div>
        <div className="flex">
          <div className="w-1/2">
            <div className="my-8 ml-6 mr-2">
              <p className="text-2xl font-bold text-orange">Contact</p>
              <div className="text-xl">
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Address: {address + ", " + city + "-" + pincode}</p>
              </div>
            </div>

            <div className="my-8 ml-6 mr-2">
              <p className="text-2xl font-bold text-orange">Skills</p>
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
            <div className="my-8 ml-6 mr-2">
              <p className="text-2xl font-bold text-orange">Education</p>
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

            <div className="my-8 ml-6 mr-2">
              <p className="text-2xl font-bold text-orange">Experience</p>
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
    </div>
  );
}
