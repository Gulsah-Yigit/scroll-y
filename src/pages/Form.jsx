import "../styles/form/checkbox.css";
import "../styles/form/radio.css";
import "../styles/form/selectBox.css";
import "../styles/form/file.css";

const Form = () => {
  return (
    <div className="divv">
      <label className="checkbox">
        <input type="checkbox" name="rule" />
        <span className="checkbox">
          <span></span>
        </span>
        <span className="text">Okudum ve Kuralları kabul ediyorum...</span>
      </label>

      <hr />
      <br />

      <label className="radio">
        <input type="radio" name="cinsiyet" />
        <span className="radio"></span>
        <span className="text">Erkek</span>
      </label>

      <label className="radio">
        <input type="radio" name="cinsiyet" />
        <span className="radio"></span>
        <span className="text">Kadın</span>
      </label>

      <hr />
      <br />

      <select name="cinsiyet" className="selectBox">
        <option value="1">Erkek</option>
        <option value="2">Kadın</option>
      </select>

      <h4 />
      <br />

      <label className="file">
        <input type="file" />
        <span className="file">Resim yüklemek için tıklayın</span>
      </label>
    </div>
  );
};

export default Form;
