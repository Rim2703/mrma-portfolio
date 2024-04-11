export default function FourthStep() {
  return (
    <>
      <h1>Select Category</h1>
      <select name="user-role">
        <option value="worker">Worker</option>
        <option value="constructor">Constructor</option>
      </select>
      <select name="work-category">
        <option value="construction-worker">Construction Worker</option>
        <option value="household-helper">Household Helper</option>
        <option value="factory-worker">Factory Worker</option>
        <option value="farm-labourer">Farm Labourer</option>
        <option value="transportation-worker">Transportation Worker</option>
        <option value="skilled-worker">Skilled Worker</option>
        <option value="service worker">Service Worker</option>
      </select>
    </>
  );
}
