const Loading = () => {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />
          <p className="mt-4 text-sm font-semibold text-slate-500">
            Loading events...
          </p>
        </div>
      </div>
    );
  };
  
  export default Loading;