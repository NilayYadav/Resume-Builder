import { AiFillPicture } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { useDetails } from "../context/DetailsProvider";

export function PersonalDetail() {
  const inputClass =
    "border-2 border-grey rounded text-lg mt-3 p-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";
  const { detailState, dispatchDetail } = useDetails();
  const { image, firstName, lastName, email, phone, address, pincode, city } =
    detailState;

  return (
    <div className="w-11/12 max-w-4xl mx-auto my-10 p-5 border-2 border-coolGray rounded shadow-xl">
      <h2 className="text-2xl font-bold text-center text-black">
        Personal Detail
      </h2>
      <div className="flex items-center justify-center mt-5">
        {image ? (
          <div className="relative">
            <img
              className="w-24 h-24 rounded-full object-cover"
              src={URL.createObjectURL(image)}
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center w-24 h-24 m-auto border-2 border-grey rounded-full bg-lightGrey">
              <button
                onClick={() =>
                  dispatchDetail({
                    type: "ADD_IMAGE",
                    payload: "",
                  })
                }
              >
                <GiCancel />
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col">
            <label
              htmlFor="avatar"
              className="flex items-center justify-center w-24 h-24 m-auto rounded-full bg-lightGrey border-2 border-grey"
            >
              <AiFillPicture />
            </label>
            <input
              className="hidden"
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
              onChange={(e) =>
                dispatchDetail({
                  type: "ADD_IMAGE",
                  payload: e.target.files[0],
                })
              }
            ></input>
          </div>
        )}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full flex flex-col m-4">
          <label htmlFor="first name" className="text-grey">
            First Name
            <span className="text-red-500">*</span>
          </label>
          <input
            className={inputClass}
            type="text"
            value={firstName}
            onChange={(e) =>
              dispatchDetail({ type: "ADD_FIRSTNAME", payload: e.target.value })
            }
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="last name" className="text-grey">
            Last Name
            <span className="text-red-500">*</span>
          </label>
          <input
            className={inputClass}
            type="text"
            value={lastName}
            onChange={(e) =>
              dispatchDetail({ type: "ADD_LASTNAME", payload: e.target.value })
            }
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full flex flex-col m-4">
          <label htmlFor="email" className="text-grey">
            Email
            <span className="text-red-500">*</span>
          </label>
          <input
            className={inputClass}
            type="email"
            value={email}
            onChange={(e) =>
              dispatchDetail({ type: "ADD_EMAIL", payload: e.target.value })
            }
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="phone" className="text-grey">
            Phone Number
            <span className="text-red-500">*</span>
          </label>
          <input
            className={inputClass}
            type="tel"
            value={phone}
            onChange={(e) =>
              dispatchDetail({ type: "ADD_PHONE", payload: e.target.value })
            }
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full flex flex-col md:ml-4 mt-4">
          <label htmlFor="pincode" className="text-grey">
            Address
            <span className="text-red-500">*</span>
          </label>
          <textarea
            className={inputClass}
            id="story"
            name="story"
            rows="5"
            cols="33"
            value={address}
            onChange={(e) =>
              dispatchDetail({ type: "ADD_ADDRESS", payload: e.target.value })
            }
          ></textarea>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full flex flex-col m-4">
          <label htmlFor="pincode" className="text-grey">
            Pin Code
            <span className="text-red-500">*</span>
          </label>
          <input
            className={inputClass}
            type="text"
            value={pincode}
            onChange={(e) =>
              dispatchDetail({ type: "ADD_PINCODE", payload: e.target.value })
            }
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="city" className="text-grey">
            City/Town
            <span className="text-red-500">*</span>
          </label>
          <input
            className={inputClass}
            type="text"
            value={city}
            onChange={(e) =>
              dispatchDetail({ type: "ADD_CITY", payload: e.target.value })
            }
          />
        </div>
      </div>
      <div className="md:ml-4 mt-8">
        <button
          className="w-full bg-primary text-white text-lg font-bold py-2 hover:bg-btn_hover rounded"
          onClick={() => dispatchDetail({ type: "CHANGE_STEP", payload: 2 })}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
