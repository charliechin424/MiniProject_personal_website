import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import services from "../services";
import "./alert.css"
// you should design your register page and api
function CreateUserPage() {
  const [formData, setFormData] = useState({ username: "", password: "", image:"", Student_ID:"", NTU_mail: ""});
  const [message, setMessage] = useState("");

  /** @type {React.ChangeEventHandler<HTMLInputElement>} */
  const handleTextInputChange = ({ target: { name, value } }) => {
    // const { name, value } = event.target
    // obj = { ...prev }; obj[name] = value
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  /** @type {React.FormEventHandler<HTMLFormElement>} */
  const handleFormSubmit = (event) => {
    services.user.createOne({ name: formData.username, password: formData.password, image: formData.image, Student_ID: formData.Student_ID, NTU_mail: formData.NTU_mail}).then((data) => {
      if (data === "Error"){
        var div = document.createElement('div');
        div.className = 'custom-confirm';
        var p = document.createElement('p');
        p.className = 'text';
        p.textContent = "此用戶名已被使用";
        div.appendChild(p);
        var okButton = document.createElement('button');
        okButton.textContent = '確定';
        okButton.className = 'btn ok';
        okButton.addEventListener('click', function() {
          div.style.display = 'none';
          resolve(true);
        });
        div.appendChild(okButton);
        document.body.appendChild(div);
      } else {
        var div = document.createElement('div');
        div.className = 'custom-confirm';
        var p = document.createElement('p');
        p.className = 'text';
        p.textContent = "成功建立帳號";
        div.appendChild(p);
        var okButton = document.createElement('button');
        okButton.textContent = '確定';
        okButton.className = 'btn ok';
        okButton.addEventListener('click', function() {
          div.style.display = 'none';
          resolve(true);
        });
        div.appendChild(okButton);
        document.body.appendChild(div);
        setMessage(JSON.stringify(data, null, 2));
      }
    });
    setFormData({ username: "", password: "", image: "", Student_ID: "", NTU_mail: ""});
    event.preventDefault();
  };
  function handleImageInputChange(event) {
    const reader = new window.FileReader();

    reader.readAsDataURL(event.target.files[0]);

    reader.onload = () => {
      const Base64Data = reader.result;  // reader.result 就是转成base64的数据
      setFormData((prev) => ({
        ...prev,
        ["image"]: Base64Data,
      }));
    };
  }
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create an account in Website!
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  required
                  className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleTextInputChange}
                />
              </div>
            </div>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleTextInputChange}
                />
              </div>
            </div>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="Student-ID" className="sr-only">
                  Student-ID
                </label>
                <input
                  name="Student_ID"
                  type="text"
                  required
                  className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Student-ID"
                  value={formData.Student_ID}
                  onChange={handleTextInputChange}
                />
              </div>
            </div>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="NTU-mail" className="sr-only">
                  your Mail
                </label>
                <input
                  name="NTU_mail"
                  type="text"
                  required
                  className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter your Mail"
                  value={formData.NTU_mail}
                  onChange={handleTextInputChange}
                />
              </div>
            </div>
            <div className="-space-y-px rounded-md shadow-sm">
            <div>
                <label htmlFor="profile-pic">Upload your Profile Picture (.jpg or .png):</label>
                <input type="file" id="profile-pic" accept="image/jpg,image/png" required onChange={handleImageInputChange} />
            </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <pre>{message}</pre> */}
    </>
  );
}

export default CreateUserPage;
