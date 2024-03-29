import services from "../services";
import { useEffect, useState } from "react";
import { CommentList } from "./commentlists"

function chat() {
  services.user.getid().then((data) => {
    if (data === null){
      window.location.replace("/");
    }
  })
  const [formData, setFormData] = useState({ message: "" });

  /** @type {React.ChangeEventHandler<HTMLInputElement>} */
  const handleTextInputChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };  
  const [comment, setcomment] = useState([]);
  /** @type {React.FormEventHandler<HTMLFormElement>} */
  const handleFormSubmit = (event) => {
    services.user.post({ message: formData.message  });
    setTimeout(() => services.user.getOneComment().then((oneComment) => {
      setcomment([...oneComment, ...comment]);
    }),1000);
    setFormData({ message : ""});
    event.preventDefault();
  };


  useEffect(() => {
    services.user.getAllComment().then((allComment) => {
      setcomment(allComment);
    });
  }, []);
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="username" className="sr-only">
                  Type in
                </label>
                <input
                  name="message"
                  type="text"
                  required
                  className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter What You Want to Say"
                  value={formData.message}
                  onChange={handleTextInputChange}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Post to the message board.
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
      <CommentList comments={comment} />
      </div>
    </>
  );
}
export default chat;