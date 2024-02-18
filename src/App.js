import logo from "./logo.svg";
import "./App.css";
import InfoDialog from "./components/InfoDialog";
import { useEffect, useState } from "react";
import { api } from "./apis/config/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { toggleSessionDialog } from "./store/sessionDialogSlice";
import { Dropdown, Input, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import FileUpload from "./components/FileUpload";

const uploadedFilesData = [
  'file1',
  'file2',
  'file3',
  'file4'
]
function App() {
  const items = [
    {
      value: "hello",
      label: <a onClick={() => handleLinkClick("hello")}>hello</a>,
      key: "0",
    },
    {
      value: "man",
      label: "What is the",
      key: "1",
    },
    {
      value: "what is the",
      label: "testing",
      type: "divider",
    },
    {
      value: "3rd menu item",
      label: "3rd menu item",
      key: "3",
    },
  ];
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState(items);
  const [showUpload, setShowUpload]  = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState(uploadedFilesData);

  const dispatch = useDispatch();
  const sessionDialog = useSelector((state) => state.sessionDialog);

  const handleDialog = () => {
    dispatch(toggleSessionDialog({ show: !sessionDialog.show }));
  };

  const handleLinkClick = (props) => {
    console.log("hi...", props);
  };


  useEffect(() => {
    (async function () {
      try {
        const response = await api.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        // console.log(response.data);
      } catch (error) {
        console.log("error from comp", error);
      }
    })();
  });

  const handleChange = (e) => {
    let value = e.target.value.trim();
    setInput(value);
    console.log(value);
    let temp = items.filter((item) =>
      item.value.toLowerCase().includes(value.toLowerCase())
    );
    console.log(value, temp);
    setSuggestions(temp);
  };

  const handleFileChange = () => {
    
    // let upldatedList = setUploadedFiles;
    // console.log(upldatedList)
    setUploadedFiles([]);
  }

  return (
    <div className="App">
      <div className="container">
        <button onClick={() => handleDialog()}>Open dialog</button>

        <div>
          <Dropdown
            placement="top"
            menu={{
              items: suggestions,
            }}
            trigger={["click"]}
            open={input.length > 2 && suggestions.length > 0}
          >
            <a
              onClick={(e) => {
                e.preventDefault();
                console.log("clicked");
              }}
            >
              <Space>
                <Input value={input} onChange={handleChange} />
              </Space>
            </a>
          </Dropdown>

            

          <InfoDialog show={sessionDialog.show} />
              <button onClick={handleFileChange}>Change File list</button>
          <br></br>
          <button onClick={() => setShowUpload(true)}>Upload Files</button>
          <FileUpload show={showUpload} onClose={() => setShowUpload(false)} uploadedFiles={uploadedFiles} />
        </div>
      </div>
    </div>
  );
}

export default App;
