import React, { Component } from "react";
import "./extra/jscolor";
import "./Jscolor.css";

/**
 * JsColor
 */
class JsColor extends Component {
  /**
   * JsColor Constructor
   * @param {*} props
   */
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      color: props.value
    };

    /**
     * Create references
     */
    this.colorInput = React.createRef();
    this.colorSwatch = React.createRef();

    // Bind methods
    this.onChange = this.onChange.bind(this);
    this.onFineChange = this.onFineChange.bind(this);
    this.showColorPicker = this.showColorPicker.bind(this);
  }

  /**
   * Component mounted
   */
  componentDidMount() {
    // Setup jscolor
    window.jscolor.installByClassName("jscolor-input");

    // Bind events
    this.colorInput.current.addEventListener("onFineChange", this.onFineChange);
    this.colorInput.current.addEventListener("change", this.onChange);
    this.colorInput.current.addEventListener("input", this.onChange);

    // Set background and color
    this.colorSwatch.current.style.background = this.state.color;
    this.colorSwatch.current.style.color = this.state.color;
  }

  /**
   * Component will unmount
   */
  componentWillUnmount() {
    this.colorInput.current.removeEventListener(
      "onFineChange",
      this.onFineChange
    );
    this.colorInput.current.removeEventListener("change", this.onFineChange);
    this.colorInput.current.removeEventListener("input", this.onFineChange);
  }

  /**
   * On JsColor value change
   */
  onChange() {
    // Set state and call parent methods upon success set


     let colorHex = this.colorInput.current.jscolor.toHEXString()
    this.setState(
      { color: colorHex},
      function() {
        this.colorSwatch.current.style.background = this.state.color;
        this.colorSwatch.current.style.color = this.state.color;
        this.props.onChange(this.state.color);
      }
    );
  }

  /**
   * On FineChange of JsColor
   * @param {*} e
   */
  onFineChange(e) {
    // Set state and call parent methods upon success set
    this.setState({ color: `#${e.detail.jscolor}` }, function() {
      this.colorSwatch.current.style.background = this.state.color;
      this.colorSwatch.current.style.color = this.state.color;
      this.props.onChange(this.state.color);
    });
  }

  /**
   * Show color picker
   */
  showColorPicker() {
    this.colorInput.current.jscolor.show();
  }

  /**
   * Render component
   */
  render() {
    return (
      <div>
        {this.props.label ? (
          <div className="Polaris-Labelled__LabelWrapper">
            <div className="Polaris-Label">
              <label
                id={`${this.props.id}Label`}
                htmlFor={this.props.id}
                className="Polaris-Label__Text"
              >
                {this.props.label}
              </label>
            </div>
          </div>
        ) : null}

        <div className="Polaris-Connected">
          <div className="Polaris-Connected__Item Polaris-Connected__Item--connection">
            <button
              type="button"
              className="Polaris-Button Polaris-Button--outline"
              onClick={this.showColorPicker}
              ref={this.colorSwatch}
            />
          </div>
          <div className="Polaris-Connected__Item Polaris-Connected__Item--primary vanishYouHoe">
            <div className="Polaris-TextField">
              <input
                id={this.props.id}
                className="Polaris-TextField__Input jscolor-input {hash:true,styleElement:'',onFineChange:'jsColorOnFineChange(this)'}"
                aria-labelledby={`${this.props.id}Label`}
                aria-invalid="false"
                value={this.props.value}
                onChange={() => {}}
                onFocus={this.showColorPicker}
                ref={this.colorInput}
                maxLength="7"
              />
              <div className="Polaris-TextField__Backdrop" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * JsColor onFineChange callback
 * @param {*} thisObj
 */
window.jsColorOnFineChange = function(thisObj) {
  thisObj.valueElement.dispatchEvent(
    new CustomEvent("onFineChange", { detail: { jscolor: thisObj } })
  );
};

export default JsColor;
