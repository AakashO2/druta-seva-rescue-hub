
const Stats = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-druta">24/7</h3>
            <p className="text-gray-600 mt-2">Emergency Service</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl font-bold text-druta">10k+</h3>
            <p className="text-gray-600 mt-2">Successful Rescues</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl font-bold text-druta">100%</h3>
            <p className="text-gray-600 mt-2">Patient Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
