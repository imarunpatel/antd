import { Modal, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useState } from "react";

const FileUpload = ({ show, onClose, uploadedFiles }) => {


    // console.log('uploadedfile', uploadedFiles)

  const [files, setFiles] = useState([]);

  const beforeUpload = (file) => {

    const isDuplicate = files.some(existingFile => existingFile.name === file.name);

    if(isDuplicate) {
        message.error('File with the same name already existed');
        return Upload.LIST_IGNORE;
    }

    setFiles([...files, file])
    return false;
  };

  const handleSubmit = () => {
    console.log('selected files', files);
  };

  const handleFileRemove = (file) => {
    const newFileList = files.filter(item => item.uid !== file.uid);
    setFiles(newFileList);
  }
  return (
    <>
      <h1>File Upload</h1>
      <Modal open={show} title="Upload documents." onCancel={onClose} onOk={handleSubmit}>
        <Upload
            fileList={files}
          name="file"
          multiple={false}
          accept="pdf"
          beforeUpload={beforeUpload}
          onRemove={handleFileRemove}
          showUploadList={{ showRemoveIcon: true }}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from
            uploading company data or other banned files.
          </p>
        </Upload>
      </Modal>
    </>
  );
};

export default FileUpload;
