import "Select.css";

export const Select = () => {
  return (
    <div class="custom-select" style="width:200px;">
      <select>
        <option value="0">Select car:</option>
        <option value="1">INR</option>
        <option value="2">USD</option>
        <option value="3">EUR</option>
      </select>
    </div>
  );
};
