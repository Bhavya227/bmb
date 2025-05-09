
import DonorForm from "@/components/donor/DonorForm";

const Register = () => {
  return (
    <div className="container px-4 py-8 mx-auto max-w-7xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Donor Registration</h1>
        <p className="text-gray-500">Register as a new blood donor</p>
      </div>
      
      <DonorForm />
    </div>
  );
};

export default Register;
