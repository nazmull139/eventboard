const ErrorState = ({ message  }) => {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
        <h2 className="text-lg font-bold text-red-700">
          Unable to load events
        </h2>
  
        <p className="mt-2 text-sm text-red-600">
          {message}
        </p>
      </div>
    );
  };
  
  export default ErrorState;