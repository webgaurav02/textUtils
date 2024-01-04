import "./Textbox.css";
import { useState } from "react";

const Textbox = (props) => {

    const [text, setText] = useState("");
    const [areaText, setAreaText] = useState("");
    const [isCopied, setVisible] = useState({
        display: "none"
    });

    const handleText = (e) => {
        setAreaText(e.target.value.replace(/\n/g, "\n"));
        setText(e.target.value.replace(/\n/g, "<br>"));
    }

    const setUpper = (e) => {
        e.preventDefault();
        setText(text.toUpperCase());
    }

    const setLower = (e) => {
        e.preventDefault();
        setText(text.toLowerCase());
    }

    const setTitle = (e) => {
        e.preventDefault();
        let str = text.replace(/<br>/g, " $ ");
        str = str.toLowerCase().split(' ');
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        setText(str.join(' ').replace(/\$/g, "<br>"));
    }

    const resetText = (e) => {
        e.preventDefault();
        setText(areaText.replace(/\n/g, "<br>"));
    }

    const copyText = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(text.replace(/<br>/g, "\n"));
        setVisible({
            display: "block"
        });
        setTimeout(() => {
            setVisible({
                display: "none"
            });
        }, 1200);
    }

    const clearText = (e) => {
        e.preventDefault();
        setText("");
        setAreaText("");
    }

    return (
        <div className="text-center">
            <form data-bs-theme={(props.mode) ? "dark" : "light"}>
                <div className="cont-60">
                    <div className="mb-3">
                        <label htmlFor="textArea" className="form-label h3 my-3 fw-bolder">Enter text here :</label>
                        <textarea
                            type="text"
                            className="form-control text-area"
                            id="textArea"
                            rows="8"
                            onChange={handleText}
                            value={areaText}
                        />
                        <p>
                            {(text.replace(/<br>/g, "").trim().length)} characters, {((text.trim().length) === 0) ? 0 : text.replace(/<br>/g, " ").trim().split(/\s+/).length} words
                        </p>
                    </div>
                    <button type="submit" className="btn btn-primary mx-2 ml-0" onClick={setUpper}>Uppercase</button>
                    <button type="submit" className="btn btn-primary mx-2" onClick={setLower}>Lowercase</button>
                    <button type="submit" className="btn btn-primary mx-2" onClick={setTitle}>Titlecase</button>
                    <button type="submit" className="btn btn-primary mx-2" onClick={copyText}>Copy</button>
                    <button type="submit" className="btn btn-outline-primary mx-2" onClick={resetText}>Reset</button>
                    <button type="submit" className="btn btn-outline-danger mx-2" onClick={clearText}>Clear</button>
                </div>
            </form>
            <div className="p-5">
                <h3 className="fw-bolder">Preview :</h3>
                <p className="text-start lh-lg" dangerouslySetInnerHTML={{ __html: text }}></p>
            </div>
            <div className='copied-container' style={isCopied}>
                <div className='copied-inner'>Copied to Clipboard!</div>
            </div>
        </div>
    );
}

export default Textbox;