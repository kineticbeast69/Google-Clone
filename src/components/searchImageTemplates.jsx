function SearchImageTemplates({ data }) {
  return (
    <div
      className="group flex flex-col cursor-pointer p-2"
      onClick={() => window.open(data.image.contextLink)}
    >
      <div className="rounded-xl overflow-hidden bg-black/[0.03] h-[100px] md:h-[120px] lg:h-[140px] group-hover:shadow-slate-300">
        <img src={data.link} alt="" className="h-full w-full object-contain" />
      </div>
      <div className="text-xs text-[#70757a pt-2]">{data.displayLink}</div>
      <div className="text-sm truncate group-hover:underline pt-1">
        {data.title}
      </div>
    </div>
  );
}

export default SearchImageTemplates;
