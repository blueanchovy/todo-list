import { addDoc, collection } from "firebase/firestore";
import React from "react";
import "./AddTask.css";

function AddTask() {
  //   const [input, setInput] = useState("");
  //   const user = auth.currentUser;
  const sendMessage = (e) => {
    e.preventDefault();
    // const channelRef = doc(db, "rooms", channelId);

    // if (!channelId) {
    //   return false;
    // }

    // addDoc(collection(channelRef, "messages"), {
    //   message: input,
    //   timestamp: serverTimestamp(),
    //   user: user.displayName,
    //   userImage: user.photoURL,
    // });

    // chatRef.current.scrollIntoView({
    //   behavior: "smooth",
    // });

    // setInput("");
  };
  return (
    <div className="addTask">
      {/* <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit">
          Send
        </Button>
      </form> */}
      <div className="addTask__form">
        <form action="">
          <input />
          <button>
            {/* <p> Add Task </p> */}
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
