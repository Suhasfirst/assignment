import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import img from "./login.png"
import key from "./key.png"


function Login({ onPlayerLoad }) {
    const navigate = useNavigate();
    let [data, setData] = useState({
        username: "",
        password: "",
    });

    const [resp, setResp] = useState({});

    let creden = (e) => {
        let newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    };

    function submit() {
        // console.log(data)
        axios
            .post("https://api-mq.dev2prod.tech/v1/pharma/login", {
                username: data.username,
                password: data.password,
            })
            .then(
                (res) => {
                    // if (res.status === 200)
                    {
                        // console.log(res.data)
                        setResp(res.data);
                        navigate("/home");
                        onPlayerLoad(res.data);
                    }
                },
                (error) => {
                    toast.error("Wrong Credentials!");
                    // console.log(res.status)
                }
            );
    }

    return (
        <div>
            <ToastContainer />
            <div id="superdiv">

                <div id="topdiv">

                    <div id="imgdiv">
                        <img src={img} height="400px" />
                    </div>

                    <div id="maindiv">

                        <h2 style={{ color: "white" }}>Log-in to your account</h2>
                        <div id="username">
                            <img height="25px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFDklEQVRoge2aTWwWRRjH/4OlLaEKLeXbxGIM2hgC0cSAQU0MRiQxMSoHBbyaeAARLh49arzhR1HjwZPxahSMCUUxba20SBWttYKJFBCtIlhoS+nPw8y627fb3Zl9twkH/pfJO/t8/d+ZnZnnmZVu4PqCKcsQsFDSg5I2SmqVdIekZkkNTuRfSX9IGpTUL+mIpC+NMf+UFUNhAHXANuAgMEE4JoADwLNAXTWxFBoRoF7SC5L2SFrhusckdUlql9QnaUDSOUkj7vl8ScslrZa0RtLDktZLqnXPhyS9LqnNGDNaJK5QEo8Bg4l/tQd4HmgsYKvR6fYm7P0MPDobsUdO64G3Eg57gc0l2TbuD/o2YX9ftdMtzdFS4KhzcBnYBdxUqhPrpwbYDVxxvrqBJWUZb3HDDdAPrMmRbwVeBtqBXxzxEeAk8AGwwcPnWmDA+RwAWqolsTRBogtYlCHbDLwPXEtdn2JMAq9k2UrY+zpBptjIuHcimk6dQEOG7BLguxwClbgK7AfmZ9htSJDppsg7A7ztDPTnjMQc4EggiSS+Amoz7DcTT7M3QklscYqXyX8nnqqCRIS9OT7WES8AfkszMA/7kgLs9JD/uAQiv3r42e1kB/CZYsAep9BLzhKLXf8vlkAE4PYcXzXAcSe7K49EPTDkhHOHEFhcEgmATR7+oil/mopRmVMh+7Ts2anHGPNZnmFJZW6KM66KCRyQdEzSSklPJh9UEnnOtfs9nU96yvngSp6AMQZJ77ifO1KFsAe4CWAUm1vkArgZu8GVgbs8fTYBY9h9aEHUnxyRh2SnSocx5oKPUWPMJUmnfWRzMCkpd+VyPv+STRdqZBM5SVOJbHTt4cAgvg+UT8OJwByk3bUPRB1JItHQHg8M4lSgfBqOBspHMU6fjsTHgFZfa9jjydkS3o8zQOXCk+X3bqfXH/UllaPz1O++BiUtlLQsQH4mLJe0IFcqxnnXNkUdSSLJaocvLkkqI78eVZzb++Cia2+JOryHMw3GmKuSvqjGhkO7MWa8SAjTeoBhN++aUhRmBHAvNgMsihHgnkCfzU73z6gvOSLDrg3KxIwxPZK2h+hUYLsxpjdQJ4oxlciga+8sEMynslXEUJyX9EkBvdWujWKeQuRH164NtWqMGZP0WoGAXi34bkQx/jDtCfCEm3eHChgWMBf4JuDd6AZqCvo67Gw8nvZwEfYg5n1oTLFxawCRlQV9RIfG8WSc/08tY8ywpEOS6iRtLeJE8Ublg5CNN4mtsvXiz2c83AI73L/VU8QD9ljvC59EqtK+Ia4Tb8sSrCMg1U3RXxVAJLh6SJzq/kZGCSkS3uuEjxFQ38WWVrsCiHQCtwXYrwH6nO6LPgp1xOWg7GqFlb8PeJdiu/sI8B6w3sPPS05nIHc0EkpbsClsaoEOe0TYydRrgGrRh61dTTtZEBfoJgm9yiAumf6EK5liq+QfYpe/2cI48BGwzvlcTFxI3xdEwhmYR1xA7sBe8uRV2svENaCN+L3rwF75pSLzDhFYJqlD0qrgf6JcnJR0vzFmxr0nMx8xxpyTra4MZsnNMk5J2pRFwhvACsKW1rLQ4WZFecDWhdsoryCXhUngTcq+DK0gtBl7HzhbGAQemTUCFWTqsGv+mRIJDGFvi/02u5IJ1WI/vziIXf9DMYb9hOMZYG41sZT5UU2j7Aq3QfYTjRbZelWUM1yQdFa2xtsnqVP2o5q/y4rhBq4n/AeyWtAPD9sO8AAAAABJRU5ErkJggg=="/>



                                <input
                                    type="text"
                                    id="username"
                                    placeholder="John Smith"
                                    onChange={(e) => creden(e)}
                                    value={data.username}
                                />
                        </div>

                        <div id="password">
                            <img src={key} alt="" />



                            <input
                                type="text"
                                id="password"
                                placeholder="**********"
                                onChange={(e) => creden(e)}
                                value={data.password}
                            />
                        </div>

                        <div id="login">
                            <button onClick={submit}>Login</button>
                        </div>
                    </div>
                    <h1>{resp?.data?.fullname}</h1>
                </div>
            </div>

            {/* <h5>{resp}</h5> */}
        </div>
    );
}

export default Login;
