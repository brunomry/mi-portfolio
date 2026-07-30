const CharacteristicsCard = ({caracteristica, descripcion}) => {
  return (
    <div className="min-w-[140px] flex-1 rounded-2xl border border-[#dce6ec] bg-[#f7fafc] px-4 py-4 md:px-5">
      <p className="mb-1 text-[11px] font-bold uppercase tracking-[.12em] text-[#829ab1]">{caracteristica}</p>
      <p className="text-[14px] font-bold text-[#102a43] md:text-[16px]">
        {descripcion}
      </p>
    </div>
  );
};

export default CharacteristicsCard;
