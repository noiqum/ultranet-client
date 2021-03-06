import * as React from "react";
import { EOption, TPostData } from "../../common.types";
import { ReactComponent as CheckIn } from "../../svg/checkIn.svg";
import { ReactComponent as Emoji } from "../../svg/emoji.svg";
import { ReactComponent as Friend } from "../../svg/friend.svg";
import { gql, useMutation } from "@apollo/client";
// import { globalContext } from "../../store/context/global.context";

const StatusBox: React.FC = () => {
  // const { state } = React.useContext(globalContext);
  const [option, setOption] = React.useState<EOption>(EOption.status);
  const [postData, setPostData] = React.useState<TPostData>({
    option: option,
    content: "",
  });
  const CREATE_POST = gql`
    mutation createPost($option: String!, $content: String!) {
      createPost(postInput: { option: $option, content: $content }) {
        id
      }
    }
  `;
  const [createPost] = useMutation(CREATE_POST, {
    update(_, result) {
      console.log("result", result.data);
    },
    variables: {
      option: postData.option,
      content: postData.content,
    },
    onError(error) {
      console.log(error);
    },
  });

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const share = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    createPost();
  };

  return (
    <div className="status-box">
      <div className="status-box__menu">
        <span
          className={option === EOption.status ? "active" : ""}
          onClick={() => {
            setOption(EOption.status);
          }}
        >
          Status
        </span>
        <span
          className={option === EOption.photos ? "active" : ""}
          onClick={() => {
            setOption(EOption.photos);
          }}
        >
          Photos
        </span>
        <span
          className={option === EOption.videos ? "active" : ""}
          onClick={() => {
            setOption(EOption.videos);
          }}
        >
          Videos
        </span>
      </div>
      <div className="status-box__main">
        <img
          src="https://images.genius.com/2326b69829d58232a2521f09333da1b3.1000x1000x1.jpg"
          alt="user_profile_image"
        />
        {option === EOption.status ? (
          <textarea
            placeholder="write something..."
            name="content"
            value={postData.content}
            onChange={changeHandler}
          />
        ) : (
          <label htmlFor="file">
            Choose a File
            <input type="file" accept="image/*" />
          </label>
        )}
      </div>
      <div className="status-box__actions">
        <div className="status-box__actions__links">
          <a href="undefined">
            <Friend />
            <span>People</span>
          </a>
          <a href="undefined">
            <CheckIn />
            <span>Check In</span>
          </a>
          <a href="undefined">
            <Emoji />
            <span>Mood</span>
          </a>
        </div>
        <div className="status-box__actions__button">
          <button onClick={share}>Share</button>
        </div>
      </div>
    </div>
  );
};

export default StatusBox;
