import { useState, useRef } from "react";
import { UIButton } from "../uiHelpers";

const __yearOptions = [
  { value: "2021", text: "Events in 2021" },
  { value: "2022", text: "Events in 2022" },
];
const __monthOptions = [
  { value: "1", text: "January" },
  { value: "2", text: "February" },
  { value: "3", text: "March" },
  { value: "4", text: "April" },
  { value: "5", text: "May" },
  { value: "6", text: "June" },
  { value: "7", text: "July" },
  { value: "8", text: "August" },
  { value: "9", text: "September" },
  { value: "10", text: "October" },
  { value: "11", text: "November" },
  { value: "12", text: "December" },
];
function EventsSearch(props) {
  //* we can use get values inputs with two ways
  const [form, setForm] = useState({
    year: "",
    month: "",
  });
  const yearInputref = useRef();
  const monthInputRef = useRef();

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const submitValue = {
      year: yearInputref.current.value,
      month: monthInputRef.current.value,
    };
    props.onSearch(submitValue);
  };
  return (
    <>
      <form onSubmit={submitHandler} className="">
        <div className="row col-lg-6">
          <div className=" col-lg-4">
            <select
              name="year"
              className="form-control ui-input"
              onChange={onChangeHandler}
              ref={yearInputref}
            >
              <option value={null} style={{ display: "none" }}>
                Select Year
              </option>
              {__yearOptions.map((year) => (
                <option
                  key={year.value}
                  value={year.value}
                >{`${year.text}`}</option>
              ))}
            </select>
          </div>
          <div className=" col-lg-4">
            <select
              name="month"
              placeholder="Select Year"
              className="form-control ui-input"
              onChange={onChangeHandler}
              ref={monthInputRef}
            >
              <option value={null} style={{ display: "none" }}>
                Select Month
              </option>
              {__monthOptions.map((month) => (
                <option
                  key={month.value}
                  value={month.value}
                >{`${month.text}`}</option>
              ))}
            </select>
          </div>
          <div className="my-auto">
            <UIButton color="blue" text="Find Events" type="submit" />
          </div>
        </div>
      </form>
    </>
  );
}

export default EventsSearch;
