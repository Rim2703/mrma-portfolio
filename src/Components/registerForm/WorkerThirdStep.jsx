export default function ThirdStep() {
  return (
    <>
      <h1>Address</h1>
      <div className="flex flex-col">
        <input type="text" placeholder="Street" />
        <input type="text" placeholder="City" />
        <input type="number" placeholder="Pincode" min="00000" max="9999" />
        <input type="state" placeholder="State" />
      </div>
    </>
  );
}
