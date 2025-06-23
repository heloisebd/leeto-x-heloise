interface Props {
  title?: string;
  text: string;
}

const TextBanner = ({ title, text }: Props) => (
  <div className="flex flex-col gap-2 rounded-lg bg-slate-50 p-4">
    {title ? <h2 className="text-sm font-semibold">{title}</h2> : null}
    <p>{text}</p>
  </div>
);

export default TextBanner;
