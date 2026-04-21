import { useState } from "react";

function RegisterForm() {
  //     const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");
  //   const [gender, setGender] = useState("");
  //   const [terms, setTerms] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    terms: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
    alert("Registration Successful");
  }

  const isDisabled =
    formData.name === "" ||
    formData.email === "" ||
    formData.password === "" ||
    formData.confirmPassword === "" ||
    formData.gender === "" ||
    formData.terms === false;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4 text-center">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border px-3 py-2 rounded"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border px-3 py-2 rounded"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border px-3 py-2 rounded"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full border px-3 py-2 rounded"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <select
            name="gender"
            className="w-full border px-3 py-2 rounded"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />
            <span className="text-sm">Accept Terms</span>
          </div>

          <button
            type="submit"
            disabled={isDisabled}
            className={`w-full py-2 rounded text-white ${
              isDisabled ? "bg-gray-400" : "bg-blue-500"
            }`}
          >
            Register
          </button>
        </form>

        <div className="mt-5 text-sm">
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
