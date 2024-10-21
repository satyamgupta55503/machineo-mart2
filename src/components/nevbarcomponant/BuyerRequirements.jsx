const BuyerRequirements = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-4">Buyer Requirements</h1>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to our Buyer Requirements page! Here you will find all the necessary information to ensure a smooth purchasing process.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Key Requirements</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li className="mb-2">Valid identification (e.g., driver’s license, passport)</li>
            <li className="mb-2">Proof of address (e.g., utility bill, bank statement)</li>
            <li className="mb-2">Financial statements (if applicable)</li>
            <li className="mb-2">Business registration documents (for businesses)</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-6 mb-2">How to Submit</h2>
          <p className="text-lg text-gray-700 mb-4">
            Please ensure all documents are submitted in clear, legible format. You can send your documents to us via email at [your email address].
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            For any questions or clarifications, feel free to reach out to our support team.
          </p>
        </div>
      </div>
    );
  };
  
  export default BuyerRequirements;
  