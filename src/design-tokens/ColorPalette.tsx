import classNames from 'classnames';

const ColorPaletteItem = ({
  bgColorClass,
  name,
}: {
  bgColorClass: string;
  name: string;
}) => (
  <div className="flex flex-col items-center gap-3 rounded-lg border-1 border-slate-200 bg-slate-50 p-4">
    <div
      className={classNames(
        bgColorClass,
        'h-20 w-20 rounded-full border-4 border-white',
      )}
    ></div>
    <div className="font-bold">{name}</div>
  </div>
);

const ColorPalette = () => (
  <div className="flex flex-col gap-4">
    <h2>Main colors</h2>
    <div className="flex flex-wrap gap-4">
      <ColorPaletteItem
        bgColorClass="bg-leeto-blue-600"
        name="Leeto Blue 600"
      />
      <ColorPaletteItem bgColorClass="bg-pink-100" name="Pink 100" />
      <ColorPaletteItem bgColorClass="bg-pink-800" name="Pink 800" />
      <ColorPaletteItem bgColorClass="bg-green-100" name="Green 100" />
      <ColorPaletteItem bgColorClass="bg-green-800" name="Green 800" />
    </div>

    <h2>Neutral colors</h2>
    <div className="flex flex-wrap gap-4">
      <ColorPaletteItem bgColorClass="bg-slate-50" name="Slate 50" />
      <ColorPaletteItem bgColorClass="bg-slate-100" name="Slate 100" />
      <ColorPaletteItem bgColorClass="bg-slate-300" name="Slate 300" />
      <ColorPaletteItem bgColorClass="bg-slate-600" name="Slate 600" />
      <ColorPaletteItem bgColorClass="bg-slate-800" name="Slate 800" />
      <ColorPaletteItem bgColorClass="bg-slate-900" name="Slate 900" />
    </div>
  </div>
);
export default ColorPalette;
