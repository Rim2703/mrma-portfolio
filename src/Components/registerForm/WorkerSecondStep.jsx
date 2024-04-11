export default function SecondStep() {
  return (
    <>
      <h1>Personal Information</h1>
      <div className="flex flex-col">
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Second Name" required />
        <input type="date" placeholder="Date of Birth" required />
        <select name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input type="email" placeholder="Enter Your Email" />
        <input type="tel" placeholder="Phone No." />
        <input type="text" placeholder="Your Company" />
      </div>
    </>
  );
}
