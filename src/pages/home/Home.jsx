import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "./home.scss";
import GitHubIcon from "@material-ui/icons/GitHub";

// { setName }

function Home() {
	let history = useHistory();
	
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data, e) => {
		setIsLoading(true);
		setError(false);

		let res = await fetch(`https://api.github.com/users/${data.username}`);
		let user = await res.json();
		localStorage.setItem("user", JSON.stringify(user))		
    
		if(user.message === "Not Found") {
			setError(true);
			setIsLoading(false);
		} else {
			JSON.parse(localStorage.getItem("user"));
			setError(false);			
			setIsLoading(false);
			history.push("/profile");
		}
  };	

  return (
    <div className="home">
      <div className="wrapper">
        <div className="intro">
          <GitHubIcon className="gitIcon" />
          <h1 className="title">GitHub Profiler</h1>
          <h4 className="description">
            A simple app to fetch github user and display the information in a
            nice modern card design{" "}
          </h4>
        </div>

        <div className="inputSection">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="githubUsername">Enter username</label>
            <input
              type="text"
              id="githubUsername"
              className="inputField"
              placeholder="Valid Github username"
              name="username"
              {...register("username", { required: true })}
            />
            <button type="submit" disabled={isLoading}>Submit</button>
          </form>					
        </div>

				{error && (<div className="errorMsg">User not found!!!</div>) }	

        <div className="footerSection">
          designed and developed by Prosper Atu
          <img
            src="https://scontent.fabb1-2.fna.fbcdn.net/v/t39.30808-6/217424007_4220080394704150_8638436047542843330_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHwzLLaBkoHOCKlDdC2XaWzc8x7QxREICtzzHtDFEQgK1sJV72LbiMYOOQgpvRrklaZRTlV9H6cgVOiO7m4S1SM&_nc_ohc=ZkbS_6j6vQkAX_LNlja&_nc_ht=scontent.fabb1-2.fna&oh=85afeeb108027b1efe8c48c67f9857cd&oe=61076392"
            alt=""
            className="img"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
