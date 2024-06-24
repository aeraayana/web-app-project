import styled from "styled-components";
import Dropzone from "react-dropzone";

const Wrapper = styled.div`
    .label{
        color: var(--color-black)
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-normal);
        padding-bottom: 0.5rem;
    }

    .label-error{
        color: var(--color-error);
        font-family: var(--font-family-secondary);
        font-weight: var(--font-weight-normal);
        font-size: var(--font-size-normal);
        padding-top: 0.5rem;
    }
`;

const DropzoneText = {
    margin: "0",
    fontSize: "16px",
    fontWeight: "600",
    textAlign: "center",
};

const dropzoneStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    marginTop: "2rem",
    borderWidth: "2px",
    borderRadius: "2px",
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border 0.24s ease-in-out",
    cursor: "pointer",
};

const activeDropzoneStyle = {
    borderColor: "#00adb5",
};

const getVideoList = (video) => {
    return video.file?.map((file) => (
        <li key={file.name}>
            <video width="400" height="240" controls>
                <source src={file.preview} type="video/mp4"></source>
                <source src={file.preview} type="video/ogg"></source>
                <source src={file.preview} type="video/wav"></source>
                Your browser does not support the video tag.
            </video>
        </li>
    ))
}

const getImageList = (image) => {
    var reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = function(){
        document.getElementById('image-upload-preview').style.backgroundImage = "url(" + reader.result + ")";
    }
    return (
        <div id='image-upload-preview' style={{width:'400px', height:'240px', backgroundImage:`${image}`, backgroundRepeat:'no-repeat', backgroundSize:'contain'}}>
        </div>
    )
}


const InputFileWithPrompt = ({ prompt, id, type, errorMessage, className, onDrop, value }) => {

    const isError = errorMessage && errorMessage.length > 0;

    return (
        <Wrapper className={`col-start-start ${className}`} >
            {prompt && <label className="label" htmlFor={id} >{prompt}</label>}
            <Dropzone onDrop={onDrop}>
                {({getRootProps, getInputProps, isDragActive}) => (
                    <div
                        style={
                            isDragActive
                            ? { ...dropzoneStyle, ...activeDropzoneStyle }
                            : dropzoneStyle
                        }
                        className='w-full'
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <p style={DropzoneText}>
                            Drag and drop your files here, or click to select files
                        </p>
                        {value && type==='video' ? (
                            <ul>{getVideoList(value)}</ul>
                        ) : (value && type==='image')?(
                                <ul>{ getImageList(value) }</ul>
                        ) : <></>}
                    </div>
                )}
            </Dropzone>
            {errorMessage && <label className="label-error">{errorMessage}</label> }
        </Wrapper>
    )
}

export default InputFileWithPrompt
