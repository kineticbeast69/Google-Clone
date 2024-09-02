function Loading() {
  return (
    <>
      <div className="flex align-middle justify-center mt-10">
        <div
          class="animate-spin inline-block size-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
          role="status"
          aria-label="loading"
        ></div>
      </div>
    </>
  );
}

export default Loading;
