import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid/";
import enterKeyPressed from "../../../utils/checkKeyboardKeys";
interface Props {
  goUp: () => void;
  goDown: () => void;
  setIndex: (i: number) => void;
  bars: number;
  index: number;
}
export default function VerticalScroller({
  goUp,
  goDown,
  setIndex,
  bars,
  index,
}: Props) {
  return (
    <>
      <aside className="vertical-scroller">
        <div
          tabIndex={0}
          id="prev-component-button"
          className="vertical-scroller-arrows"
          onClick={() => goUp()}
          // onKeyDown={(e) => enterKeyPressed(e.code) && goUp()}
        >
          <ChevronUpIcon className="w-8 h-8" />
        </div>

        {[...Array(bars).fill(" ")].map((bar, i, arr) => (
          <div
            onClick={() => setIndex(i)}
            id="vertical-bars"
            key={i}
            className={`vertical-scroller-bars ${
              index === i ? "bg-red" : "bg-white/50"
            } `}
          ></div>
        ))}
        <div
          tabIndex={0}
          id="next-component-button"
          className="vertical-scroller-arrows"
          onClick={() => goDown()}
          // onKeyDown={(e) => enterKeyPressed(e.code) && goDown()}
        >
          <ChevronDownIcon className="w-8 h-8" />
        </div>
      </aside>
    </>
  );
}