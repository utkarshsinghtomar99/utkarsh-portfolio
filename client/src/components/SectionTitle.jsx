const SectionTitle = ({ title }) => {
  return (
    <section className="flex gap-10 items-center py-10">
      <h1 className="text-3xl text-secondary">{title}</h1>
      <div className="w-60 h-[1px] bg-tertiary"></div>
    </section>
  );
};

export default SectionTitle;
