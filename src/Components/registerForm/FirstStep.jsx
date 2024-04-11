export default function FirstStep() {
  return (
    <>
      <label htmlFor="user-type" className="block">
        <h1>Select Your Role</h1>
      </label>
      <select name="user-type" id="user-type">
        <option value="worker-contractor">Worker/Contractor</option>
        <option value="employer">Employer</option>
      </select>
    </>
  );
}
