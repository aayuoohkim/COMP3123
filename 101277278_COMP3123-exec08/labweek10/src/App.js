import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [showName, setShowName] = useState(false);
  const [email, setEmail] = useState("");
  const [showEmail, setShowEmail] = useState(false);
  const [address, setAddress] = useState("");
  const [showAddress, setShowAddress] = useState(false);
  const [address2, setAddress2] = useState("");
  const [showAddress2, setShowAddress2] = useState(false);
  const [city, setCity] = useState("");
  const [showCity, setShowCity] = useState(false);
  const [province, setProvince] = useState("");
  const [showProvince, setShowProvince] = useState(false);
  const [postCode, setPostCode] = useState("");
  const [showPostCode, setShowPostCode] = useState(false);

  const funcToHandleSubmit = (e) => {
    e.preventDefault();

    setShowName(true);
    setShowEmail(true);
    setShowAddress(true);
    setShowAddress2(true);
    setShowCity(true);
    setShowProvince(true);
    setShowPostCode(true);
    setShowName(true);
  };

  return (
    <>
      <form onSubmit={funcToHandleSubmit}>
        <h1>Data Entry Form</h1>
        <div className="first">
          <div>
            <label htmlFor="email_val">Email</label>
            <input
              type="email"
              id="email_val"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="name_val">Name</label>
            <input
              type="text"
              id="name_val"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <label htmlFor="addr1_val">Address</label>
        <input
          type="text"
          id="addr1_val"
          placeholder="1234 Main St"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor="addr2_val">Address 2</label>
        <input
          type="text"
          id="addr2_val"
          placeholder="Apartment #, studio, or floor"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
        />
        <div className="second">
          <div>
            <label htmlFor="city_val">City</label>
            <input
              type="text"
              id="city_val"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="pr" id="prov_val">
              Province
            </label>
            <select
              id="pr"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            >
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value=" Manhitoba">Manhitoba</option>
              <option value="New bornswick">New bornswick</option>
              <option value="Newfoundland and Labrador">
                Newfoundland and Labrador
              </option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
            </select>
          </div>
          <div>
            <label htmlFor="pos_val">Postal Code</label>
            <input
              type="text"
              id="pos_val"
              value={postCode}
              onChange={(e) => setPostCode(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div id="check_box">
            <input type="checkbox" /> Agree Terms & Condition?
          </div>
          <div id="submit_button">
            <input type="submit" value="SUBMIT" id="btn" />
          </div>
        </div>
      </form>

      <div className="output_div">
        <div id="output_set">
          <h2>Output</h2>
          <div id="col1">Email:</div>
          <div id="col2">{showEmail && `${email}`}</div>
          <div id="col1">Full Name:</div>
          <div id="col2">{showName ? `${name}` : ""}</div>
          <div id="col1">Address:</div>
          <div id="col2">
            {showAddress && showAddress2 && `${address} ${address2}`}
          </div>
          <div id="col1">City:</div>
          <div id="col2">{showCity && `${city}`}</div>
          <div id="col1">Province:</div>
          <div id="col2">{showProvince && `${province}`}</div>
          <div id="col1">Postal Code:</div>
          <div id="col2">{showPostCode && `${postCode}`}</div>
        </div>
      </div>
    </>
  );
}

export default App;
