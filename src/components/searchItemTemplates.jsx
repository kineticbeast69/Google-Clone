function SearchItemTemplates({ data }) {
  const createMarkUp = (html) => {
    return { __html: html };
  };
  return (
    <div className="flex flex-col py-3 max-w-[700px] ml-52">
      <div
        className="group cursor-pointer"
        onClick={() => window.open(data.link)}
      >
        <div className="text-sm truncate text-[#202124]">
          {data.formattedUrl}
        </div>
        <div className="group-hover:underline text-xl pt-2 text-[#1a0dab]">
          {data.title}
        </div>
      </div>
      <div
        className="text-sm leading-6 text-[#4d5156]"
        dangerouslySetInnerHTML={createMarkUp(data.htmlSnippet)}
      />
    </div>
  );
}

export default SearchItemTemplates;
